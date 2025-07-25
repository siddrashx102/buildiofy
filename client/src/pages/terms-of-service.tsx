import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-light text-foreground mb-8">Terms of Service</h1>
            
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Buildiofy's 
              website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Buildiofy's website are provided on an 'as is' basis. 
              Buildiofy makes no warranties, expressed or implied, and hereby disclaims and negates 
              all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Buildiofy or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Buildiofy's website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              of India and you irrevocably submit to the exclusive jurisdiction of the courts in that 
              state or location.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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