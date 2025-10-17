import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Megaphone, Palette, Target, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Megaphone className="h-6 w-6" />,
      role: "Marketing Team Member",
      organization: "TEDx Club",
      duration: "Present",
      description: "Leading creative campaigns and brand strategy for TEDx events",
      highlights: [
        "Design promotional materials using Canva",
        "Manage social media campaigns and engagement",
        "Collaborate on event branding and visual identity",
        "Create compelling content for marketing initiatives"
      ]
    }
  ];

  const achievements = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Creative Campaign Lead",
      description: "Designed and executed multiple successful event campaigns"
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Brand Strategy",
      description: "Developed cohesive visual identity for TEDx events"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Community Engagement",
      description: "Increased social media reach through creative content"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Experience & <span className="gradient-primary bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining technical skills with creative leadership - building brands, campaigns, and communities.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto mb-12">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="gradient-card border-border hover:border-primary transition-smooth animate-fadeInScale"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {exp.organization}
                          </span>
                          <Badge variant="outline" className="text-primary border-primary/30">
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3">Key Responsibilities:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fadeInScale" style={{ animationDelay: "0.4s" }}>
          <Card className="max-w-3xl mx-auto gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Open to Collaborations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interested in hackathons, freelance projects, and collaborative opportunities that blend 
                technology with creativity. Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full gradient-secondary opacity-10 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 rounded-lg gradient-primary opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Experience;
