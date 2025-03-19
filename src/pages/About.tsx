
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Code, Layout, Palette, Server, GitHub, Linkedin, Mail } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      items: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-primary" />,
      items: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Wireframing"]
    },
    {
      category: "Other Skills",
      icon: <Code className="h-6 w-6 text-primary" />,
      items: ["Git", "CI/CD", "Agile Methodology", "Responsive Design", "SEO", "Performance Optimization"]
    }
  ];

  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led the development of responsive web applications using React and TypeScript. Implemented modern UI design patterns and improved performance across the platform."
    },
    {
      role: "Web Developer",
      company: "Digital Agency Studio",
      period: "2018 - 2021",
      description: "Created engaging websites and applications for various clients. Worked with a team of designers and developers to deliver high-quality projects on time."
    },
    {
      role: "Junior Developer",
      company: "StartUp Innovations",
      period: "2016 - 2018",
      description: "Assisted in the development of web applications. Gained experience in modern web technologies and best practices."
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and User Experience Design."
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "Digital College",
      period: "2010 - 2014",
      description: "Foundations in programming, databases, and system design."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6">
                  About Me
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate web developer and designer with over 6 years of experience creating
                  beautiful, functional, and user-centered digital experiences. I believe in crafting
                  websites that not only look good but also solve real problems and provide an intuitive
                  user experience.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My approach combines technical expertise with creative thinking. I enjoy turning complex
                  problems into simple, elegant solutions, and I'm always looking to learn and grow in this
                  ever-evolving field.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <GitHub className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:contact@example.com"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-12 text-center">
              My Skills
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <AnimatedSection key={skillSet.category} delay={index * 100}>
                <div className="border border-border rounded-lg p-6 bg-white shadow-sm">
                  <div className="flex items-center mb-4">
                    {skillSet.icon}
                    <h3 className="text-xl font-semibold ml-3">{skillSet.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map(skill => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 sm:py-24 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-12 text-center">
              Work Experience
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={index * 150}>
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="text-lg font-medium text-primary mb-2">{exp.company}</div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-12 text-center">
              Education
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.degree} delay={index * 150}>
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="text-lg font-medium text-primary mb-2">{edu.institution}</div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
