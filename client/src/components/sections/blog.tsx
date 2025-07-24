import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Modern Admin Dashboard Design Trends",
      excerpt: "Explore the latest design patterns and UX principles that make admin dashboards more intuitive and effective for users in 2024.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Design", "UX", "Dashboards"]
    },
    {
      id: 2,
      title: "Building Scalable Admin Templates",
      excerpt: "Best practices for creating admin templates that can scale with your application's growth and maintain performance across different use cases.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Templates", "Scalability", "Performance"]
    },
    {
      id: 3,
      title: "Data Visualization in Admin Panels",
      excerpt: "Learn how to implement effective charts and graphs in admin interfaces to help users make data-driven decisions quickly.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Data Viz", "Charts", "Analytics"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Latest <span className="text-accent font-medium">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Stay updated with the latest trends in admin dashboard design and development best practices
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
              <Card className="h-full bg-card rounded-lg overflow-hidden border border-border hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-40 object-cover" 
                />
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-lg font-medium text-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-accent font-medium hover:text-accent/80 flex items-center group text-sm">
                    Read More 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                  </Link>
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
          <Link href="/blog">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors">
              View All Posts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
