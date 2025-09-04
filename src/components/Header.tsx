import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Track active section
      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const offset = section.getBoundingClientRect().top;
          if (offset <= 120 && offset >= -section.offsetHeight / 2) {
            current = item;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-flex items-center justify-center"
        >
          {/* Stylized text */}
          <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1">
            AN
          </span>

          {/* Glow effect */}
          <span className="absolute inset-0 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500"></span>
        </a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => handleScrollTo(item)}
              className={`relative px-3 py-1 font-medium transition-colors duration-200 ${
                activeSection === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item}
              {activeSection === item && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-[slideIn_0.3s_ease-in-out]" />
              )}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-8 space-y-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <Button
                      key={item}
                      variant="ghost"
                      onClick={() => handleScrollTo(item)}
                      className={`text-lg justify-start transition delay-${i * 75}`}
                    >
                      {item}
                    </Button>
                  ))}
                </nav>
                <div className="border-t pt-6">
                  <Button variant="outline" className="w-full">
                    Download Resume
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
