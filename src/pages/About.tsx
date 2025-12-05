import Layout from "@/components/layout/Layout";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design-First",
      description: "Every project starts with thoughtful design and user experience.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every solution.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to achieve shared goals.",
    },
  ];

  const bioData = {
    name: "Advaith Acharya",
    dob: "September 16, 2005",
    nationality: "Indian",
    languages: "English, Kannada, Hindi",
    email: "advaith.23cs005@sode-edu.in",
    phone: "+(91) 6361473453",
    address: "SMVITM,Bantakal",
    website: "www.advaith.dev",
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/30 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center mb-4 animate-float">
                      <span className="font-display text-5xl font-semibold text-accent">AA</span>
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up opacity-0 stagger-1">
                About Me
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 animate-fade-up opacity-0 stagger-2">
                Passionate Developer & Creative Problem Solver
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-3">
                <p>
                  Hello! I'm Advaith Acharya, a full-stack developer with over 5 years of experience 
                  in creating digital solutions that make a difference. Based in San Francisco, 
                  I've had the privilege of working with startups and established companies alike.
                </p>
                <p>
                  My journey in tech began with a curiosity about how things work. Today, 
                  that curiosity drives me to build applications that are not only functional 
                  but also beautiful and intuitive.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring hiking trails, experimenting 
                  with photography, or diving into the latest tech articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Data Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
              Personal Information
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(bioData).map(([key, value]) => (
                <div
                  key={key}
                  className="glass-card flex items-start gap-4 p-5 rounded-2xl group"
                >
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Core Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              What Drives Me
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card text-center p-8 rounded-3xl group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
              Interests & Hobbies
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Photography",
                "Hiking",
                "Reading",
                "Open Source",
                "Music",
                "Travel",
                "Coffee",
                "Tech Blogs",
                "Podcasts",
                "Gaming",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/40 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
