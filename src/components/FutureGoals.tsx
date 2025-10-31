import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Sparkles, Users, BookOpen } from "lucide-react";

const FutureGoals = () => {
  const goals = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Fashion & Outfit Recommender",
      description:
        "Building a smart fashion assistant that suggests outfits based on user preferences, weather, and current trends using machine learning and computer vision.",
      tags: ["AI", "Fashion Tech", "Machine Learning"],
      timeline: "ongoing"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "PDF Review Dashboard",
      description:
        "Developing an intelligent web dashboard where users can upload and view PDFs, extract data using AI or fallback parsers, edit fields, and store them securely in MongoDB using GridFS.",
      tags: ["Full Stack", "AI", "MongoDB"],
      timeline: "ongoing"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "AI Travel Planner",
      description:
        "Creating a travel planning web app powered by AI that personalizes itineraries, suggests destinations, and optimizes trips based on user interests and budget.",
      tags: ["AI", "Web App", "Personalization"],
      timeline: "ongoing"
    }
  ];

  return (
    <section id="future-goals" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-8 w-8 text-primary animate-bounce" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-10 leading-tight">
            Future Goals &{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Currently Building
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driven to create innovative AI-powered projects that blend technology and creativity — from intelligent assistants to smart automation — turning bold ideas into impactful digital solutions.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {goals.map((goal, index) => (
            <Card 
              key={index}
              className="gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {goal.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {goal.timeline}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {goal.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {goal.tags.map((tag) => (
                    <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="max-w-4xl mx-auto animate-fadeInScale" style={{ animationDelay: "0.4s" }}>
          <Card className="gradient-card border-border relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5"></div>
            <CardContent className="p-12 text-center relative z-10">
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight">
                Let's{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                  Collaborate!
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative AI projects, participate in hackathons, or collaborate 
                on research. If you're working on something interesting in AI, full-stack development, or creative tech - 
                let's connect!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="px-6 py-2 text-sm">Open to Internships</Badge>
                <Badge className="px-6 py-2 text-sm">Hackathon Enthusiast</Badge>
                <Badge className="px-6 py-2 text-sm">Research Collaborations</Badge>
                <Badge className="px-6 py-2 text-sm">Open Source Contributor</Badge>
              </div>
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

export default FutureGoals;
