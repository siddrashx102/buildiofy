import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: "⚛️",
      title: "Custom Web Development",
      description: "Tailored React and Next.js applications designed specifically for Indian businesses with local market understanding.",
      features: ["React & Next.js", "Multi-language Support", "Indian Payment Gateways"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🎨",
      title: "Ready-Made Templates",
      description: "Business-ready website templates optimized for Indian markets - restaurants, retail, services, and e-commerce solutions.",
      features: ["100+ Indian Templates", "Quick Setup (2-3 days)", "Local Business Focus"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: "🟢",
      title: "Backend & API Services",
      description: "Scalable Node.js backends with Indian payment integrations, SMS services, and cloud infrastructure optimized for Indian users.",
      features: ["Razorpay/Paytm Integration", "WhatsApp Business API", "AWS Mumbai Region"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: "⚡",
      title: "Digital Marketing Setup",
      description: "Complete digital presence setup including SEO optimization, Google My Business, and social media integration for Indian markets.",
      features: ["Local SEO Optimization", "Hindi/Regional Content", "Social Media Integration"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Services for Indian Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ready-made templates to custom solutions - we help Indian businesses succeed online
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
              <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="text-accent mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-accent font-semibold hover:underline flex items-center group">
                    See Case Study 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
