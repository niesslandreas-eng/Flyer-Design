import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function QrSpecial() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Falls du das spezielle Jotform-Script für das automatische Resizen brauchst:
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore - Das Script stellt diese Funktion global bereit
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260752185178059']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      {/* Header Bereich */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Einverständniserklärung
        </h1>
        <p className="text-slate-500 max-w-md mx-auto">
          Mellas Kreativwerkstatt – Bitte fülle das Formular vollständig aus.
        </p>
      </div>

      <Card className="max-w-4xl w-full shadow-lg border-none overflow-hidden bg-white">
        <CardContent className="p-0 relative min-h-[600px]">
          {/* Lade-Anzeige */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
              <p className="text-slate-400">Formular wird geladen...</p>
            </div>
          )}

          {/* Dein JotForm Iframe */}
          <iframe
            id="JotFormIFrame-260752185178059"
            title="Einverständniserklärung Mellas Kreativwerkstatt"
            onLoad={() => setLoading(false)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/260752185178059"
            scrolling="no"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "800px", // Etwas höher gesetzt für bessere Sichtbarkeit
              border: "none",
            }}
          />
        </CardContent>
      </Card>

      <div className="mt-8 text-slate-400 text-xs text-center">
        <p>&copy; {new Date().getFullYear()} Mellas Kreativwerkstatt</p>
        <p className="mt-1 italic">Vielen Dank für dein Vertrauen.</p>
      </div>
    </div>
  );
}