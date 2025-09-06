import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Globe,
  Code,
  Database,
  Briefcase,
  GitMerge,
  Cpu,
  Sparkles,
  Zap,
  Target,
  Layers,
  BarChart3,
  Shield,
  Palette,
  Server
} from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState(false);

  // Animate progress bars on scroll
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView && !animatedProgress) {
          setAnimatedProgress(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedProgress]);

  const skillClusters = [
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
      borderColor: "border-orange-200",
      skills: [
        { name: "AI/ML Concepts", level: 85, description: "Leveraging AI for automation and intelligent features" },
        { name: "Python", level: 90, description: "Pandas, NumPy for data analysis and manipulation" },
        { name: "OpenAI Integration", level: 80, description: "Building chatbots and AI-powered summaries" }
      ]
    },
    {
      title: "Web & Full-Stack",
      icon: Globe,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
      borderColor: "border-orange-200",
      skills: [
        { name: "React", level: 90, description: "Building dynamic and responsive user interfaces" },
        { name: "Node.js & Express.js", level: 85, description: "Creating robust and scalable REST APIs" },
        { name: "Socket.io", level: 80, description: "Implementing real-time communication features" }
      ]
    },
    {
      title: "Languages & Databases",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
      borderColor: "border-orange-200",
      skills: [
        { name: "JavaScript (ES6+)", level: 90, description: "Core language for modern web development" },
        { name: "Java", level: 85, description: "Building desktop applications with Swing and JDBC" },
        { name: "SQL & NoSQL", level: 85, description: "MySQL, PostgreSQL, and MongoDB" }
      ]
    },
    {
    title: "Tools & Methodologies",
    icon: GitMerge,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
    borderColor: "border-orange-200",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control and collaborative development" },
      { name: "Agile", level: 80, description: "Working in iterative and collaborative environments" },
      { name: "AI-Powered Solutions", level: 85, description: "Building intelligent features with AI integration" }
    ]
  }
  ];

  const technologies = [
    { name: "HTML", category: "Frontend", proficiency: 95, icon: Code },
    { name: "CSS & Tailwind", category: "Frontend", proficiency: 90, icon: Palette },
    { name: "Java Spring Boot", category: "Backend", proficiency: 75, icon: Server },
    { name: "Django", category: "Backend", proficiency: 70, icon: Layers },
    { name: "JWT & OAuth", category: "Security", proficiency: 80, icon: Shield },
    { name: "Data Structures", category: "CS Fundamentals", proficiency: 85, icon: BarChart3 },
    { name: "Matplotlib", category: "Data Science", proficiency: 70, icon: BarChart3 },
    { name: "Bootstrap", category: "Frontend", proficiency: 80, icon: Palette }
  ];

  const expertiseAreas = [
    { icon: Code, label: "Clean Code", description: "Writing maintainable, efficient code" },
    { icon: Briefcase, label: "Product Focus", description: "Building solutions that users love" },
    { icon: Brain, label: "AI Integration", description: "Creating intelligent features with AI assistance" },
    { icon: Cpu, label: "Problem Solving", description: "Creative solutions to complex problems" },
    { icon: Zap, label: "Fast Execution", description: "Rapid prototyping and development" },
    { icon: Target, label: "Precision", description: "Attention to detail and quality" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-300 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-200 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 py-2 px-4 border-amber-400/30 bg-amber-400/10 text-amber-600 font-semibold">
            <Sparkles className="w-4 h-4 mr-2" /> Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 py-2">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications with precision and creativity
          </p>
        </div>

        {/* Skill Clusters with enhanced design */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillClusters.map((cluster, index) => {
            const IconComponent = cluster.icon;
            return (
              <Card key={index} className={`relative overflow-hidden border ${cluster.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 group ${cluster.bgColor}`}>
                <div className={`absolute inset-0 bg-gradient-to-br opacity-10 ${cluster.color}`}></div>
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${cluster.color}`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <CardTitle className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cluster.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <span className="text-xl font-bold text-foreground">
                      {cluster.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-5 relative z-10">
                  {cluster.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-amber-100">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground/90">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs font-bold py-1 bg-amber-100 text-amber-700">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-amber-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${cluster.color} transition-all duration-1000 ease-out`}
                          style={{ width: animatedProgress ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Proficiency with matching tone */}
        <Card className="border border-amber-200 shadow-lg bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-200/10"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
              <Layers className="w-8 h-8 text-amber-600" />
              <span className="text-foreground">
                Technology Proficiency
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="space-y-3 p-4 rounded-lg bg-white/60 hover:bg-white/80 border border-amber-100 transition-colors duration-300 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-amber-700" />
                        </div>
                        <div>
                          <span className="font-semibold">{tech.name}</span>
                          <Badge variant="outline" className="ml-2 text-xs bg-amber-100 text-amber-700 border-amber-200">
                            {tech.category}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-amber-700">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000 ease-out"
                        style={{ width: animatedProgress ? `${tech.proficiency}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Additional Expertise with improved layout */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-12 flex items-center justify-center gap-3">
            <Zap className="w-7 h-7 text-amber-600" />
            <span className="text-foreground">
              Core Strengths
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertiseAreas.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-amber-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground/90">{item.label}</span>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;