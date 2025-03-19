
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
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
    <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-blue-600 text-white">
      <AnimatedSection className="text-center max-w-md">
        <h1 className="text-9xl font-display font-bold text-white">404</h1>
        <h2 className="text-2xl font-display font-semibold mt-4 mb-6 text-white">Page Not Found</h2>
        <p className="text-blue-100 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link to="/" className={buttonVariants({ size: "lg", className: "bg-white text-blue-600 hover:bg-white/90" }) + " gap-2"}>
          <Home className="h-5 w-5" /> Return Home
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
