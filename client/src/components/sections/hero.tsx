import { motion } from "framer-motion";
import { Sparkles, Palette, Scissors } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}splatter-bg.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="relative inline-block">
            <motion.div 
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 text-neon-yellow"
            >
              <Sparkles size={48} />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-hand font-bold leading-tight">
              <span className="block text-neon-pink mb-2">Minikünstler</span>
              <span className="block text-indigo-600">aufgepasst!</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Mellas Kreativwerkstatt – ab Februar in <span className="text-neon-blue font-bold">Mönsheim</span>
          </p>

          

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-12"
          >
            <p className="font-hand text-2xl text-neon-green rotate-hover inline-block cursor-default">
              Ab dem 09.02.2026 geht es los! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
