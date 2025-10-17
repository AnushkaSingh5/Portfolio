import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Trophy } from "lucide-react";

const About = () => {
  const skills = {
    fullstack: ["React", "TypeScript", "Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    ai: ["Machine Learning", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Recommender Systems", "Data Analysis"],
    creative: ["Canva", "Figma", "UI/UX Design", "Color Theory", "Brand Strategy", "Marketing Design"]
  };

  const experiences = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "AI Enthusiast",
      description: "Actively learning ML, building recommender systems and exploring generative AI"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Full Stack Developer",
      description: "Building scalable web applications with React, Node.js, and modern frameworks"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Designer",
      description: "Expert in Canva and UI/UX design, crafting beautiful brand experiences"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "TEDx Marketing Team",
      description: "Leading creative campaigns and brand strategy for TEDx events"
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
            I'm a B.Tech 2nd year student deeply interested in blending AI, engineering, and creativity to build 
            real-world solutions. From full-stack foundations to machine learning experiments, I'm actively exploring 
            the intersection of technology and innovation while honing my design skills.
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-slideInUp" style={{ animationDelay: "0s" }}>
            <Card className="gradient-card border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Full Stack Development
                </h3>
                <div className="space-y-2">
                  {skills.fullstack.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="mr-2 mb-2 hover:border-primary hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
            <Card className="gradient-card border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  AI & Data Science
                </h3>
                <div className="space-y-2">
                  {skills.ai.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="mr-2 mb-2 hover:border-primary hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Currently Learning & Practicing
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slideInUp" style={{ animationDelay: "0.4s" }}>
            <Card className="gradient-card border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Design & Creative
                </h3>
                <div className="space-y-2">
                  {skills.creative.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="mr-2 mb-2 hover:border-primary hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center animate-fadeInScale" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-4xl mx-auto gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-secondary bg-clip-text text-transparent">
                Beyond Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding or training ML models, you'll find me designing marketing materials for TEDx events, 
                exploring new design trends on Canva, or experimenting with AI notebooks on Kaggle. I believe in 
                the power of blending technology, AI, and creativity to build products that truly make a difference.
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