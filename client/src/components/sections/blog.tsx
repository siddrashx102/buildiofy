import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Next.js Beats CRA in 2024",
      excerpt: "Discover the performance advantages, SEO benefits, and developer experience improvements that make Next.js the superior choice for React applications in 2024.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Next.js", "React", "Performance"]
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn best practices for creating robust, scalable APIs using Node.js, Express, and modern authentication patterns that can handle enterprise-level traffic.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Node.js", "Express", "API"]
    },
    {
      id: 3,
      title: "Achieving Lighthouse Score 100",
      excerpt: "A comprehensive guide to optimizing web applications for maximum Lighthouse scores, covering performance, accessibility, best practices, and SEO.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Performance", "Lighthouse", "SEO"]
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
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in JavaScript development and best practices
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
