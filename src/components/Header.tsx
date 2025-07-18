import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useLeadForm } from "@/LeadFormContext";
export function Header() {
   const { openLeadForm } = useLeadForm();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="font-bold text-xl text-foreground">CoachingMarketer</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Results
            </a>
            <a href="#contact"  className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            
            <Button onClick={openLeadForm} variant="default" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}