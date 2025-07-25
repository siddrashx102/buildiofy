import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Rocket } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-medium">Scalable Admin Templates</span><br />
            for the Modern Web
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Production-ready & easy to use web themes and templates for Reliability and Customizability.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium text-base transition-all duration-200 shadow-sm"
            >
              Browse Templates
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-md font-medium text-base transition-all duration-200 bg-transparent"
            >
              Get Quote
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="text-accent" size={16} />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-accent" size={16} />
              <span>Modern Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="text-accent" size={16} />
              <span>Highly Customizable</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
