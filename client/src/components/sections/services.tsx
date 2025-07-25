import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Custom Web Design",
      description: "Bespoke website designs tailored to your brand identity with modern aesthetics and user-centric approach.",
      features: ["Brand Identity Design", "UI/UX Design", "Responsive Layouts"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "⚡",
      title: "Premium Web Templates",
      description: "High-quality, production-ready website templates for various industries with modern design trends.",
      features: ["HTML/CSS Templates", "React Components", "WordPress Themes"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🚀",
      title: "Web Development",
      description: "Full-stack web development services using cutting-edge technologies for optimal performance.",
      features: ["Frontend Development", "Backend Solutions", "API Integration"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Responsive designs optimized for all devices with mobile-first approach and cross-browser compatibility.",
      features: ["Responsive Design", "Mobile Optimization", "PWA Development"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing and inventory management systems.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: "📊",
      title: "SEO & Analytics",
      description: "Search engine optimization and analytics implementation to boost your online visibility and track performance.",
      features: ["SEO Optimization", "Google Analytics", "Performance Tracking"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including social media, content marketing, and paid advertising.",
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "24/7 Support"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Our <span className="text-accent font-medium">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Comprehensive web design and development solutions to elevate your digital presence. From custom designs to premium templates, we deliver exceptional results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card rounded-lg border border-border hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-accent text-xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground text-sm">
                        <Check className="text-accent mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-accent font-medium hover:text-accent/80 flex items-center group text-sm">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
