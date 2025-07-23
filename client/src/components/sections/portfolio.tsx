import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "webapp", label: "Web Apps" },
    { key: "saas", label: "SaaS" },
    { key: "ecommerce", label: "E-commerce" }
  ];

  const projects = [
    {
      id: 1,
      title: "Mumbai Restaurant Chain",
      description: "Online ordering system serving 5000+ daily orders",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Next.js", "Razorpay", "WhatsApp"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 2,
      title: "Bangalore EdTech Platform",
      description: "Scaled to 50k+ students with multilingual support",
      category: "saas",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Node.js", "AWS Mumbai"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      title: "Delhi Fashion Store",
      description: "Increased online sales by 300% in 6 months",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Templates", "Paytm", "Hindi UI"],
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 4,
      title: "Chennai Healthcare App",
      description: "Digital patient management for 100+ clinics",
      category: "webapp",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Tamil/English", "SMS API"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      id: 5,
      title: "Pune Logistics Platform",
      description: "Optimized delivery routes across Maharashtra",
      category: "saas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Next.js", "Maps API", "Marathi"],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      id: 6,
      title: "Hyderabad Real Estate",
      description: "Property portal with virtual tours & EMI calculator",
      category: "webapp",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "3D Tours", "Loan APIs"],
      gradient: "from-yellow-600 to-orange-600"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Success Stories Across India</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Mumbai to Chennai - see how we've helped Indian businesses grow online
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
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
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.key 
                  ? "bg-accent text-white hover:bg-accent/90" 
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-accent rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
