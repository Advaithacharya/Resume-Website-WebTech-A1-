import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:advaith.23cs005@sode-edu.in", label: "Email" },
  ];

  return (
    <footer className="relative mt-auto">
      <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border-t border-white/30">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-xl font-semibold">
              Advaith<span className="text-accent">.</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Advaith Acharya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
