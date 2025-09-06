import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  Download,
  Calendar,
  Users,
  Target,
  CheckCircle,
  Code,
  Database,
  Monitor,
  BookOpen,
  Camera,
  Image as ImageIcon,
  X
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const categories = ["All", "Web", "Desktop", "Full-Stack"];

  const projects = [
    {
      id: 1,
      title: "Doctor-Patient Portal",
      shortDescription: "A full-stack telemedicine platform connecting doctors and patients securely.",
      category: "Full-Stack",
      duration: "4 Months",
      startDate: "Nov 2024",
      endDate: "Feb 2025",
      role: "Lead Full-Stack Developer",
      problem: "Healthcare facilities needed a secure, feature-rich platform for remote consultations with real-time communication and intelligent health summaries.",
      targetUsers: "Healthcare providers, patients, clinic administrators",
      features: [
        "Role-based dashboards for Admin, Doctor, and Patient",
        "Authentication with JWT and Google OAuth",
        "Real-time doctor-patient chat using Socket.io",
        "Dynamic appointment scheduling with calendar integration",
        "Medical report upload/download (PDF, images)",
        "AI-powered health summaries from chat history"
      ],
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT", "Google OAuth", "OpenAI API", "Mongoose"],
      impact: "Streamlined patient-doctor communication, reduced appointment scheduling time by 60%",
      githubUrl: "https://github.com/Abdurrehman510",
      liveUrl: null,
      image: "/images/HealthPlus_Project_img.webp",
      screenshots: [
      "/images/doctor-patient-portal-ss1.png",
      "/images/doctor-patient-portal-ss2.png",
      "/images/doctor-patient-portal-ss3.png",
      "/images/doctor-patient-portal-ss4.png",
      "/images/doctor-patient-portal-ss5.png",
      "/images/doctor-patient-portal-ss6.png",
      "/images/doctor-patient-portal-ss7.png",
      "/images/doctor-patient-portal-ss8.png",
      "/images/doctor-patient-portal-ss9.png",
      "/images/doctor-patient-portal-ss10.png",
      "/images/doctor-patient-portal-ss11.png",
      "/images/doctor-patient-portal-ss12.png",
      "/images/doctor-patient-portal-ss13.png",
      "/images/doctor-patient-portal-ss14.png",
      "/images/doctor-patient-portal-ss15.png",
      "/images/doctor-patient-portal-ss16.png",
      "/images/doctor-patient-portal-ss17.png",
      "/images/doctor-patient-portal-ss18.png"
    ]
    },
    {
      id: 2,
      title: "S.R. Agency - Business Management Software",
      shortDescription: "A comprehensive Python desktop application to manage sales, purchases, inventory, and customer/supplier data.",
      category: "Desktop",
      duration: "10 Weeks",
      startDate: "Jun 2024",
      endDate: "Oct 2024",
      role: "Lead Developer",
      problem: "Small businesses needed comprehensive management software for sales, inventory, and customer relations with automated reporting and intelligent assistance.",
      targetUsers: "Small business owners, sales teams, inventory managers",
      features: [
        "Separate modules for sales and purchase billing with automated PDF invoicing",
        "Real-time inventory tracking with CSV-based persistence",
        "Customer and supplier records with transaction histories",
        "Data analysis and reporting (sales trends, top products, segmentation)",
        "Cloud backup with Google Drive API",
        "AI chatbot (OpenAI API) for in-app business queries"
      ],
      techStack: ["Python", "CustomTkinter", "Pandas", "ReportLab", "Google Drive API", "OpenAI API", "Matplotlib"],
      impact: "Automated 80% of manual data entry, improved invoice generation time from 15min to 2min",
      githubUrl: "https://github.com/Abdurrehman510",
      documentationUrl: "/S.R.Agency_Software_Documentation.pdf",
      downloadUrl: null,
      image: "/images/S.R._Project_img.webp",
      screenshots: [
  "/images/sr-agency-ss1.png",
  "/images/sr-agency-ss2.png",
  "/images/sr-agency-ss12.png",
  "/images/sr-agency-ss13.png",
  "/images/sr-agency-ss3.png",
  "/images/sr-agency-ss4.png",
  "/images/sr-agency-ss5.png",
  "/images/sr-agency-ss6.png",
  "/images/sr-agency-ss7.png",
  "/images/sr-agency-ss8.png",
  "/images/sr-agency-ss9.png",
  "/images/sr-agency-ss10.png",
  "/images/sr-agency-ss11.png",
  "/images/sr-agency-ss14.png",
  "/images/sr-agency-ss15.png",
  "/images/sr-agency-ss16.png"
]

    },
    {
    id: 3,
    title: "Fashion Hub - E-commerce Website",
    shortDescription: "A dynamic and responsive e-commerce website for a clothing store.",
    category: "Web",
    duration: "8 Weeks",
    startDate: "Mar 2024",
    endDate: "May 2024",
    role: "Frontend Developer & UX Designer",
    problem: "Create an engaging e-commerce experience with modern UX patterns and persistent user sessions without backend dependencies.",
    targetUsers: "Online shoppers across Men's, Women's, and Kids' fashion categories",
    features: [
      "Categorized product catalogs for Men, Women, and Kids",
      "Search and filtering functionality with clean grid layout",
      "Shopping cart with LocalStorage persistence across sessions",
      "User authentication with login/signup system",
      "Flash sales with countdown timers and promotional tags"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    impact: "Achieved 95% mobile responsiveness score, 3-second average page load time",
    githubUrl: "https://github.com/Abdurrehman510",
    liveUrl: null,
    image: "/images/FashionHub_Project_img.webp",
    screenshots: [
      "/images/fashion-hub-signup.png",
      "/images/fashion-hub-home.png",
      "/images/fashion-hub-products.png",
      "/images/fashion-hub-product.png",
      "/images/fashion-hub-cart.png",
    ]
    },
    {
      id: 4,
      title: "AC Management System",
      shortDescription: "A robust desktop application developed in Java to streamline client and service management for an AC business.",
      category: "Desktop",
      duration: "6 Weeks",
      startDate: "Feb 2024",
      endDate: "Apr 2024",
      role: "Backend Developer",
      problem: "AC service providers needed efficient client management,.service scheduling, and automated package tracking with comprehensive reporting.",
      targetUsers: "AC service companies, technicians, service managers",
      features: [
        "CRUD operations for client records and service schedules",
        "Automated scheduling with reminders for next service dates",
        "Advanced search and reporting by client name or service date",
        "Package management for easy renewals and updates"
      ],
      techStack: ["Java", "Java Swing", "JDBC", "MySQL"],
      impact: "Reduced manual scheduling errors by 90%, automated service tracking for 500+ clients",
      githubUrl: "https://github.com/Abdurrehman510",
      documentationUrl: "/AC_Management_System_Documentation.pdf",
      downloadUrl: null,
      image: "/images/AC_Project_img.webp",
      screenshots: ["/images/ac-management-system-ss1.png", "/images/ac-management-system-ss2.png"]
    }
  ];

  const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  const ProjectDetailModal = ({ project, initialTab = "overview" }: { project: (typeof projects)[0], initialTab?: string }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <DialogContent className="max-w-4xl max-h-[90vh] w-full flex flex-col p-0 overflow-hidden">
      {/* Header */}
      <DialogHeader className="p-6 pb-4 border-b">
        <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
          {project.title}
        
        </DialogTitle>
        <p className="text-muted-foreground text-sm mt-1">{project.shortDescription}</p>
      </DialogHeader>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-grow overflow-hidden">
        {/* Tabs List */}
        <div className="px-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Code className="w-4 h-4" /> Details
            </TabsTrigger>
            {project.screenshots.length > 0 && (
              <TabsTrigger value="screenshots" className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Screenshots
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        {/* Tab Contents */}
        <div className="flex-grow flex flex-col overflow-hidden">
          {/* Overview Tab */}
          <TabsContent value="overview" className="flex-grow overflow-auto">
            <ScrollArea className="h-full px-6 py-6">
              <div className="space-y-6">
                {/* Overview Grid */}
                <div className="grid md:grid-cols-2 gap-6 p-4 bg-muted/30 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-medium">Role:</span>
                      <span>{project.role}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">Timeline:</span>
                      <span>{project.startDate} → {project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="font-medium">Category:</span>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Problem Statement</h3>
                  </div>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>

                {/* Target Users */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Target Users</h3>
                  </div>
                  <p className="text-muted-foreground">{project.targetUsers}</p>
                </div>
              </div>
            </ScrollArea>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 p-6 border-t bg-background">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="hover-glow">
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="hover-glow">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                </a>
              )}
              {project.downloadUrl && (
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="hover-glow">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </a>
              )}
              {project.documentationUrl && (
                <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="hover-glow">
                    <BookOpen className="w-4 h-4 mr-2" /> Documentation
                  </Button>
                </a>
              )}
            </div>
          </TabsContent>

          {/* Details Tab */}
          <TabsContent value="details" className="flex-grow overflow-auto">
            <ScrollArea className="h-full px-6 py-6 space-y-6">
              {/* Features */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Key Features</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-background rounded-md">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Technology Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm py-1 hover-glow">{tech}</Badge>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Impact & Results</h3>
                </div>
                <p className="text-muted-foreground">{project.impact}</p>
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Screenshots Tab */}
          {project.screenshots.length > 0 && (
            <TabsContent value="screenshots" className="flex-grow overflow-auto">
              <ScrollArea className="h-full px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border cursor-pointer transition-all hover:shadow-md"
                      onClick={() => openLightbox(index)}
                    >
                      <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Lightbox */}
              {lightboxOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                  <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={closeLightbox}>
                    <X className="w-8 h-8" />
                  </button>

                  <div className="max-w-4xl w-full max-h-full">
                    <img src={project.screenshots[currentImage]} alt={`${project.title} screenshot ${currentImage + 1}`} className="w-full h-auto max-h-[80vh] object-contain" />
                  </div>

                  {/* Navigation */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        onClick={() => setCurrentImage((currentImage - 1 + project.screenshots.length) % project.screenshots.length)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        onClick={() => setCurrentImage((currentImage + 1) % project.screenshots.length)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                        {currentImage + 1} / {project.screenshots.length}
                      </div>
                    </>
                  )}
                </div>
              )}
            </TabsContent>
          )}
        </div>
      </Tabs>
    </DialogContent>
  );
};

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of full-stack applications, desktop software, and AI-powered solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="hover-glow transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card hover-glow group overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Conditionally render image or default icon */}
              {project.image ? (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-primary/30" />
                </div>
              )}

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-sm text-muted-foreground">{project.duration}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex-1 hover-glow">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <ProjectDetailModal project={project} />
                  </Dialog>

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="hover-glow">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;