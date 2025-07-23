import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Calendar, Github, Linkedin, Twitter, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", project: "", budget: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Go Digital?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From ready-made templates to custom solutions - let's help your Indian business succeed online
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      id="project"
                      required
                      rows={4}
                      value={formData.project}
                      onChange={(e) => handleInputChange('project', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-2lakh">₹50k - ₹2 Lakh</SelectItem>
                        <SelectItem value="2lakh-5lakh">₹2 Lakh - ₹5 Lakh</SelectItem>
                        <SelectItem value="5lakh-10lakh">₹5 Lakh - ₹10 Lakh</SelectItem>
                        <SelectItem value="10lakh+">₹10 Lakh+</SelectItem>
                        <SelectItem value="template">Just Template (₹15k-50k)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Calendly & Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Calendly Embed */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Schedule a Free Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Book a 30-minute call to discuss your project and get a custom proposal. Available in Hindi/English.
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <div className="text-center py-8">
                    <Calendar className="text-accent mx-auto mb-4" size={48} />
                    <h4 className="text-lg font-semibold mb-4">Book Your Free Consultation</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                        <Clock size={16} />
                        <span>Available: Mon-Sat, 10 AM - 8 PM IST</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                        <Phone size={16} />
                        <span>Video/Phone Call Available</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => window.open('https://calendly.com/buildiofy/consultation', '_blank')}
                        className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Schedule on Calendly
                      </Button>
                      <p className="text-xs text-gray-400">
                        Or call us directly: +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="text-accent mr-4" size={20} />
                    <span>hello@buildiofy.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-accent mr-4" size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-accent mr-4" size={20} />
                    <span>Mumbai, Bangalore, Delhi</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-accent mr-4" size={20} />
                    <span>Mon-Sat, 10 AM - 8 PM IST</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="https://wa.me/919876543210" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Live Chat Widget */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button className="w-16 h-16 bg-accent hover:bg-accent/90 rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110">
          <MessageCircle size={24} />
        </Button>
      </motion.div>
    </section>
  );
}
