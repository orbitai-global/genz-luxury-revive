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
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop",
    },
    {
      icon: Video,
      title: "Craftsmanship Videos",
      description: "Short films showcasing artisanal techniques and creative processes.",
      color: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      icon: Wrench,
      title: "Repair Tutorials",
      description: "Learn to care for and restore luxury items, promoting sustainability.",
      color: "bg-green-500/10",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    },
    {
      icon: Leaf,
      title: "Sustainability Education",
      description: "Understanding ethical practices and the future of responsible luxury.",
      color: "bg-amber-500/10",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
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
              className="overflow-hidden hover:shadow-luxury transition-smooth group cursor-pointer bg-card"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-smooth">
                  Explore →
                </Button>
              </div>
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
