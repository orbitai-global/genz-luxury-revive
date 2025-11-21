const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Дизайн без названия.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Left aligned but vertically centered */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-left text-white animate-fade-in">
              Why Gen Z Fell Out of Love with Luxury
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in text-left">
              Traditional luxury felt elitist, exploitative, and disconnected from values that matter—
              sustainability, creativity, fairness. Gen Z craves authenticity over exclusivity. They want to belong,
              not just buy. Luxury reimagined bridges that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
