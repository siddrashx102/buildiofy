import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Code className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-primary">Buildiofy</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Free Audit
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-600" size={24} />
            ) : (
              <Menu className="text-gray-600" size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                Get Free Audit
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
