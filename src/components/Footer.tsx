import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: ["About", "Community", "Learn", "Events"],
    Resources: ["Blog", "Brand Stories", "Sustainability", "Craftsmanship"],
    Company: ["Partnerships", "Careers", "Press", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">LOVABLE</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Building community, not hierarchy. Belonging is the new luxury
            </p>
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

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 LOVABLE. All rights reserved.
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
