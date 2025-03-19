
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import ProjectCard from "@/components/ui/ProjectCard";

const Index = () => {
  // Sample projects data (replace with your actual projects)
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A sleek portfolio website showcasing creative works",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["TypeScript", "React", "Firebase"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <AnimatedSection animation="fade-in" delay={300}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Web Developer & Designer
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={500}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl mb-6 text-gray-900">
                Creating digital experiences that inspire and engage
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={700}>
              <p className="text-lg text-gray-700 max-w-xl mb-8">
                I'm a passionate web developer focused on creating intuitive, user-friendly applications
                that solve real-world problems with clean code and elegant design.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className={buttonVariants({ size: "lg" }) + " gap-2"}>
                  View my work <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
                </Link>
                <Link to="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Get in touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-gray-700" />
          </a>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section id="about" className="py-20 sm:py-24 bg-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                I'm a creative developer with a passion for building beautiful and functional websites
                and applications. With expertise in modern web technologies, I focus on creating
                seamless user experiences that delight and inspire.
              </p>
              <Link to="/about" className={buttonVariants({ variant: "outline" })}>
                Learn more about me
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24 bg-blue-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-gray-900">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Here are some of my recent projects. Each one has been carefully crafted
                with attention to detail and a focus on user experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 200}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  demoUrl={project.demoUrl}
                  codeUrl={project.codeUrl}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200} className="text-center mt-12">
            <Link to="/projects" className={buttonVariants() + " gap-2"}>
              View all projects <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24 bg-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-gray-900">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                I'm always open to new projects and collaborations. If you have a project in mind
                or just want to say hello, I'd love to hear from you.
              </p>
              <Link to="/contact" className={buttonVariants({ size: "lg" }) + " gap-2"}>
                Get in touch <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
