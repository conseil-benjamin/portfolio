
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Paris, France",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+33 123 456 789",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "contact@example.com",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Contact Hero */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hello? I'd love to hear from you.
                Feel free to reach out through the form below or via direct contact methods.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection className="flex flex-col justify-center">
              <h2 className="text-2xl font-display font-bold mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-medium mb-2">Working Hours</h3>
                <p className="text-muted-foreground mb-4">
                  I'm available Monday through Friday, from 9:00 AM to 6:00 PM CET.
                </p>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24 hours.
                </p>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Send Me a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your message. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Hello, I'd like to discuss a project..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} 
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
                My Location
              </h2>
              <p className="text-muted-foreground">
                Based in Paris, France, but available for remote work worldwide.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410947857!2d2.2646349651549296!3d48.85883773933432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1652352348158!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
