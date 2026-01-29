import { Link } from "wouter";
import { Palette } from "lucide-react";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 group-hover:scale-110 transition-transform">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="font-hand font-bold text-xl md:text-2xl text-white">
              Mella's <span className="text-neon-pink">Kreativwerkstatt</span>
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-neon-yellow transition-colors">
            Über mich
          </button>
          <button onClick={() => scrollToSection("details")} className="text-sm font-medium hover:text-neon-blue transition-colors">
            Infos
          </button>
          <button onClick={() => scrollToSection("contact")} className="px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-neon-pink hover:text-white transition-all">
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
}
