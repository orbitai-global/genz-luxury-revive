import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Image paths from public folder
const article1 = "/article_1.jpg";
const article3 = "/article3.jpg";
const tiffanyArticle = "/tiffany_article.jpg";

const Feed = () => {
  const articles = [
    {
      category: "Trend Analysis",
      title: "The Rise of Quiet Luxury Among Gen Z",
      excerpt: "How minimalism and understated elegance are reshaping the luxury landscape.",
      readTime: "5 min read",
      images: [article1],
    },
    {
      category: "Brand Spotlight",
      title: "Tiffany & Co.'s Journey to Sustainability",
      excerpt: "Exploring the heritage brand's commitment to ethical sourcing and transparency.",
      readTime: "7 min read",
      images: [tiffanyArticle],
    },
    {
      category: "Gen Z Voices",
      title: "What We Really Want from Luxury",
      excerpt: "Real interviews with young consumers about authenticity, value, and belonging.",
      readTime: "6 min read",
      images: [article3],
    },
  ];

  return (
    <section id="feed" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            The New Luxury Feed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Editorial content that explores the intersection of luxury, culture, and Gen Z perspectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-luxury transition-smooth group cursor-pointer bg-card"
            >
              <div className="h-48 overflow-hidden relative bg-gradient-luxury">
                {article.images && article.images.length > 0 ? (
                  <div className={`h-full w-full ${article.images.length > 1 ? 'grid grid-cols-3' : ''}`}>
                    {article.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="h-full w-full relative">
                        <img
                          src={image}
                          alt={`${article.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary mb-2">{article.category}</p>
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:translate-x-2 transition-smooth">
                    Read More →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feed;
