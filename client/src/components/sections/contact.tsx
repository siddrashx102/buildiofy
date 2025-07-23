import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Github, Linkedin, Twitter, MessageCircle, Send, MapPin, Users, X, Minimize2 } from "lucide-react";

// Chat Widget Component
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you with any questions about our services. How can I assist you today?",
      sender: "support",
      timestamp: new Date()
    }
  ]);

  useEffect(() => {
    // Auto-open chat after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, {
        id: prev.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date()
      }]);
      setMessage("");
      
      // Auto-response after a short delay
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "Thanks for your message! I'll connect you with our team right away. You can also fill out our contact form for a detailed response.",
          sender: "support",
          timestamp: new Date()
        }]);
      }, 1500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-accent text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-medium">Support Chat</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hover:bg-white/10 p-1 rounded"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-accent hover:bg-accent/90"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          onClick={() => {
            if (isMinimized) {
              setIsMinimized(false);
            } else {
              setIsOpen(!isOpen);
            }
          }}
          className="w-16 h-16 bg-accent hover:bg-accent/90 rounded-full shadow-lg flex items-center justify-center text-white transition-all transform hover:scale-110 relative"
        >
          <MessageCircle size={24} />
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">1</span>
            </div>
          )}
        </Button>
      </motion.div>
    </div>
  );
}

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
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
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
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                      <Github size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                      <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                      <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
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
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="glassmorphism bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                
                <div className="space-y-6">
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Live Chat Widget */}
      <ChatWidget />
    </section>
  );
}
