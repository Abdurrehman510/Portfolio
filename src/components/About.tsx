import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Code, Trophy } from "lucide-react";

const About = () => {
  const timelineItems = [
    {
      year: "2021",
      title: "Secondary School (SSC)",
      description: "Completed SSC from G.L.S. Sec. School, Ahmedabad.",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2023",
      title: "Higher Secondary (HSC)",
      description: "Completed HSC from Blue Bell Higher Sec. School, Ahmedabad.",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2023",
      title: "Started B.Tech CSE",
      description: "Began Computer Science Engineering at L.J. University, Ahmedabad.",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2025",
      title: "Odoo Hackathon 2025",
      description: "Participated in Odoo Hackathon 2025.",
      icon: Trophy,
      type: "achievement"
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "MySQL", category: "Database" },
    { name: "Socket.io", category: "Real-time" },
    { name: "OpenAI", category: "AI" },
    { name: "JWT", category: "Auth" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate 3rd-year CSE student with a focus on full-stack development and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a dedicated Computer Science student at L.J. University, Ahmedabad,
                    with a passion for creating intelligent applications that solve real-world problems.
                  </p>
                  <p>
                    My journey began with curiosity about how applications work, which led me to
                    master both frontend and backend technologies. I specialize in the MERN stack,
                    Java desktop applications, and AI integrations.
                  </p>
                  <p>
                    What drives me is the intersection of clean code, beautiful design, and
                    meaningful user experiences. I believe technology should be both powerful
                    and accessible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Snapshot */}
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Tech Snapshot</h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-center py-2 hover-glow"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Timeline</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                  )}

                  <Card className="glass-card hover-glow ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {item.year}
                            </Badge>
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;