import { Code, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import buildiofy_logo from "@assets/buildiofy-logo_1753375411520.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                {/* Logo Icon */}
                <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center relative">
                  <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute right-2.5 top-2.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute right-2.5 bottom-2.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Logo Text */}
                <span className="text-2xl font-semibold text-white">
                  <span className="text-accent">build</span><span className="text-gray-300">iofy</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Scalable JavaScript solutions for startups and enterprises. We build the future, one line of code at a time.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Web App Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API & Backend</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">UI/UX Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Performance Audit</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>support@buildiofy.com</li>
              <li>+91 8445468881</li>
              <li>Greater Noida (West), UP, India (201306)</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Buildiofy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
