import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import royalLePageLogo from "@/assets/royal-lepage-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nalin Sharma</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in Toronto real estate, specializing in helping first-time homebuyers achieve their dreams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Phone</p>
                  <p>(416) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Email</p>
                  <p>nalin@torontohomes.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Office</p>
                  <p>Downtown Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Book a Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <div className="flex justify-center mb-6">
            <img
              src={royalLePageLogo}
              alt="Royal LePage"
              className="h-16 brightness-0 invert opacity-80"
            />
          </div>
          <p>© {new Date().getFullYear()} Nalin Sharma Real Estate. All rights reserved.</p>
          <p className="mt-2">Licensed Real Estate Broker in Ontario</p>
        </div>
      </div>
    </footer>
  );
};
