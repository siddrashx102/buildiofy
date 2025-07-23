import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Handshake, Play } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder, MumbaiEats",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Buildiofy's ready-made restaurant template got us online in just 3 days! Now we serve 5000+ orders daily with Razorpay integration. Perfect for Indian businesses."
    },
    {
      name: "Priya Sharma",
      role: "CEO, BangaloreLearn",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Their multilingual support helped us reach students across Karnataka. The platform handles Hindi, English, and Kannada seamlessly. Excellent understanding of Indian market!"
    },
    {
      name: "Arjun Mehta",
      role: "Director, DelhiFashion",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "From template to 300% sales growth in 6 months! Buildiofy understood our Indian customer behavior and integrated Paytm, UPI perfectly. Highly recommended!"
    }
  ];

  const trustBadges = [
    { icon: Trophy, text: "Trusted by 500+ Indian Businesses" },
    { icon: Star, text: "4.9 Client Rating" },
    { icon: Handshake, text: "300+ Projects Across India" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Success Stories from Indian Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small shops to big enterprises - see how we've helped Indian businesses succeed online
          </p>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-sm">
              <badge.icon className="text-accent" size={24} />
              <span className="font-semibold text-gray-700">{badge.text}</span>
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
              <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Video Testimonial Placeholder */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
                alt="Video testimonial" 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors">
                  <Play className="text-white ml-1" size={24} fill="currentColor" />
                </button>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Watch Our Client Success Stories</h3>
              <p className="text-gray-600">See how we've helped businesses achieve their goals with our JavaScript solutions</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
