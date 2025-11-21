import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus, Calendar, Sparkles } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Discussion Spaces",
      description: "Engage in meaningful conversations about luxury, culture, and creativity.",
    },
    {
      icon: UserPlus,
      title: "Creator Profiles",
      description: "Connect with curators, storytellers, and fellow luxury enthusiasts.",
    },
    {
      icon: Calendar,
      title: "Live Events",
      description: "Join workshops, brand collaborations, and virtual experiences.",
    },
    {
      icon: Sparkles,
      title: "Cultural Exchange",
      description: "Share your perspective and learn from diverse voices worldwide.",
    },
  ];

  return (
    <section id="community" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A digital space that celebrates individuality, inclusion, and creativity. 
            Connect with like-minded individuals who share your passion for reimagined luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-luxury transition-smooth group cursor-pointer bg-card"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-luxury rounded-2xl p-12 text-center shadow-luxury">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Ready to be part of something meaningful?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of Gen Z members redefining what luxury means in the modern world.
          </p>
          <Button size="lg">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
