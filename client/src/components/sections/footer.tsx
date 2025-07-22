import { Code, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Code className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-white">Buildiofy</span>
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
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tech Stack</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>hello@buildiofy.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Buildiofy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
