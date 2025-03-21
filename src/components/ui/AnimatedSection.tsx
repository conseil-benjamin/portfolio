import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "slide-in" | "scale-in" | "blur-in";
}

const AnimatedSection = ({
                           children,
                           className,
                           delay = 0,
                           animation = "fade-in",
                         }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
      <div style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
  );
};

export default AnimatedSection;
