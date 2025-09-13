import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EcoShop - Sustainable E-commerce Platform",
      description: "A modern e-commerce platform focused on sustainable products with advanced filtering, user reviews, and seamless checkout experience.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow - Project Management Suite",
      description: "Comprehensive project management tool with kanban boards, team collaboration, time tracking, and real-time notifications.",
      image: taskManagerImg,
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "HealthTracker - Wellness Dashboard",
      description: "Personal health monitoring app with workout tracking, nutrition logging, and progress visualization.",
      image: ecommerceImg, // Reusing for demo
      technologies: ["React Native", "Django", "SQLite", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "CryptoWatch - Market Analytics",
      description: "Real-time cryptocurrency price tracking with portfolio management and market trend analysis.",
      image: taskManagerImg, // Reusing for demo
      technologies: ["Next.js", "Python", "Redis", "CoinGecko API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "TEDx Marketing Hub",
      description: "Custom marketing platform for TEDx events with content management, social media integration, and analytics.",
      image: ecommerceImg, // Reusing for demo
      technologies: ["React", "Firebase", "Canva API", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "Smart content creation tool using AI for blog posts, social media content, and marketing copy.",
      image: taskManagerImg, // Reusing for demo
      technologies: ["Python", "OpenAI API", "Flask", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's a showcase of my recent work - from full-stack applications to creative marketing solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden gradient-card border-border hover:border-primary transition-smooth hover:scale-[1.02] animate-fadeInScale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:border-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth text-sm">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-xs p-2 h-auto hover:text-primary"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-xs p-2 h-auto hover:text-primary"
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInScale" style={{ animationDelay: "1s" }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground hover:scale-105 transition-bounce shadow-3d"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full gradient-secondary opacity-10 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 rounded-lg gradient-primary opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Projects;
