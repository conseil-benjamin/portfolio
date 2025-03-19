
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  icon = false,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50",
    outline: "border border-primary text-primary hover:bg-primary/10 focus:ring-primary/50",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary/50",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2 rounded-md gap-2",
    lg: "text-base px-5 py-2.5 rounded-lg gap-2.5",
  };
  
  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";
  
  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && disabledStyles,
    className
  );
  
  const content = (
    <>
      {children}
      {icon && <ArrowRight className={cn("transition-transform duration-200", size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5")} />}
    </>
  );
  
  if (href && !disabled) {
    return (
      <a href={href} className={styles}>
        {content}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
