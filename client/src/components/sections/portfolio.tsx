import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Eye } from "lucide-react";

export function WebTemplates() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Templates" },
    { key: "dashboard", label: "Dashboards" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "analytics", label: "Analytics" },
    { key: "saas", label: "SaaS" },
    { key: "crm", label: "CRM" },
    { key: "finance", label: "Finance" }
  ];

  const templates = [
    // Dashboard Templates
    {
      id: 1,
      title: "Modern Dashboard Pro",
      description: "Clean and intuitive admin dashboard with comprehensive data visualization",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Dashboard", "Admin", "Analytics"],
      price: "$149",
      features: ["Real-time Charts", "User Management", "Dark Mode"]
    },
    {
      id: 2,
      title: "Executive Dashboard",
      description: "Enterprise-grade dashboard for executive reporting and KPI tracking",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Executive", "KPI", "Reports"],
      price: "$199",
      features: ["Executive Reports", "KPI Tracking", "Export Functions"]
    },
    
    // E-commerce Admin Templates
    {
      id: 3,
      title: "E-commerce Admin Suite",
      description: "Complete e-commerce management system with inventory and order tracking",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["E-commerce", "Inventory", "Orders"],
      price: "$179",
      features: ["Inventory Management", "Order Processing", "Payment Tracking"]
    },
    {
      id: 4,
      title: "Multi-vendor Dashboard",
      description: "Advanced multi-vendor marketplace admin panel with vendor management",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Multi-vendor", "Marketplace", "Admin"],
      price: "$249",
      features: ["Vendor Management", "Commission Tracking", "Dispute Resolution"]
    },
    
    // Analytics Templates
    {
      id: 5,
      title: "Analytics Pro Dashboard",
      description: "Advanced analytics dashboard with custom reporting and data insights",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Analytics", "Reports", "Insights"],
      price: "$169",
      features: ["Custom Reports", "Data Visualization", "Export Tools"]
    },
    {
      id: 6,
      title: "Marketing Analytics",
      description: "Specialized marketing analytics dashboard for campaign tracking",
      category: "analytics",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Marketing", "Campaigns", "ROI"],
      price: "$139",
      features: ["Campaign Tracking", "ROI Analysis", "A/B Testing"]
    },
    
    // SaaS Templates
    {
      id: 7,
      title: "SaaS Admin Platform",
      description: "Complete SaaS admin template with subscription and billing management",
      category: "saas",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["SaaS", "Billing", "Subscriptions"],
      price: "$299",
      features: ["Subscription Management", "Billing Integration", "User Onboarding"]
    },
    {
      id: 8,
      title: "Team Collaboration Hub",
      description: "Team management and collaboration dashboard for SaaS platforms",
      category: "saas",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Team", "Collaboration", "Management"],
      price: "$189",
      features: ["Team Management", "Project Tracking", "Communication Tools"]
    },
    
    // CRM Templates
    {
      id: 9,
      title: "CRM Dashboard Pro",
      description: "Professional CRM dashboard with lead tracking and sales pipeline",
      category: "crm",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["CRM", "Sales", "Pipeline"],
      price: "$159",
      features: ["Lead Tracking", "Sales Pipeline", "Contact Management"]
    },
    
    // Finance Templates
    {
      id: 10,
      title: "Financial Dashboard",
      description: "Comprehensive financial management dashboard for accounting and reporting",
      category: "finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Finance", "Accounting", "Reports"],
      price: "$219",
      features: ["Financial Reports", "Budget Tracking", "Invoice Management"]
    }
  ];

  const filteredTemplates = activeFilter === "all" 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Premium <span className="text-accent font-medium">Template Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Professionally designed admin templates and dashboards for modern web applications. Each template is built with scalability and customization in mind.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.key 
                  ? "bg-accent text-accent-foreground" 
                  : "border-border text-muted-foreground hover:text-foreground hover:border-accent/20"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
                {/* Template Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                      <Eye size={16} className="mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Template Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                      {template.title}
                    </h3>
                    <span className="text-accent font-semibold text-lg">
                      {template.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}