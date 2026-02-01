import { motion } from "framer-motion";
import { Calendar, MapPin, Paintbrush, Users } from "lucide-react";

const infoCards = [
  {
    icon: <Users className="w-8 h-8 text-neon-blue" />,
    title: "Wer?",
    content: "Für alle Grund- und Vorschüler die gerne kreativ sind und Lust haben etwas Neues auszuprobieren.",
    color: "border-neon-blue"
  },
  {
    icon: <Calendar className="w-8 h-8 text-neon-yellow" />,
    title: "Wann?",
    content: (
      <>
        Montags Nachmittags<br />
        14:15 Uhr - 15:15 Uhr &<br />
        15:30 Uhr - 17:00 Uhr
      </>
    ),
    color: "border-neon-yellow"
  },
  {
    icon: <MapPin className="w-8 h-8 text-neon-pink" />,
    title: "Wo?",
    content: (
      <>
        Mönsheim<br />
        Langer Graben 22
      </>
    ),
    color: "border-neon-pink"
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-neon-green" />,
    title: "Was?",
    content: "Kreative Mal- und Bastelangebote",
    color: "border-neon-green"
  }
];

export function Details() {
  return (
    <section id="details" className="py-20 relative">
      <div className="container px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-hand text-center mb-16"
        >
          Alle Infos auf einen <span className="text-neon-green">Blick</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-card p-6 rounded-2xl border-b-4 ${card.color} hover:bg-white/5 transition-colors flex flex-col items-center text-center`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3 font-hand">{card.title}</h3>
              <p className="text-muted-foreground">{card.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-3xl border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/splatter-bg.png')] opacity-10 bg-cover bg-center" />
          <div className="relative z-10">
            <h3 className="text-3xl font-hand mb-4">Neugierig geworden?</h3>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Melde dich gerne für eine <span className="text-neon-pink font-bold">kostenlose Probestunde</span> an, 
              danach kannst du entscheiden ob du regelmäßig kommen möchtest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
