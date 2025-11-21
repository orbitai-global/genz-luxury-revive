import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-2">Luxury Reimagined</h3>
            <p className="text-primary-foreground/80 text-sm">
              Belonging is the new luxury
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Luxury Reimagined. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80 font-serif italic">
              "Belonging is the new luxury"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
