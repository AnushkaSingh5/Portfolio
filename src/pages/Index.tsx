import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import FutureGoals from "@/components/FutureGoals";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <FutureGoals />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Anushka.dev - AI Enthusiast • Full Stack Developer • Creative Technologist
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
