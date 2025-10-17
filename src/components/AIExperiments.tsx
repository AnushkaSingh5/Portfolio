import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, FlaskConical, TrendingUp, Sparkles } from "lucide-react";

const AIExperiments = () => {
  const experiments = [
    {
      title: "Iris Flower Classifier",
      description: "Classic ML project - Built multiclass classification model using Scikit-learn",
      tags: ["Classification", "Scikit-learn"],
      status: "Completed"
    },
    {
      title: "MNIST Digit Recognition",
      description: "Deep learning project using neural networks to recognize handwritten digits",
      tags: ["Deep Learning", "TensorFlow"],
      status: "Completed"
    },
    {
      title: "Sentiment Analysis Engine",
      description: "NLP experiment analyzing emotions in text data using pre-trained models",
      tags: ["NLP", "Text Analysis"],
      status: "In Progress"
    },
    {
      title: "Movie Recommender System",
      description: "Collaborative filtering model to recommend movies based on user preferences",
      tags: ["Recommendation", "Pandas"],
      status: "In Progress"
    },
    {
      title: "Image Style Transfer",
      description: "Exploring generative AI to apply artistic styles to images",
      tags: ["Generative AI", "Computer Vision"],
      status: "Planned"
    },
    {
      title: "Chatbot with RAG",
      description: "Building conversational AI with retrieval-augmented generation",
      tags: ["LLMs", "RAG", "AI Agents"],
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Completed": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "In Progress": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Planned": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "";
    }
  };

  return (
    <section id="ai-experiments" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              AI <span className="gradient-primary bg-clip-text text-transparent">Learning Journey</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring machine learning through hands-on experiments, Kaggle competitions, and real-world applications. 
            Currently expanding skills in <span className="text-primary font-medium">Machine Learning</span>, 
            <span className="text-primary font-medium"> Recommender Systems</span>, and 
            <span className="text-primary font-medium"> Generative AI</span>.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiments.map((exp, index) => (
            <Card 
              key={index}
              className="gradient-card border-border hover:border-primary transition-smooth hover:scale-105 animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  <Badge className={getStatusColor(exp.status)}>
                    {exp.status}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2 text-lg">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Resources Section */}
        <div className="grid md:grid-cols-2 gap-6 animate-fadeInScale" style={{ animationDelay: "0.6s" }}>
          <Card className="gradient-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Practice Platforms</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Actively practicing on Kaggle, Google Colab, and building mini-projects to strengthen ML foundations.
              </p>
              <Button variant="outline" size="sm" className="hover:border-primary">
                View Kaggle Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Next Steps</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Diving deeper into transformer models, working on real-world datasets, and building AI-powered web applications.
              </p>
              <Button variant="outline" size="sm" className="hover:border-primary">
                View Learning Roadmap
              </Button>
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

export default AIExperiments;
