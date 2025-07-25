import { Mail, Phone } from "lucide-react";

export function ContactBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-center md:justify-end items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Mail size={16} />
          <a href="mailto:support@buildiofy.com" className="hover:text-accent transition-colors">
            support@buildiofy.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <a href="tel:+918445468881" className="hover:text-accent transition-colors">
            +91 8445468881
          </a>
        </div>
      </div>
    </div>
  );
}