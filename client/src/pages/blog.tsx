import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactBar } from "@/components/sections/contact-bar";

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
  },
  {
    id: 4,
    title: "Authentication Patterns for Admin Systems",
    excerpt: "Comprehensive guide to implementing secure authentication and authorization in admin dashboard applications.",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Security", "Auth", "Backend"]
  },
  {
    id: 5,
    title: "Mobile-First Admin Dashboard Design",
    excerpt: "Creating responsive admin interfaces that work seamlessly across all devices while maintaining functionality.",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Mobile", "Responsive", "UX"]
  },
  {
    id: 6,
    title: "Performance Optimization for Admin Templates",
    excerpt: "Advanced techniques to ensure your admin dashboards load fast and perform smoothly even with large datasets.",
    date: "Dec 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Performance", "Optimization", "Speed"]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactBar />
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-light text-foreground">
              <span className="text-accent font-medium">Buildiofy</span> Blog
            </h1>
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Latest <span className="text-accent font-medium">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Deep dives into admin dashboard design, development best practices, and industry trends
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card rounded-lg overflow-hidden border border-border hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar size={14} className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3 hover:text-accent transition-colors">
                      {post.title}
                    </h3>
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

                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}