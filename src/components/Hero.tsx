import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import shapes3D from "@/assets/3d-shapes.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-lg gradient-secondary opacity-15 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full gradient-card opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>
        <img 
          src={shapes3D} 
          alt="3D Shapes" 
          className="absolute top-10 right-10 w-64 h-48 opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-slideInUp">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-wider uppercase">
              AI & Full Stack Developer | Creative Technologist | TEDx Marketing Member
            </p>
            <h1 className="text-6xl md:text-7xl font-bold font-display leading-tight">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Sofia
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Building impactful products at the intersection of AI, engineering, and design thinking. 
              I blend technology with creativity to solve real-world problems and create experiences that matter.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            {["AI & ML", "Full Stack", "React", "Python", "UI/UX", "Canva"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-smooth"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gradient-primary text-primary-foreground hover:scale-105 transition-bounce shadow-3d"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="hover:scale-105 transition-bounce border-border hover:border-primary"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth hover:scale-110">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth hover:scale-110">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fadeInScale" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <img
              src={heroPortrait}
              alt="Sofia - Full Stack Developer"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-3d hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full gradient-secondary animate-glow"></div>
          <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full gradient-primary animate-glow" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-smooth"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;