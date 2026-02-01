import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast("Message sent successfully! I'll get back to you soon.", {
      description: "Thank you for reaching out!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "singhanushka0522@gmail.com",
      href: "mailto:singhanushka0522@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8468055528",
      href: ""
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ghaziabad, Uttar Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/AnushkaSingh5",
      username: "AnushkaSingh5"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anushka-singh-5a533b2a4/",
      username: "Anushka Singh"
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-10 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's create something amazing together! Whether it's a project collaboration, internship opportunity, 
            or just a chat about AI and tech.
          </p>
          <Button
            size="lg"
            onClick={() =>
            window.open(
                "https://drive.google.com/file/d/1qkZyiNNfnBa3XBxuAhbdKgLi7VxTzzLd/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
            )}
            className="gradient-primary text-primary-foreground hover:scale-105 transition-bounce shadow-3d animate-glow"
          >
          <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="gradient-card border-border animate-fadeInScale">
            <CardContent className="p-8">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight text-white">
                Send me a{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                  message
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name Surname"
                      required
                      className="border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="random@example.com"
                      required
                      className="border-border focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration"
                    required
                    className="border-border focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="border-border focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-bounce shadow-3d"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fadeInScale" style={{ animationDelay: "0.2s" }}>
            {/* Contact Information */}
            <Card className="gradient-card border-border">
              <CardContent className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight text-white">
                  Contact{" "}
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                    Me
                  </span>
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-smooth group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-smooth">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-smooth">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card border-border">
              <CardContent className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight text-white">
                  Follow{" "}
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                    me
                  </span>
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-smooth group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-smooth">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-smooth">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="gradient-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <h4 className="font-semibold mb-2 text-green-400">Open to Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Actively exploring opportunities in full-stack development, basic AI-based projects, and creative tech collaborations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-28 h-28 rounded-full gradient-primary opacity-5 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 rounded-lg gradient-secondary opacity-5 animate-float" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default Contact;