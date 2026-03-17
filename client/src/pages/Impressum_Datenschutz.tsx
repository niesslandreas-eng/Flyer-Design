import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function LegalPage() {
  const [, setLocation] = useLocation();

  // Scrollt nach oben, wenn die Seite geladen wird
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setLocation("/")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Zurück zur Startseite"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Rechtliches</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-12 text-white/80 leading-relaxed">
        
        {/* Impressum */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl font-bold text-white mb-6">Impressum</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-white mb-2">Angaben gemäß § 5 TMG</p>
              <p className="mb-4">
                Mella's Kreativwerkstatt<br />
                Melanie Kurtz<br />
                Langer Graben 22<br />
                71297 Mönsheim
              </p>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">Kontakt</p>
              <p className="mb-4">
                Telefon: 0152-33673977<br />
                Instagram: @mellas.kreativwerkstatt<br />
                Mail: melaniekurtz(at)outlook.de
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Melanie Kurtz
            </p>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Datenschutzerklärung */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold text-white mb-6">Datenschutzerklärung</h2>

          <div className="grid gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Allgemeine Hinweise</h3>
              <p>
                Der Schutz deiner persönlichen Daten ist mir sehr wichtig.
                Deine Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Erhebung und Verarbeitung personenbezogener Daten</h3>
              <p>
                Personenbezogene Daten werden nur erhoben, wenn du mir diese freiwillig mitteilst,
                z. B. über das Kontaktformular oder die Newsletter-Anmeldung.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-semibold text-white">Datenschutz – Fotos & Bildmaterial</h3>
              <p>
                Auf dieser Website werden Fotos aus dem Kurs- und Werkstattbetrieb von Mellas Kreativwerkstatt veröffentlicht.
                Die Veröffentlichung erfolgt ausschließlich mit vorheriger ausdrücklicher Einwilligung der Erziehungsberechtigten der abgebildeten Kinder gemäß Art. 6 Abs. 1 lit. a DSGVO.
                Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. In diesem Fall werden die betreffenden Fotos unverzüglich von der Website entfernt.
                Es werden keine Namen oder sonstige personenbezogene Daten der abgebildeten Kinder veröffentlicht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Kontaktaufnahme</h3>
                <p>
                  Die Kontaktaufnahme über externe Dienste wie WhatsApp oder Instagram erfolgt freiwillig und unterliegt den Datenschutzbestimmungen der jeweiligen Anbieter.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Hosting</h3>
                <p>
                  Diese Website wird bei Netlify gehostet. Netlify speichert technisch notwendige Daten,
                  um den Betrieb der Website zu gewährleisten.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Deine Rechte</h3>
              <p>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung
                der Verarbeitung deiner personenbezogenen Daten.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer-Abstand */}
      <footer className="py-12 border-t border-white/10 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Mella's Kreativwerkstatt
      </footer>
    </div>
  );
}