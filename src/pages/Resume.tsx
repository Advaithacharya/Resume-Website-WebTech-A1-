import Layout from "@/components/layout/Layout";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and AWS. Managing a team of 5 developers and implementing CI/CD pipelines.",
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects. Implemented RESTful APIs and responsive front-end interfaces.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description:
        "Created pixel-perfect UI implementations from design mockups. Worked with Vue.js and vanilla JavaScript.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Machine Learning and Distributed Systems. Thesis on scalable web architectures.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      period: "2012 - 2016",
      description: "Dean's List. Focus on software engineering and algorithms.",
    },
  ];

  const skills = {
    technical: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React/Vue.js", level: 90 },
      { name: "Node.js/Express", level: 88 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL/MongoDB", level: 82 },
      { name: "AWS/Docker", level: 80 },
    ],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Time Management", "Adaptability"],
  };

  const certifications = [
    { name: "AWS Certified Solutions Architect", year: "2023" },
    { name: "Google Cloud Professional", year: "2022" },
    { name: "MongoDB Certified Developer", year: "2021" },
    { name: "Scrum Master Certified", year: "2020" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              My Resume
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Professional Experience & Qualifications
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              A comprehensive overview of my professional journey, skills, and achievements.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 font-medium rounded-full hover:bg-white/80 hover:shadow-lg transition-all duration-300"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <Briefcase className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-3xl font-semibold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-lg shadow-accent/30" />
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{job.title}</h3>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-accent/10 text-accent text-sm rounded-full backdrop-blur-sm">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <GraduationCap className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-3xl font-semibold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6"
              >
                <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                  {edu.period}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-accent font-medium mb-4">{edu.institution}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-semibold text-center mb-12">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/30 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-gold-light rounded-full transition-all duration-1000 relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Certifications */}
            <div className="space-y-8">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-3 bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-foreground font-medium hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                  <Award className="text-accent" size={24} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-accent/30 transition-colors"
                    >
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-accent text-sm font-semibold">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
