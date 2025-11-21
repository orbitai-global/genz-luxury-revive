import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury reimagined"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in">
          Luxury Reimagined
          <br />
          <span className="text-luxury-burgundy">for the Next Generation</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in">
          Belonging is the new luxury
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="text-lg">
            Explore the Community
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
