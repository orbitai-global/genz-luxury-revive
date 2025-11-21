const BrandCarousel = () => {
  // Images from public folder
  const images = [
    "/chanel.jpg",
    "/dior.jpg",
    "/gucci.jpg",
    "/hermes.jpg",
    "/prada.jpg",
    "/tiffany.jpg",
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes brandScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .brand-carousel-scroll {
          animation: brandScroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        .brand-carousel-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="py-24 bg-secondary/20 overflow-hidden relative">
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
        </div>
        
        <div className="relative w-full">
          {/* Fade edges for professional look */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div className="flex gap-16 items-center brand-carousel-scroll">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-28 w-48 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                >
                  <img
                    src={image}
                    alt={`Brand ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCarousel;

