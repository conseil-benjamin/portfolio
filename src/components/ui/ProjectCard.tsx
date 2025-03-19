
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  codeUrl,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mt-auto">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium animated-underline"
            >
              Live Demo <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          )}
          
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium animated-underline"
            >
              View Code <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
