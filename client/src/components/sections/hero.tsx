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

  const techIcons = [
    { icon: "⚛️", delay: 0, position: "top-20 left-10" },
    { icon: "🟢", delay: 1, position: "top-40 right-20" },
    { icon: "📦", delay: 2, position: "bottom-40 left-20" },
    { icon: "🚀", delay: 3, position: "bottom-20 right-10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className={`absolute ${tech.position} text-4xl tech-icon`}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: tech.delay,
              ease: "easeInOut"
            }}
          >
            <span className="text-white/20">{tech.icon}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Buildiofy: <span className="text-accent">Scalable</span> JavaScript Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            for Startups & Enterprises
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack development | React/Node.js | Next.js | 24/7 Support
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Audit
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 bg-transparent"
            >
              View Portfolio
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="text-accent" size={20} />
              <span>Trusted by YC Startups</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-accent" size={20} />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="text-accent" size={20} />
              <span>Lighthouse {'>'} 90</span>
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
