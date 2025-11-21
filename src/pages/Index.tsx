import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BrandCarousel from "@/components/BrandCarousel";
import Community from "@/components/Community";
import Learn from "@/components/Learn";
import Feed from "@/components/Feed";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BrandCarousel />
      <Community />
      <Learn />
      <Feed />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
