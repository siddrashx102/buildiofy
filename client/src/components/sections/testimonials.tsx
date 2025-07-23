import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Handshake, Play } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DataCore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "The admin dashboard template saved us months of development time. Clean, modern design with all the components we needed for our enterprise platform."
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager, EcomPro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "The e-commerce admin template is incredibly well-structured. Easy to customize and integrate with our existing systems. Highly recommended!"
    },
    {
      name: "David Kim",
      role: "Founder, AnalyticsPro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Professional quality templates with excellent documentation. The analytics dashboard template helped us launch our SaaS product ahead of schedule."
    }
  ];

  const trustBadges = [
    { icon: Trophy, text: "500+ Templates Sold" },
    { icon: Star, text: "4.9 Customer Rating" },
    { icon: Handshake, text: "Production Ready" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            What Our <span className="text-accent font-medium">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Trusted by developers and companies worldwide for creating professional admin interfaces
          </p>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-card px-4 py-3 rounded-md border border-border">
              <badge.icon className="text-accent" size={20} />
              <span className="font-medium text-foreground text-sm">{badge.text}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card rounded-lg border border-border hover:border-accent/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full mr-3 object-cover" 
                    />
                    <div>
                      <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Video Testimonial Placeholder - Removed for minimalistic design */}
      </div>
    </section>
  );
}
