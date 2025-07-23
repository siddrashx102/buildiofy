import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: "📊",
      title: "Admin Dashboard Templates",
      description: "Modern, responsive admin dashboards with complete user management, analytics, and data visualization components.",
      features: ["User Management", "Data Visualization", "Responsive Design"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🎨",
      title: "E-commerce Admin Panels",
      description: "Comprehensive e-commerce management systems with inventory, orders, payments, and customer management features.",
      features: ["Order Management", "Inventory Tracking", "Payment Integration"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: "📈",
      title: "Analytics Dashboards",
      description: "Professional analytics and reporting templates with charts, metrics, and data export capabilities.",
      features: ["Real-time Charts", "Export Reports", "Custom Metrics"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "⚡",
      title: "SaaS Admin Templates",
      description: "Complete SaaS platform templates with subscription management, billing, and multi-tenant architecture.",
      features: ["Subscription Billing", "Multi-tenant Support", "API Integration"],
      gradient: "from-orange-500 to-red-600"
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
            Premium <span className="text-accent font-medium">Admin Templates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Production-ready dashboard templates designed for modern web applications. Built with the latest technologies and best practices.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    View Template
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
