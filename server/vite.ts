import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import react from "@vitejs/plugin-react"; // Importiert das React-Plugin
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    // WICHTIG: Wir fügen das React-Plugin hier direkt ein
    plugins: [react()], 
    root: path.resolve(import.meta.dirname, "..", "client"),
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "..", "client", "src"),
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },
  });

  app.use(vite.middlewares);

  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    if (req.method !== "GET" || url.startsWith("/api")) {
      return next();
    }

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      if (!fs.existsSync(clientTemplate)) {
        return res.status(404).send("index.html nicht gefunden");
      }

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      
      // Cache-Busting
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}