import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function QrSpecial() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Falls das Formular nach 10 Sekunden immer noch nicht geladen hat, 
    // blenden wir den Loader trotzdem aus, um das Iframe zu zeigen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260752185178059']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Anmeldeformular für Kids
        </h1>
        <p className="text-slate-500 max-w-md mx-auto">
          Mellas Kreativwerkstatt – Bitte fülle das Formular vollständig aus.
        </p>
      </div>

      <Card className="max-w-4xl w-full shadow-lg border-none overflow-hidden bg-white min-h-[600px] flex flex-col">
        <CardContent className="p-0 relative flex-grow flex flex-col">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
              <p className="text-slate-400">Formular wird geladen...</p>
            </div>
          )}

          <iframe
            id="JotFormIFrame-260765075782062"
            title="Einverständniserklärung"
            onLoad={() => {
              console.log("Iframe loaded");
              setLoading(false);
            }}
            src="https://form.jotform.com/260765075782062"
            style={{
              width: "100%",
              height: "1000px", // Festgelegte Höhe als Fallback
              border: "none",
              display: loading ? "none" : "block", // Verhindert Flackern
            }}
            scrolling="yes" // Auf "yes" stellen, falls das Script fehlschlägt
          />
        </CardContent>
      </Card>

      <div className="mt-8 text-slate-400 text-xs text-center">
        &copy; {new Date().getFullYear()} Mellas Kreativwerkstatt
      </div>
    </div>
  );
}