import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Wrench, Leaf } from "lucide-react";

const Learn = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Brand History Timelines",
      description: "Interactive journeys through the heritage of iconic luxury houses.",
      color: "bg-blue-500/10",
    },
    {
      icon: Video,
      title: "Craftsmanship Videos",
      description: "Short films showcasing artisanal techniques and creative processes.",
      color: "bg-purple-500/10",
    },
    {
      icon: Wrench,
      title: "Repair Tutorials",
      description: "Learn to care for and restore luxury items, promoting sustainability.",
      color: "bg-green-500/10",
    },
    {
      icon: Leaf,
      title: "Sustainability Education",
      description: "Understanding ethical practices and the future of responsible luxury.",
      color: "bg-amber-500/10",
    },
  ];

  return (
    <section id="learn" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Learn & Explore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deepen your understanding of luxury heritage, craftsmanship, and sustainable practices 
            through curated educational content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-luxury transition-smooth group cursor-pointer bg-card"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl ${resource.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                <resource.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <Button variant="ghost" className="group-hover:translate-x-2 transition-smooth">
                Explore →
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-serif text-foreground/80 mb-6">
            "Where craft meets culture"
          </p>
          <Button size="lg" variant="outline">
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Learn;
