import { Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const stats = [
    { label: "4 Major Projects", value: "04" },
    { label: "2 Hackathons/Workshops", value: "02" },
    { label: "Backend + Frontend", value: "∞" }
  ];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/Abdurrehman_Narmawala_Resume.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Abdurrehman_Narmawala_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Error downloading resume');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center animated-bg">
      {/* Floating particles background */}
      <div className="particles">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Abdurrehman</span>
            <br />
            <span className="gradient-text">Narmawala</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building intelligent applications with{" "}
            <span className="font-semibold text-primary">MERN, Java & AI</span>
          </p>

          {/* Education badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            B.Tech CSE, L.J. University, Ahmedabad
          </Badge>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button
              onClick={handleViewProjects}
              size="lg"
              className="px-8 py-4 text-lg hover-glow animate-pulse-glow"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>

            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg hover-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>

            <Button
              onClick={handleContact}
              variant="secondary"
              size="lg"
              className="px-8 py-4 text-lg hover-glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com/Abdurrehman510" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/abdurrehman-narmawala" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
              {import.meta.env.VITE_CONTACT_EMAIL}
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;