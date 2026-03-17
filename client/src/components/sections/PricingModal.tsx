import React from 'react';
import { X } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-background border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-white/10 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Preise & Abonnements</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Schließen"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-8 text-white/80">

          {/* Einzelkurse */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Einzelkurse</h3>
            <ul className="space-y-2">
              <li>1 Stunde: <strong className="text-white">60 €</strong> / Monat (monatlich kündbar)</li>
              <li>1,5 Stunden: <strong className="text-white">90 €</strong> / Monat (monatlich kündbar)</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* Laufzeit-Abos */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Laufzeit-Abonnements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-1">6 Monate Laufzeit</h4>
                <p>1 Stunde: 55 € / Monat</p>
                <p>1,5 Stunden: 82 € / Monat</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">12 Monate Laufzeit <span className="text-primary">(Bestpreis)</span></h4>
                <p>1 Stunde: 50 € / Monat</p>
                <p>1,5 Stunden: 75 € / Monat</p>
              </div>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* Kombikurse */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Kombikurse (pro Monat)</h3>
            <ul className="space-y-2">
              <li>1h + 1h: <strong className="text-white">110 €</strong></li>
              <li>1h + 1,5h: <strong className="text-white">135 €</strong></li>
              <li>1,5h + 1,5h: <strong className="text-white">160 €</strong></li>
            </ul>
            <p className="mt-3 text-sm text-white/60">
              Kombikurse enthalten bereits den Kombirabatt.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Kombikurse mit Laufzeit */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Kombikurse mit Laufzeit</h3>
            <div className="space-y-3">
              <p>6 Monate: zusätzlich <strong className="text-white">–5 %</strong></p>
              <p>12 Monate: zusätzlich <strong className="text-white">–10 %</strong></p>
              <p className="text-sm text-white/60">
                Maximaler Gesamtrabatt: 25 %
              </p>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* Zahlungsoptionen */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Zahlungsoptionen</h3>
            <ul className="space-y-2">
              <li>Monatliche Zahlung ohne Aufpreis</li>
              <li>6 Monate im Voraus: –3 %</li>
              <li>12 Monate im Voraus: –5 %</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* Hinweis */}
          <section>
            <p className="text-sm text-white/60">
              Die längeren Laufzeiten ermöglichen stabile Gruppen, kreative Kontinuität
              und eine verlässliche Planung – davon profitieren alle Kinder.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PricingModal;