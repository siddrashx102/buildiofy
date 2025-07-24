import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPostsData = {
  1: {
    id: 1,
    title: "Modern Admin Dashboard Design Trends",
    content: `
      <p>In the rapidly evolving world of web development, admin dashboards have become the nerve center of business operations. As we move through 2025, several key design trends are shaping how we approach admin interface design.</p>
      
      <h2>1. Minimalist Dark Themes</h2>
      <p>Dark themes are no longer just a preference—they're becoming the default for admin dashboards. This shift reduces eye strain during long work sessions and creates a more professional, focused environment. The key is implementing dark themes that maintain excellent readability and visual hierarchy.</p>
      
      <h2>2. Data-Dense Layouts</h2>
      <p>Modern admin dashboards are moving towards displaying more information in less space. This involves:</p>
      <ul>
        <li>Smart use of micro-interactions to reveal additional information</li>
        <li>Collapsible sections and expandable cards</li>
        <li>Contextual overlays and tooltips</li>
        <li>Progressive disclosure of complex data</li>
      </ul>
      
      <h2>3. Real-time Collaboration Features</h2>
      <p>Admin dashboards are increasingly incorporating real-time collaboration features, allowing multiple team members to work simultaneously while seeing live updates and changes.</p>
      
      <h2>4. Mobile-First Responsive Design</h2>
      <p>With remote work becoming the norm, admin dashboards must work seamlessly across all devices. This means designing for mobile first, then scaling up to larger screens.</p>
      
      <h2>Conclusion</h2>
      <p>The future of admin dashboard design lies in creating interfaces that are both powerful and intuitive. By following these trends, you can build dashboards that not only look modern but also improve user productivity and satisfaction.</p>
    `,
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    tags: ["Design", "UX", "Dashboards"],
    author: "Buildiofy Team"
  },
  2: {
    id: 2,
    title: "Building Scalable Admin Templates",
    content: `
      <p>Creating admin templates that can grow with your application is one of the most challenging aspects of frontend development. Here's a comprehensive guide to building scalable admin templates that maintain performance and usability.</p>
      
      <h2>Component Architecture</h2>
      <p>The foundation of any scalable admin template lies in its component architecture. We recommend:</p>
      <ul>
        <li>Atomic design principles with reusable components</li>
        <li>Consistent prop interfaces across similar components</li>
        <li>Clear separation of concerns between layout and functionality</li>
      </ul>
      
      <h2>State Management Strategy</h2>
      <p>For complex admin applications, proper state management is crucial:</p>
      <ul>
        <li>Use server state libraries like TanStack Query for API data</li>
        <li>Keep local UI state minimal and component-scoped</li>
        <li>Implement proper caching strategies for frequently accessed data</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Large admin applications can quickly become slow without proper optimization:</p>
      <ul>
        <li>Implement lazy loading for routes and heavy components</li>
        <li>Use virtual scrolling for large data tables</li>
        <li>Optimize bundle size with proper code splitting</li>
        <li>Implement proper memoization for expensive calculations</li>
      </ul>
      
      <h2>Theming and Customization</h2>
      <p>Scalable admin templates should be easily customizable:</p>
      <ul>
        <li>Use CSS variables for consistent theming</li>
        <li>Implement a design token system</li>
        <li>Provide multiple layout options</li>
      </ul>
      
      <h2>Testing Strategy</h2>
      <p>Comprehensive testing ensures your template remains reliable as it grows:</p>
      <ul>
        <li>Unit tests for utility functions and hooks</li>
        <li>Integration tests for component interactions</li>
        <li>E2E tests for critical user flows</li>
      </ul>
    `,
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    tags: ["Templates", "Scalability", "Performance"],
    author: "Buildiofy Team"
  },
  3: {
    id: 3,
    title: "Data Visualization in Admin Panels",
    content: `
      <p>Effective data visualization is what separates good admin panels from great ones. Users need to quickly understand complex information and make data-driven decisions. Here's how to implement effective charts and graphs in admin interfaces.</p>
      
      <h2>Choosing the Right Chart Type</h2>
      <p>Different data types require different visualization approaches:</p>
      <ul>
        <li><strong>Time Series Data:</strong> Line charts and area charts</li>
        <li><strong>Comparisons:</strong> Bar charts and column charts</li>
        <li><strong>Proportions:</strong> Pie charts and donut charts</li>
        <li><strong>Distributions:</strong> Histograms and box plots</li>
        <li><strong>Relationships:</strong> Scatter plots and heat maps</li>
      </ul>
      
      <h2>Interactive Elements</h2>
      <p>Modern admin dashboards benefit from interactive visualizations:</p>
      <ul>
        <li>Hover tooltips with detailed information</li>
        <li>Clickable elements for drill-down functionality</li>
        <li>Zoom and pan capabilities for detailed exploration</li>
        <li>Dynamic filtering and data selection</li>
      </ul>
      
      <h2>Performance Considerations</h2>
      <p>Large datasets can slow down your dashboard:</p>
      <ul>
        <li>Implement data sampling for initial views</li>
        <li>Use server-side aggregation when possible</li>
        <li>Implement lazy loading for secondary charts</li>
        <li>Consider using canvas-based charts for large datasets</li>
      </ul>
      
      <h2>Accessibility in Data Visualization</h2>
      <p>Make your charts accessible to all users:</p>
      <ul>
        <li>Use colorblind-friendly color palettes</li>
        <li>Provide alternative text descriptions</li>
        <li>Ensure keyboard navigation support</li>
        <li>Include data tables as alternatives to visual charts</li>
      </ul>
      
      <h2>Real-time Data Updates</h2>
      <p>Many admin panels need to display live data:</p>
      <ul>
        <li>Implement efficient WebSocket connections</li>
        <li>Use smooth animations for data transitions</li>
        <li>Provide pause/play controls for real-time feeds</li>
        <li>Consider the cognitive load of constantly changing data</li>
      </ul>
    `,
    date: "Jan 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    tags: ["Data Viz", "Charts", "Analytics"],
    author: "Buildiofy Team"
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPostsData[postId as keyof typeof blogPostsData];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-foreground mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent hover:text-accent/80">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Article Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground text-sm">
                <span className="mr-4">By {post.author}</span>
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{post.date}</span>
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Article Body */}
            <div 
              className="prose prose-lg prose-gray dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-medium
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Share2 size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Share this article</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                >
                  Copy Link
                </Button>
              </div>
            </div>
          </motion.article>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-light text-foreground mb-8">
              More <span className="text-accent font-medium">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(blogPostsData)
                .filter(p => p.id !== postId)
                .slice(0, 2)
                .map((relatedPost) => (
                <Card key={relatedPost.id} className="bg-card border border-border hover:border-accent/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-foreground mb-2 hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {relatedPost.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                    </p>
                    <Link href={`/blog/${relatedPost.id}`} className="text-accent font-medium hover:text-accent/80 flex items-center group text-sm">
                      Read More 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}