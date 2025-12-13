import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import travellingImg from "@/assets/project-travelling.jpg";
import ayurvedicImg from "@/assets/project-ayurveda.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Med4You - Healthcare Website",
      description: "A healthcare platform enabling users to pre-book hospital wards, explore hospital facilities, check doctor availability, generate price receipts, and access live ward webcams. Integrated with Google Maps for hospital search by city, state or any particular disease.",
      image: ecommerceImg,
      technologies: ["HTML", "CSS", "JavaScript", "Google Maps API"],
      liveUrl: "https://med4you.netlify.app/",
      githubUrl: "https://github.com/AnushkaSingh5/Med4You",
      featured: true,
      tags: ["Web App", "Healthcare", "Booking System"]
    },
    {
      id: 2,
      title: "Stock Trading Platform",
      description: "Developed a full-stack trading platform using React, Node.js, and MongoDB with secure JWT authentication. Features an interactive dashboard to track holdings and positions, real-time updates after trades, and live stock insights displayed through charts and graphs.",
      image: taskManagerImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Charts.js"],
      liveUrl: "https://stock-frontend-sage.vercel.app",
      githubUrl: "https://github.com/AnushkaSingh5/Stock-Trading-Platform",
      featured: true,
      tags: ["Web App", "Finance", "Full Stack"]
    },
    {
      id: 3,
      title: "AyurNutriCare - Ayurvedic Diet Platform",
      description: "A cloud-based platform for Ayurvedic dietitians that auto-generates personalized diet charts using both scientific nutrition values and Ayurvedic principles. Includes patient management, recipe recommendations, and progress tracking with mobile support.",
      image: ayurvedicImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "API Integration"],
      liveUrl: "https://ayur-digest-btawlphne-anushkasinghs-projects-f5246ced.vercel.app/",
      githubUrl: "https://github.com/AnushkaSingh5/AyurNutriCare",
      featured: true,
      tags: ["Web App", "Healthcare", "AI", "Full Stack"]
    },
    {
      id: 4,
      title: "Wanderlust - Travel Stay Platform",
      description: "A full-stack web app inspired by Airbnb, enabling users to search stays, view property details, apply filters, and book accommodations with secure authentication and persistent data storage.",
      image: travellingImg,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://wanderlust-travel-stay-platform.onrender.com",
      githubUrl: "https://github.com/AnushkaSingh5/Wanderlust-Travel-Stay-Platform",
      featured: true,
      tags: ["Web App", "Travel", "Full Stack"]
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-10 leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing projects that blend full-stack development, creative design, and motion visuals — turning ideas into engaging digital experiences.
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
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:border-primary"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 hover:border-primary"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
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
            onClick={() =>
              window.open(
                "https://github.com/AnushkaSingh5?tab=repositories",
                "_blank",
                "noopener,noreferrer"
              )
            }
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
