import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-up opacity-0 stagger-1">
              <Sparkles size={16} />
              Creative Developer & Designer
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8 animate-fade-up opacity-0 stagger-2">
              Hello, I'm{" "}
              <span className="italic text-accent">Advaith Acharya</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up opacity-0 stagger-3">
              A passionate full-stack developer crafting beautiful digital experiences. 
              I transform ideas into elegant, functional solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
              <Link
                to="/resume"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:gap-4"
              >
                View Resume
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 text-foreground font-medium rounded-full hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2 bg-white/30 backdrop-blur-sm">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:scale-105 transition-all duration-500"
              >
                <div className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                What I Do
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                Expertise in Modern Development
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I specialize in building scalable web applications with a focus on 
                user experience and clean, maintainable code.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300"
              >
                Learn more about me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Frontend", desc: "React, Vue, TypeScript", icon: "🎨" },
                { title: "Backend", desc: "Node.js, Python, Go", icon: "⚙️" },
                { title: "Design", desc: "UI/UX, Figma, Adobe", icon: "✨" },
                { title: "DevOps", desc: "AWS, Docker, CI/CD", icon: "🚀" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl group cursor-pointer"
                >
                  <span className="text-3xl mb-4 block group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
