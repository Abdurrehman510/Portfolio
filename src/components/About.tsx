import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Code, Trophy, Sparkles, Cpu, Database, Server, Brain, Palette } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const timelineItems = [
    {
      year: "2019 - 2021",
      title: "Secondary School (SSC)",
      description: "Completed SSC from G.L.S. Sec. School, Ahmedabad with distinction.",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary (HSC)",
      description: (
          <>
            Completed HSC from Blue Bell Higher Sec. School, Ahmedabad with
            <br />
            focus on Computer Science.
          </>
        ),
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2023 - Present",
      title: "Bachelor Of Engineering In CSE",
      description: (
          <>
            Began Computer Science Engineering at L.J. University, Ahmedabad.      
            <br />
            Current CGPA: 8.7
          </>
        ),
      icon: GraduationCap,
      type: "education"
    }
  ];

  // Curated list of main skills for portfolio showcase
  const mainSkills = [
    { name: "React", category: "Frontend", icon: Palette },
    { name: "Node.js", category: "Backend", icon: Server },
    { name: "Python", category: "Language", icon: Code },
    { name: "Java", category: "Language", icon: Code },
    { name: "JavaScript", category: "Language", icon: Code },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "MySQL", category: "Database", icon: Database },
    { name: "Express.js", category: "Backend", icon: Server },
    { name: "REST APIs", category: "Backend", icon: Server },
    { name: "Socket.IO", category: "Real-time", icon: Cpu },
    { name: "OpenAI API", category: "AI", icon: Brain },
    { name: "Tailwind CSS", category: "Frontend", icon: Palette }
  ];

  const categories = ["all", ...new Set(mainSkills.map(skill => skill.category))];

  const filteredSkills = activeCategory === "all" 
    ? mainSkills 
    : mainSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 py-1 px-3 border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4 mr-2" /> My Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate 3rd-year CSE student with a focus on full-stack development and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Story Card */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-semibold tracking-tight">My Journey</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    I'm a dedicated Computer Science student at L.J. University, Ahmedabad,
                    with a passion for creating intelligent applications that solve real-world problems.
                  </p>
                  <p className="leading-relaxed">
                    My journey began with curiosity about how applications work, which led me to
                    master both frontend and backend technologies. I specialize in the MERN stack,
                    Java desktop applications, and AI integrations.
                  </p>
                  <p className="leading-relaxed">
                    What drives me is the intersection of clean code, beautiful design, and
                    meaningful user experiences. I believe technology should be both powerful
                    and accessible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack Card */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-semibold tracking-tight">Tech Stack</h3>
                </div>
                
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className="cursor-pointer transition-all duration-200 capitalize"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="py-3 gap-2 justify-start hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                      >
                        <IconComponent className="w-4 h-4" />
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 ml-12">
              <div className="w-3 h-8 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-semibold tracking-tight">My Timeline</h3>
            </div>
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 to-purple-500/30"></div>
              
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className={`absolute left-8 top-5 transform -translate-x-1/2 -translate-y-1/2 z-10 
                      w-4 h-4 rounded-full border-4 border-background 
                      ${item.type === "education" ? "bg-primary" : "bg-purple-500"}`}>
                    </div>
                    
                    <Card className="glass-card ml-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center
                                ${item.type === "education" ? "bg-primary/10" : "bg-purple-500/10"}`}
                            >
                              <item.icon
                                className={`w-6 h-6 ${
                                  item.type === "education" ? "text-primary" : "text-purple-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  item.type === "education"
                                    ? "border-primary/30 text-primary"
                                    : "border-purple-500/30 text-purple-500"
                                }`}
                              >
                                {item.year}
                              </Badge>
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
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
      </div>
    </section>
  );
};

export default About;