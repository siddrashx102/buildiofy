import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Next.js Beats CRA for Indian Businesses",
      excerpt: "Discover how Next.js helps Indian businesses with better SEO, faster loading times, and improved user experience for customers across India's diverse internet speeds.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Next.js", "Indian Market", "Performance"]
    },
    {
      id: 2,
      title: "Integrating Indian Payment Gateways",
      excerpt: "Complete guide to integrating Razorpay, Paytm, and UPI in your website. Learn about Indian payment preferences and how to optimize checkout for local customers.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Razorpay", "UPI", "Indian Payments"]
    },
    {
      id: 3,
      title: "Building Multilingual Websites for India",
      excerpt: "Best practices for creating websites that support Hindi, regional languages, and English. Learn about fonts, RTL support, and cultural considerations.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Multilingual", "Hindi", "Localization"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Insights for Indian Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about web development, payment integration, and digital marketing specifically for the Indian market
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-accent font-semibold hover:underline flex items-center group">
                    Read More 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
