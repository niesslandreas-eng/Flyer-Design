import { motion } from "framer-motion";
import { User, Heart, Smile } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-hand text-neon-yellow mb-4">Über mich</h2>
            <div className="h-1 w-24 bg-neon-yellow mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-blue rounded-2xl rotate-3 group-hover:rotate-6 transition-transform opacity-70" />
              <div className="relative bg-background p-2 rounded-2xl border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
                 {/* Placeholder for Melanie's photo if user uploads one, for now a cute avatar */}
                 <div className="w-full h-full bg-zinc-800 rounded-xl flex items-center justify-center flex-col gap-4">
                    <User size={80} className="text-white/20" />
                    <p className="text-white/40 font-hand text-xl">Hier könnte dein Foto stehen!</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg"
            >
              <p className="font-hand text-3xl leading-relaxed">
                Ich bin <span className="text-neon-pink font-bold">Melanie</span>, 
                25 Jahre jung, staatlich anerkannte Erzieherin.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Ich möchte dir die Möglichkeit geben, Deine Kreativität zu entdecken und zu entwickeln – mit ganz viel <span className="font-hand text-2xl text-neon-blue inline-block rotate-3">Spaß!</span>
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-neon-pink/50 transition-colors">
                  <Heart className="text-neon-pink mb-2" />
                  <h4 className="font-bold mb-1">Leidenschaft</h4>
                  <p className="text-sm text-muted-foreground">Kreatives Arbeiten mit Herz</p>
                </div>
                <div className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-neon-yellow/50 transition-colors">
                  <Smile className="text-neon-yellow mb-2" />
                  <h4 className="font-bold mb-1">Freude</h4>
                  <p className="text-sm text-muted-foreground">Spaß steht an erster Stelle</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
