import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildiofy_logo from "@assets/buildiofy-logo_1753375411520.png";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute right-2 top-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute right-2 bottom-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              {/* Logo Text */}
              <span className="text-xl font-semibold text-foreground">
                <span className="text-accent">build</span><span className="text-muted-foreground">iofy</span>
              </span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Templates
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="text-muted-foreground" size={24} />
            ) : (
              <Menu className="text-muted-foreground" size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm font-medium"
              >
                Templates
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-md font-medium w-full mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
