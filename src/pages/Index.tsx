import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import ProjectCard from "@/components/ui/ProjectCard";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Anneso-Naturelle",
      description: "A modern e-commerce platform built with React and Node.js",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "anneso-naturelle.fr",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Dreamary",
      description: "A mobile app for noting down your dreams and analyzing them, with social aspect and gamification. Work in progress.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Kotlin", "Jetpack Compose", "Firebase"],
      demoUrl: "#",
      codeUrl: "https://github.com/conseil-benjamin/Dreamary"
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <AnimatedSection animation="fade-in" delay={300}>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                Web Developer & Designer
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight max-w-3xl mb-6 text-white">
                Creating digital experiences that inspire and engage
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={700}>
              <p className="text-lg text-white max-w-xl mb-8">
                I'm a passionate web developer focused on creating intuitive, user-friendly applications
                that solve real-world problems with clean code and elegant design.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className={buttonVariants({ variant: "default", size: "lg", className: "bg-white text-blue-600 hover:bg-white/90" }) + " gap-2"}>
                  View my work <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
                </Link>
                <Link to="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white text-white hover:bg-white/20" })}>
                  Get in touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-white" />
          </a>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section id="about" className="py-20 sm:py-24 bg-gray-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 text-white">
                About Me
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                I'm a creative developer with a passion for building beautiful and functional websites
                and applications. With expertise in modern web technologies, I focus on creating
                seamless user experiences that delight and inspire.
              </p>
              <Link to="/about" className={buttonVariants({ variant: "outline", className: "border-white text-white hover:bg-white/10" })}>
                Learn more about me
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24 bg-blue-600 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-white">
                Featured Projects
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
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
            <Link to="/projects" className={buttonVariants({ className: "bg-white text-blue-600 hover:bg-white/90" }) + " gap-2"}>
              View all projects <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24 bg-gray-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-white">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                I'm always open to new projects and collaborations. If you have a project in mind
                or just want to say hello, I'd love to hear from you.
              </p>
              <Link to="/contact" className={buttonVariants({ size: "lg", className: "bg-white text-gray-900 hover:bg-white/90" }) + " gap-2"}>
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
