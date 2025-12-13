import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Development Internship (100 Hours)",
      issuer: "Microsoft Learn Student Ambassadors - KIET",
      date: "2024",
      credentialId: "MLSA-FSD-2024",
      description:
        "Completed a 100-hour internship focusing on full stack web development, working with React, Node.js, and MongoDB to build scalable applications.",
      skills: ["React", "Node.js", "MongoDB", "API Integration"],
      level: "Professional",
      verified: true,
      link:"https://drive.google.com/file/d/1W221gH1Ljntpj_BArWomdlheJCPDiFnN/view?usp=sharing",
    },
    {
      id: 2,
      title: "Social Media Marketing Internship",
      issuer: "InAmigos Foundation",
      date: "2025",
      credentialId: "U85300CT2020NPL010641",
      description:"Successfully completed a Social Media Marketing Internship at InAmigos Foundation, gaining hands-on experience in digital marketing strategies, content promotion, and online brand engagement.",
      skills: ["Social Media Marketing","Content Creation","Digital Marketing","Brand Promotion"],
      level: "Internship",
      verified: true,
      link: "https://drive.google.com/file/d/1ABdz_mtC-LxNs0GVbX9sNmVaCV5Qg2Z1/view?usp=sharing"
    },
    {
      id: 3,
      title: "Palo Alto Networks – Cybersecurity Foundation",
      issuer: "Palo Alto Networks Cybersecurity Academy",
      date: "2025",
      credentialId: "PALO-CSF-2025",
      description:
        "Completed cybersecurity fundamentals training, covering network security, firewalls, and digital threat prevention concepts.",
      skills: ["Cybersecurity", "Networking", "Threat Analysis", "Firewalls"],
      level: "Professional",
      verified: true,
      link:"https://drive.google.com/file/d/12SemM4_Nt1gM2uCdVNsCsd6eH6U8QJ4c/view?usp=sharing",
    },
    {
      id: 4,
      title:
        "Infosys Springboard – Comprehensive Training on Unix and Linux OS Fundamentals",
      issuer: "Infosys Springboard",
      date: "2025",
      credentialId: "INFO-LINUX-2025",
      description:
        "Learned core Unix/Linux commands, shell scripting, and OS fundamentals used in DevOps and system-level operations.",
      skills: ["Linux", "Unix", "Shell Scripting", "Operating Systems"],
      level: "Associate",
      verified: true,
      link:"https://drive.google.com/file/d/1WfVU3r-33pXqA6a3c_w7xh9R0D49OWUN/view?usp=sharing",
    },
    {
      id: 5,
      title: "Getting Started with DevOps",
      issuer: "LinkedIn Learning",
      date: "2025",
      credentialId: "LINKEDIN-DEVOPS-2025",
      description:
        "Fundamentals of DevOps principles, automation, and CI/CD pipelines.",
      skills: ["DevOps", "CI/CD", "Automation", "Version Control"],
      level: "Beginner",
      verified: true,
      link:"https://drive.google.com/file/d/1CgGc_nTZFtuwzYgf1Vv8a_FQG0oAqV7y/view?usp=sharing",
    },
    {
      id: 6,
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
      date: "2025",
      credentialId: "MDB-INTRO-2025",
      description:
        "Gained practical knowledge in NoSQL databases, data modeling, and CRUD operations using MongoDB Atlas and Compass.",
      skills: ["MongoDB", "NoSQL", "Data Modeling", "Atlas"],
      level: "Certified",
      verified: true,
      link:"https://drive.google.com/file/d/12C5_GUp15Arfp2neAlYoJ5vNmvYpIry1/view?usp=sharing",
    },
    {
      id: 7,
      title: "Participation – NASA Space Apps Hackathon",
      issuer: "NASA International Space Apps Challenge",
      date: "2025",
      credentialId: "NASA-HACK-2025",
      description:
        "Participated in NASA’s global hackathon, developing innovative tech solutions addressing real-world space and sustainability challenges.",
      skills: ["Teamwork", "Innovation", "Problem Solving", "Hackathon"],
      level: "Participation",
      verified: true,
      link:"https://drive.google.com/file/d/15ornZ2KEpi7UeRYP8jNtH50-TKHzXVU9/view?usp=sharing",
    },
    {
      id: 8,
      title: "Certificate of Appreciation – Mentorship and Coordination",
      issuer: "KIET Group of Institutions",
      date: "2025",
      credentialId: "KIET-MENTOR-2025",
      description:
        "Recognized for exceptional mentorship and coordination efforts during a college-level cultural event.",
      skills: ["Leadership", "Team Management", "Event Coordination"],
      level: "Appreciation",
      verified: true,
      link:"https://drive.google.com/file/d/1xtd_2wqY5imQRZ7yOUV5ZcIjwB-fMsxw/view?usp=sharing",
    },
    {
      id: 9,
      title: "Certificate of Management – Cybersecurx Event",
      issuer: "KIET Group of Institutions",
      date: "2025",
      credentialId: "CYBERSEC-MGMT-2025",
      description:
        "Acknowledged for successfully managing and coordinating Cybersecurx, a cybersecurity awareness event at the institutional level.",
      skills: ["Event Management", "Coordination", "Cyber Awareness"],
      level: "Appreciation",
      verified: true,
      link:"",
    },
    {
      id: 10,
      title: "Certificate of Participation – INNOTECH Hackathon",
      issuer: "KIET Group of Institutions",
      date: "2024",
      credentialId: "INNOTECH-2024",
      description:
        "Participated in the institute-level innovation hackathon, presenting a web-based project solution to real-world problems.",
      skills: ["Hackathon", "Problem Solving", "Innovation"],
      level: "Participation",
      verified: true,
      link:"https://drive.google.com/file/d/1h2V-yGzeFeM42diPYd7W6VuOaS76nh1F/view?usp=sharing",
    },
    {
      id: 11,
      title: "LeetCode 50 Days Streak Badge",
      issuer: "LeetCode",
      date: "2025",
      credentialId: "LEETCODE-50DAYS-2025",
      description:
        "Earned the 50 Days Badge for consistent daily problem-solving and coding practice on LeetCode.",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
      level: "Achievement",
      verified: true,
      link:"https://drive.google.com/file/d/18l5GCUw2D6NiVlFfQKHTQI-qjVPDcthy/view?usp=sharing",
    },
    {
      id: 12,
      title: "LeetCode SQL 50 Badge",
      issuer: "LeetCode",
      date: "2025",
      credentialId: "LEETCODE-SQL50-2025",
      description:
        "Completed the SQL 50 challenge on LeetCode, demonstrating proficiency in writing efficient SQL queries.",
      skills: ["MySQL", "SQL Queries", "Joins", "Aggregation"],
      level: "Achievement",
      verified: true,
      link:"https://drive.google.com/file/d/1sNV_4s6PzXhKyJThURhHNEeY7dhA5atx/view?usp=sharing",
    },
    {
      id: 13,
      title: "Certificate of Volunteering – TEDx KIET",
      issuer: "TEDx KIET Group of Institutions",
      date: "2025",
      credentialId: "TEDX-VOL-2025",
      description:
        "Volunteered as part of the organizing team for TEDx KIET, contributing to event logistics and creative design support.",
      skills: ["Volunteering", "Design", "Teamwork"],
      level: "Volunteer",
      verified: true,
      link:"https://drive.google.com/file/d/1wxC-jGpIF3Pryyj9Pc7-ETmjSXH78WWB/view?usp=sharing",
    },
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "professional":
        return "bg-primary/20 text-primary border-primary/30";
      case "associate":
        return "bg-accent/20 text-accent border-accent/30";
      case "certified":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "appreciation":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30";
      case "participation":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "achievement":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "volunteer":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-10 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              Certifications
            </span>{" "}
            & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every certification reflects a milestone in my growth journey — from web development and DevOps to leadership, cybersecurity, and creative event management.
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
                  <Award className="h-8 w-8 text-primary" />
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
                    <Badge
                      variant="outline"
                      className="text-xs bg-green-500/10 text-green-400 border-green-500/30"
                    >
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* ✅ Display ALL skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-gray-700 text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs p-2 h-auto hover:border-primary"
                    onClick={() => cert.link && window.open(cert.link, "_blank")}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
