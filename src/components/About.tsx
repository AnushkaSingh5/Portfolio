import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Trophy,Sparkles } from "lucide-react";

const About = () => {
  const skills = {
    fullstack: ["React", "Node.js", "Express", "MongoDB", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"],
    creative: ["UI/UX Design", "Canva", "Figma", "Color Theory", "Brand Design", "Visual Communication"],
    visual3D: ["3D Animations", "Motion Effects", "Framer Motion", "GSAP", "Interactive Design"],
    marketing: ["Content Strategy", "Brand Storytelling", "Campaign Planning", "Social Media Marketing"]
  };

  const experiences = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Developer",
      description: "Building modern and scalable web applications using React and Node.js.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Designer",
      description: "Designing intuitive UI/UX layouts and digital content using Canva.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "3D Visual Creator",
      description: "Bringing motion and 3D effects to life for interactive web experiences.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "TEDx Marketing Member",
      description: "Creating impactful visuals and campaigns for TEDx events.",
    },
  ];


  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a 3rd-year B.Tech CSE student passionate about building modern, interactive, and user-focused web experiences. 
            With a strong foundation in full-stack development and a creative edge in UI/UX and 3D motion design, 
            I love turning ideas into impactful digital solutions that connect technology with creativity.
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
        <div className="grid md:grid-cols-2 gap-10">
          {/* Full Stack Development */}
          <div className="animate-slideInUp" style={{ animationDelay: "0s" }}>
            <Card className="gradient-card border-border h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 rounded-2xl">
              <CardContent className="px-10 py-12">
                <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
                  <Code className="h-7 w-7" />
                  Full Stack Development
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.fullstack.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:border-primary hover:bg-primary/10 px-4 py-2 text-sm transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Creative Design */}
          <div className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
            <Card className="gradient-card border-border h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-400/30 rounded-2xl">
              <CardContent className="px-10 py-12">
                <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
                  <Palette className="h-7 w-7" />
                  Creative Design
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.creative.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:border-primary hover:bg-primary/10 px-4 py-2 text-sm transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3D & Motion Design */}
          <div className="animate-slideInUp" style={{ animationDelay: "0.4s" }}>
            <Card className="gradient-card border-border h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-400/30 rounded-2xl">
              <CardContent className="px-10 py-12">
                <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
                  <Sparkles className="h-7 w-7" />
                  3D & Motion Design
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.visual3D.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:border-primary hover:bg-primary/10 px-4 py-2 text-sm transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing & Branding */}
          <div className="animate-slideInUp" style={{ animationDelay: "0.6s" }}>
            <Card className="gradient-card border-border h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-400/30 rounded-2xl">
              <CardContent className="px-10 py-12">
                <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
                  <Users className="h-7 w-7" />
                  Marketing & Branding
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skills.marketing.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:border-primary hover:bg-primary/10 px-4 py-2 text-sm transition-smooth"
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
            <CardContent className="px-10 py-12">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(139,92,246,0.3)]">
                Beyond Code
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Outside of development, I love crafting creative visuals, experimenting with 3D motion effects, 
                and designing digital content for TEDx campaigns. Blending technology with design is what inspires me 
                to create experiences that stand out and connect with people.
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