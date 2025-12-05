const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Animated blobs */}
      <div className="blob w-[500px] h-[500px] bg-accent/20 top-0 -left-20 animation-delay-0" 
        style={{ animationDuration: '7s' }} />
      <div className="blob w-[600px] h-[600px] bg-blue-400/10 top-1/4 -right-32 animation-delay-2000"
        style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="blob w-[400px] h-[400px] bg-accent/15 bottom-0 left-1/3 animation-delay-4000"
        style={{ animationDuration: '8s', animationDelay: '4s' }} />
      <div className="blob w-[350px] h-[350px] bg-purple-400/10 top-1/2 left-1/4 animation-delay-1000"
        style={{ animationDuration: '12s', animationDelay: '1s' }} />
      <div className="blob w-[450px] h-[450px] bg-teal-400/10 bottom-1/4 right-1/4"
        style={{ animationDuration: '9s', animationDelay: '3s' }} />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
