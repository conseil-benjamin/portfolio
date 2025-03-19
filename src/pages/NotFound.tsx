
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <AnimatedSection className="text-center max-w-md">
        <h1 className="text-9xl font-display font-bold text-primary">404</h1>
        <h2 className="text-2xl font-display font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link to="/" className={buttonVariants({ size: "lg" }) + " gap-2"}>
          <Home className="h-5 w-5" /> Return Home
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
