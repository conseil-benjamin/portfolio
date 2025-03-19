
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  // Sample projects data (replace with your actual projects)
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with product management, shopping cart, and checkout features. Built with React, Node.js, and MongoDB for a seamless shopping experience.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A sleek portfolio website with smooth animations and responsive design, showcasing creative works and projects. Implemented using modern web technologies.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with a user-friendly interface. Features include task categories, reminders, and progress tracking.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["TypeScript", "React", "Firebase"],
      category: "Frontend",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A real-time weather dashboard showing current conditions and forecasts for any location. Integrates with weather APIs to display accurate and up-to-date information.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["JavaScript", "React", "API Integration"],
      category: "Frontend",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform where users can discover, share, and save their favorite recipes. Includes features like ratings, comments, and collections.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["React", "Express", "MongoDB", "Node.js"],
      category: "Full Stack",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Blog CMS",
      description: "A content management system for blogs with an intuitive admin dashboard. Features include post creation/editing, media management, and SEO optimization tools.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "Full Stack",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground">
                Here's a selection of projects I've worked on. Each project has been crafted with attention
                to detail, focusing on both functionality and user experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
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

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <AnimatedSection className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No projects found in this category. Check back soon!
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
