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
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillClusters = [
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AI/ML Concepts", level: 85, description: "Leveraging AI for automation and intelligent features" },
        { name: "Python", level: 90, description: "Pandas, NumPy for data analysis and manipulation" },
        { name: "OpenAI Integration", level: 80, description: "Building chatbots and AI-powered summaries" }
      ]
    },
    {
      title: "Web & Full-Stack Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, description: "Building dynamic and responsive user interfaces" },
        { name: "Node.js & Express.js", level: 85, description: "Creating robust and scalable REST APIs" },
        { name: "Socket.io", level: 80, description: "Implementing real-time communication features" }
      ]
    },
    {
      title: "Core Languages & Databases",
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "JavaScript (ES6+)", level: 90, description: "Core language for modern web development" },
        { name: "Java", level: 85, description: "Building desktop applications with Swing and JDBC" },
        { name: "SQL & NoSQL", level: 85, description: "MySQL, PostgreSQL, and MongoDB" }
      ]
    },
    {
      title: "Developer Tools & Methodologies",
      icon: GitMerge,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 90, description: "Version control and collaborative development" },
        { name: "Agile", level: 80, description: "Working in iterative and collaborative environments" },
        { name: "REST API Design", level: 85, description: "Designing and implementing RESTful services" }
      ]
    }
  ];

  const technologies = [
    { name: "HTML", category: "Frontend", proficiency: 95 },
    { name: "CSS & Tailwind", category: "Frontend", proficiency: 90 },
    { name: "Java Spring Boot", category: "Backend", proficiency: 75 },
    { name: "Django", category: "Backend", proficiency: 70 },
    { name: "JWT & OAuth", category: "Security", proficiency: 80 },
    { name: "Data Structures", category: "CS Fundamentals", proficiency: 85 },
    { name: "Matplotlib", category: "Data Science", proficiency: 70 },
    { name: "Bootstrap", category: "Frontend", proficiency: 80 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Strengths
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        {/* Skill Clusters */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillClusters.map((cluster, index) => (
            <Card key={index} className="glass-card hover-glow group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cluster.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <cluster.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-xl">{cluster.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cluster.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Proficiency */}
        <Card className="glass-card hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Technology Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{tech.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {tech.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {tech.proficiency}%
                    </span>
                  </div>
                  <Progress value={tech.proficiency} className="h-2" />
                </div>
              ))}
              </div>
            </CardContent>
        </Card>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Code, label: "Clean Code" },
              { icon: Briefcase, label: "Product Focus" },
              { icon: Cpu, label: "System Architecture" },
              { icon: Brain, label: "Problem Solving" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 hover-glow p-4 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;