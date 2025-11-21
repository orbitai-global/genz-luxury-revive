import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "Dec 15, 2025",
      title: "Digital Craftsmanship Workshop",
      location: "Virtual",
      attendees: "250+",
      description: "Learn from master artisans about traditional techniques meeting modern innovation.",
    },
    {
      date: "Jan 8, 2026",
      title: "Gen Z x Luxury Brands Summit",
      location: "Virtual",
      attendees: "500+",
      description: "A dialogue between heritage brands and young consumers about the future of luxury.",
    },
    {
      date: "Jan 22, 2026",
      title: "Sustainable Fashion Showcase",
      location: "Virtual Pop-up",
      attendees: "300+",
      description: "Celebrating brands that prioritize ethical practices and environmental responsibility.",
    },
  ];

  return (
    <section id="events" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Events & Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exclusive workshops, brand collaborations, and virtual experiences 
            that bring the community together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-luxury transition-smooth bg-card"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {event.date}
                </span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              <Button className="w-full">
                <Calendar className="mr-2" size={16} />
                Register Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
