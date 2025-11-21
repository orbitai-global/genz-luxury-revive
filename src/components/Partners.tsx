import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const brands = [
    { name: "Dior", category: "Heritage Fashion" },
    { name: "Prada", category: "Contemporary Luxury" },
    { name: "Tiffany & Co.", category: "Fine Jewelry" },
    { name: "Hermès", category: "Craftsmanship Excellence" },
    { name: "Chanel", category: "Timeless Elegance" },
    { name: "Gucci", category: "Modern Innovation" },
  ];

  return (
    <section id="partners" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Brand Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with heritage luxury houses and emerging brands committed to 
            authentic engagement with Gen Z.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-luxury transition-smooth group cursor-pointer bg-card"
            >
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-smooth">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground">{brand.category}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-luxury rounded-2xl p-12 max-w-4xl mx-auto shadow-luxury">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Interested in Partnering?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a heritage luxury brand, emerging designer, or cultural creator, 
              we invite you to join the conversation and connect with the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                For Brands
              </Button>
              <Button size="lg" variant="outline">
                For Creators
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
