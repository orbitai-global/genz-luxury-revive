import { Card } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Real stories, real craftsmanship, real connections. No more empty promises or exclusive gatekeeping.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Belonging is the new luxury. We create spaces where creativity, dialogue, and cultural exchange thrive.",
    },
    {
      icon: Sparkles,
      title: "Reimagined Luxury",
      description: "Sustainability, fairness, and creativity at the core. Luxury that aligns with Gen Z values.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Why Gen Z Fell Out of Love with Luxury
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional luxury felt elitist, exploitative, and disconnected from values that matter—
            sustainability, creativity, fairness. Gen Z craves authenticity over exclusivity. 
            They want to belong, not just buy. Luxury reimagined bridges that gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-luxury transition-smooth bg-card"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
