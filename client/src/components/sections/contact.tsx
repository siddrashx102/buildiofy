import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Github, Linkedin, Twitter, Send, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    timeline: "",
    services: [] as string[],
    hearAbout: "",
    newsletter: false
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
        setFormData({ 
          name: "", 
          email: "", 
          company: "", 
          phone: "",
          project: "", 
          budget: "",
          timeline: "",
          services: [],
          hearAbout: "",
          newsletter: false
        });
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

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
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
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals with scalable JavaScript solutions
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Services Interested In */}
                  <div>
                    <label className="block text-sm font-medium mb-4">Services Interested In</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Frontend Development',
                        'Backend Development',
                        'Full-Stack Development',
                        'UI/UX Design',
                        'API Development',
                        'Database Design',
                        'Mobile Development',
                        'DevOps & Deployment'
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-3">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, !!checked)}
                            className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                          />
                          <label htmlFor={service} className="text-sm text-gray-300 cursor-pointer">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
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
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5k</SelectItem>
                          <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                          <SelectItem value="15k-30k">$15k - $30k</SelectItem>
                          <SelectItem value="30k-50k">$30k - $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k+">$100k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2-months">1-2 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">How did you hear about us?</label>
                    <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange('hearAbout', value)}>
                      <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="github">GitHub</SelectItem>
                        <SelectItem value="blog">Blog/Article</SelectItem>
                        <SelectItem value="event">Event/Conference</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                    {/* Newsletter Subscription */}
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                        className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-300 cursor-pointer">
                        Subscribe to our newsletter for development tips and updates
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mt-6"
                  >
                    <Send size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            {/* Single unified card that matches form height */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Contact Information Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-300">hello@buildiofy.com</p>
                        <p className="text-sm text-gray-400">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-300">Remote-First Agency</p>
                        <p className="text-sm text-gray-400">Serving clients worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-gray-300">Under 24 hours</p>
                        <p className="text-sm text-gray-400">Usually much faster</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div>
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                        <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                        <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                        <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-6"></div>

                {/* Why Choose Us Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Expert Team</p>
                        <p className="text-sm text-gray-300">Full-stack developers with 5+ years experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Modern Stack</p>
                        <p className="text-sm text-gray-300">Latest React, Node.js, TypeScript technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Agile Process</p>
                        <p className="text-sm text-gray-300">Regular updates and transparent communication</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Post-Launch Support</p>
                        <p className="text-sm text-gray-300">Ongoing maintenance and feature updates</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-6"></div>

                {/* Next Steps Section */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Initial Consultation</p>
                        <p className="text-sm text-gray-300">We'll discuss your project requirements and goals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Custom Proposal</p>
                        <p className="text-sm text-gray-300">Detailed timeline, technology stack, and pricing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Development Kickoff</p>
                        <p className="text-sm text-gray-300">Project starts with regular progress updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
