import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-ASA-2024-001",
      description: "Comprehensive cloud architecture and AWS services expertise",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Security"],
      level: "Professional",
      verified: true
    },
    {
      id: 2,
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      credentialId: "META-FE-2023-456",
      description: "Advanced React development and modern frontend practices",
      skills: ["React", "JavaScript", "HTML/CSS", "UX/UI"],
      level: "Professional",
      verified: true
    },
    {
      id: 3,
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
      credentialId: "GOOGLE-UX-2023-789",
      description: "Complete UX design process from research to prototyping",
      skills: ["UX Design", "Figma", "User Research", "Prototyping"],
      level: "Professional",
      verified: true
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2023",
      credentialId: "MDB-DEV-2023-123",
      description: "Database design, queries, and application development",
      skills: ["MongoDB", "NoSQL", "Database Design", "Node.js"],
      level: "Associate",
      verified: true
    },
    {
      id: 5,
      title: "Canva Design Certification",
      issuer: "Canva",
      date: "2022",
      credentialId: "CANVA-DESIGN-2022-567",
      description: "Advanced design principles and brand creation",
      skills: ["Graphic Design", "Branding", "Social Media", "Marketing"],
      level: "Expert",
      verified: true
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      credentialId: "DOCKER-DCA-2023-890",
      description: "Container orchestration and deployment strategies",
      skills: ["Docker", "Kubernetes", "DevOps", "CI/CD"],
      level: "Associate",
      verified: true
    },
    {
      id: 7,
      title: "Scrum Master Certification",
      issuer: "Scrum Alliance",
      date: "2022",
      credentialId: "CSM-2022-234",
      description: "Agile project management and team leadership",
      skills: ["Scrum", "Agile", "Project Management", "Leadership"],
      level: "Certified",
      verified: true
    },
    {
      id: 8,
      title: "HubSpot Content Marketing Certification",
      issuer: "HubSpot Academy",
      date: "2022",
      credentialId: "HUBSPOT-CM-2022-345",
      description: "Content strategy and marketing automation",
      skills: ["Content Marketing", "SEO", "Social Media", "Analytics"],
      level: "Certified",
      verified: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'professional': return 'bg-primary/20 text-primary border-primary/30';
      case 'expert': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'associate': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is at the heart of my professional growth. Here are my verified certifications and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className="group gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getLevelColor(cert.level)}`}
                  >
                    {cert.level}
                  </Badge>
                </div>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                  {cert.verified && (
                    <Badge variant="outline" className="text-xs bg-green-500/10 text-green-400 border-green-500/30">
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs p-2 h-auto hover:text-primary"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Certifications", value: "8+" },
            { label: "Professional Level", value: "3" },
            { label: "Years of Learning", value: "5+" },
            { label: "Verification Rate", value: "100%" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
            >
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInScale" style={{ animationDelay: "1.2s" }}>
          <Card className="max-w-2xl mx-auto gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-secondary bg-clip-text text-transparent">
                Always Learning
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm currently pursuing additional certifications in AI/ML and advanced cloud architecture. 
                Staying current with technology trends is essential for delivering cutting-edge solutions.
              </p>
              <Button
                variant="outline"
                className="hover:border-primary hover:bg-primary/10"
              >
                View Full Learning Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full gradient-primary opacity-5 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-lg gradient-secondary opacity-5 animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Certifications;