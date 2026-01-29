import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-background border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-white/10 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Rechtliches</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Schließen"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-6 text-white/80">
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Impressum</h3>

            <p className="font-semibold mb-2">Angaben gemäß § 5 TMG</p>
            <p className="mb-4">
              Mella's Kreativwerkstatt<br />
              Melanie Kurtz<br />
              Langer Graben 22<br />
              71297 Mönsheim
            </p>

            <p className="mb-4">
              Telefon: 0152-33673977<br />
              Instagram: @mellas.kreativwerkstatt<br />
              Mail: melaniekurtz(at)outlook.de
            </p>

            <p className="mb-4">
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Melanie Kurtz
            </p>
          </section>

          <hr className="border-white/10" />

          <section>
            <h3 className="text-xl font-bold text-white mb-4">Datenschutzerklärung</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Allgemeine Hinweise</h4>
                <p>
                  Der Schutz deiner persönlichen Daten ist mir sehr wichtig.
                  Deine Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Erhebung und Verarbeitung personenbezogener Daten</h4>
                <p>
                  Personenbezogene Daten werden nur erhoben, wenn du mir diese freiwillig mitteilst,
                  z. B. über das Kontaktformular oder die Newsletter-Anmeldung.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Datenschutz – Fotos & Bildmaterial</h4>
                <p>
                  Auf dieser Website werden Fotos aus dem Kurs- und Werkstattbetrieb von Mellas Kreativwerkstatt veröffentlicht.
                  Die Veröffentlichung erfolgt ausschließlich mit vorheriger ausdrücklicher Einwilligung der Erziehungsberechtigten der abgebildeten Kinder gemäß Art. 6 Abs. 1 lit. a DSGVO.
                  Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. In diesem Fall werden die betreffenden Fotos unverzüglich von der Website entfernt.
                  Es werden keine Namen oder sonstige personenbezogene Daten der abgebildeten Kinder veröffentlicht.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Kontaktaufnahme</h4>
                <p>
                  Die Kontaktaufnahme über externe Dienste wie WhatsApp oder Instagram erfolgt freiwillig und unterliegt den Datenschutzbestimmungen der jeweiligen Anbieter.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Kontaktformular</h4>
                <p>
                  Wenn du mir per Formular Anfragen zukommen lässt, werden deine Angaben inklusive der Kontaktdaten
                  zur Bearbeitung der Anfrage gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Newsletter</h4>
                <p>
                  Wenn du den Newsletter abonnierst, wird deine E-Mail-Adresse ausschließlich
                  für den Versand von Informationen verwendet.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Hosting</h4>
                <p>
                  Diese Website wird bei Netlify gehostet. Netlify speichert technisch notwendige Daten,
                  um den Betrieb der Website zu gewährleisten.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Deine Rechte</h4>
                <p>
                  Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung
                  der Verarbeitung deiner personenbezogenen Daten.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
