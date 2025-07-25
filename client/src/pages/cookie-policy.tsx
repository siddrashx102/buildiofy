import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { ContactBar } from "@/components/sections/contact-bar";

export default function CookiePolicyPage() {
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
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-light text-foreground mb-8">Cookie Policy</h1>
            
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> These enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> These track visitors across websites to display relevant advertisements</li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <h3>Session Cookies</h3>
            <p>
              These are temporary cookies that remain in your browser until you leave the website. 
              They help us track your movement from page to page so you don't get asked for information you've already provided.
            </p>

            <h3>Persistent Cookies</h3>
            <p>
              These remain on your device for a set period or until you delete them. 
              They help us recognize you as a returning visitor and remember your preferences.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies from your device</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <ul>
              <li>Email: support@buildiofy.com</li>
              <li>Phone: +91 8445468881</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}