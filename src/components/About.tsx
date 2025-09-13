import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Trophy } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
    backend: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"],
    design: ["Figma", "Canva", "Adobe Creative Suite", "UI/UX Design", "Prototyping"],
    other: ["Git", "Docker", "AWS", "Vercel", "REST APIs", "GraphQL"]
  };

  const experiences = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "3+ years building scalable web applications with modern tech stacks"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Expert in Canva and design tools, creating beautiful user experiences"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "TEDx Marketing Team",
      description: "Leading marketing initiatives and brand strategy for TEDx events"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Innovation Leader",
      description: "Passionate about emerging technologies and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves creating digital experiences that make a difference. 
            With expertise in both development and design, I bring a unique perspective to every project.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {exp.icon}
                </div>
                <h3 className="font-semibold mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={category}
              className="animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                {category === 'other' ? 'Tools & Technologies' : category}
              </h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="mr-2 mb-2 hover:border-primary hover:bg-primary/10 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center animate-fadeInScale" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-4xl mx-auto gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-secondary bg-clip-text text-transparent">
                Beyond Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me designing marketing materials for TEDx events, 
                exploring new design trends on Canva, or mentoring aspiring developers. I believe in 
                the power of community and continuous learning to drive innovation in tech.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full gradient-primary opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-lg gradient-secondary opacity-10 animate-float" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default About;