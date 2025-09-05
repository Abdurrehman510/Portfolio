import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  Download,
  Github,
  Linkedin,
  Clock,
  User,
  Building,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Switch between local Express and Netlify Functions
    const API_URL = import.meta.env.DEV
      ? "http://localhost:3001/api/contact"
      : "/.netlify/functions/sendEmail";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/Abdurrehman_Narmawala_Resume.pdf');
      if (response.ok) {
        toast({
          title: "Resume download started",
          description: `Downloading resume...`,
        });
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

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abdurrehman",
      color: "hover:text-purple-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abdurrehman-narmawala",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute -left-32 bottom-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background/80 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  Send a Message
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    Fill out the form and I'll get back to you soon
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="transition-all focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
                    <Building className="w-4 h-4" />
                    Company/Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company or organization"
                    className="transition-all focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, role, or collaboration opportunity..."
                    rows={5}
                    required
                    className="resize-none transition-all focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-base font-medium transition-all hover:shadow-lg"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Side Content */}
          <div className="flex flex-col gap-6 h-full">
            {/* Resume Download */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Download className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    Resume Download
                    <div className="text-sm font-normal text-muted-foreground mt-1">
                      Get my latest professional background
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground text-sm">
                  Download my resume to learn more about my experience, skills, and qualifications.
                </p>

                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="w-full justify-center py-5 border-2 border-primary/20 hover:border-primary/40 transition-colors group"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume (PDF)
                </Button>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-3">
                    Connect with me:
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className={`w-full justify-center transition-all hover:scale-105 ${social.color} border-border`}
                          size="sm"
                        >
                          <social.icon className="w-4 h-4 mr-2" />
                          {social.label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Card */}
            <Card className="border-0 shadow-lg bg-primary/5 backdrop-blur h-full">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
