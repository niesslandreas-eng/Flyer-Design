import { motion } from "framer-motion";
import { Phone, Instagram, Send } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="py-20 bg-black relative border-t border-white/10">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-hand text-neon-pink mb-6">Kontakt</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Für mehr Informationen und Anmeldungen schreib mir gerne per WhatsApp oder Instagram.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/4915233673977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon / WhatsApp</p>
                  <p className="text-xl font-bold font-mono">0152-33673977</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/mellas.kreativwerkstatt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-pink-500/20 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-xl font-bold font-mono">@mellas.kreativwerkstatt</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-white/10 text-center space-y-6">
            <Send className="w-16 h-16 text-neon-blue mx-auto" />
            <h3 className="text-3xl font-hand">Ich freue mich auf euch!</h3>
            <p className="text-muted-foreground">
              Lasst uns gemeinsam kreativ werden und Spaß haben.
            </p>
            <div className="text-sm text-muted-foreground pt-8 border-t border-white/5">
              &copy; {new Date().getFullYear()} Mellas Kreativwerkstatt. <br/>
              Design by Replit Agent.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
