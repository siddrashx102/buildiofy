import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-4xl font-light text-foreground mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              fill out a form, or contact us for support.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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