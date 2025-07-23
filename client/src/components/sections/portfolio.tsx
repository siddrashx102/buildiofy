import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Eye } from "lucide-react";

export function WebTemplates() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Templates" },
    { key: "corporate", label: "Corporate" },
    { key: "creative", label: "Creative" },
    { key: "retail", label: "Retail" },
    { key: "admin", label: "Admin Templates" },
    { key: "technology", label: "Technology" },
    { key: "mobile", label: "Mobile" },
    { key: "nonprofit", label: "Nonprofit" },
    { key: "specialty", label: "Specialty Pages" },
    { key: "entertainment", label: "Entertainment" },
    { key: "personal", label: "Personal" }
  ];

  const templates = [
    // Corporate Templates
    {
      id: 1,
      title: "Corporate Pro",
      description: "Professional business template with clean design and contact forms",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Business", "Professional", "Corporate"],
      price: "$49",
      features: ["Responsive Design", "Contact Forms", "SEO Optimized"]
    },
    {
      id: 2,
      title: "Enterprise Suite",
      description: "Enterprise-grade template with advanced features and integrations",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Enterprise", "Corporate", "Advanced"],
      price: "$79",
      features: ["Advanced Analytics", "CRM Integration", "Multi-language"]
    },
    
    // Creative Templates
    {
      id: 3,
      title: "Creative Portfolio",
      description: "Stunning portfolio template for designers and artists",
      category: "creative",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Portfolio", "Creative", "Designer"],
      price: "$39",
      features: ["Gallery System", "Animation Effects", "Mobile Optimized"]
    },
    {
      id: 4,
      title: "Agency Showcase",
      description: "Modern agency template with stunning animations and interactions",
      category: "creative",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Agency", "Creative", "Modern"],
      price: "$59",
      features: ["Parallax Effects", "Video Backgrounds", "Portfolio Grid"]
    },
    
    // Retail Templates
    {
      id: 5,
      title: "E-commerce Pro",
      description: "Complete e-commerce solution with shopping cart and payments",
      category: "retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["E-commerce", "Shopping", "Retail"],
      price: "$89",
      features: ["Payment Integration", "Inventory Management", "Order Tracking"]
    },
    {
      id: 6,
      title: "Fashion Store",
      description: "Elegant fashion and clothing store template",
      category: "retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Fashion", "Clothing", "Style"],
      price: "$69",
      features: ["Product Zoom", "Size Guide", "Wishlist"]
    },
    
    // Admin Templates
    {
      id: 7,
      title: "Admin Dashboard",
      description: "Comprehensive admin panel with charts and data visualization",
      category: "admin",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Dashboard", "Admin", "Analytics"],
      price: "$99",
      features: ["Data Visualization", "User Management", "API Integration"]
    },
    {
      id: 8,
      title: "CRM Dashboard",
      description: "Customer relationship management dashboard template",
      category: "admin",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["CRM", "Management", "Business"],
      price: "$79",
      features: ["Customer Tracking", "Sales Pipeline", "Reports"]
    },
    
    // Technology Templates
    {
      id: 9,
      title: "SaaS Platform",
      description: "Modern SaaS landing page with pricing and features",
      category: "technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["SaaS", "Technology", "Software"],
      price: "$69",
      features: ["Pricing Tables", "Feature Comparison", "Demo Integration"]
    },
    {
      id: 10,
      title: "Tech Startup",
      description: "Clean startup template with modern design and animations",
      category: "technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Startup", "Tech", "Innovation"],
      price: "$59",
      features: ["Investor Section", "Product Demo", "Team Showcase"]
    },
    
    // Mobile Templates
    {
      id: 11,
      title: "App Landing",
      description: "Mobile app landing page with download links and features",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Mobile", "App", "Landing"],
      price: "$49",
      features: ["App Store Links", "Screenshots", "Device Mockups"]
    },
    
    // Nonprofit Templates
    {
      id: 12,
      title: "Charity Foundation",
      description: "Nonprofit template with donation forms and impact stories",
      category: "nonprofit",
      image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Charity", "Nonprofit", "Donation"],
      price: "$39",
      features: ["Donation Forms", "Impact Stories", "Event Calendar"]
    },
    
    // Specialty Pages
    {
      id: 13,
      title: "Coming Soon",
      description: "Attractive coming soon page with email capture",
      category: "specialty",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Coming Soon", "Launch", "Email"],
      price: "$29",
      features: ["Countdown Timer", "Email Signup", "Social Links"]
    },
    
    // Entertainment Templates
    {
      id: 14,
      title: "Music Artist",
      description: "Artist portfolio with music player and tour dates",
      category: "entertainment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Music", "Artist", "Entertainment"],
      price: "$59",
      features: ["Music Player", "Tour Dates", "Merchandise Store"]
    },
    
    // Personal Templates
    {
      id: 15,
      title: "Personal Blog",
      description: "Clean and minimal blog template for personal use",
      category: "personal",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Blog", "Personal", "Writing"],
      price: "$39",
      features: ["Blog System", "Comment System", "Social Sharing"]
    }
  ];

  const filteredTemplates = activeFilter === "all" 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Web Themes & Templates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, ready-to-use website templates across all industries and use cases
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
                activeFilter === filter.key 
                  ? "bg-accent text-white hover:bg-accent/90" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {template.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{template.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                    <Eye size={14} className="mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                    <Download size={14} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
