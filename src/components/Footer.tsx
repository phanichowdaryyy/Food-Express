
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  SmartphoneNfc,
  Globe,
  ChevronDown,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Food<span className="text-food-primary">Express</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Delivering delicious food from the best restaurants straight to your door. Fast, reliable, and always fresh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-food-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-food-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-food-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-food-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Restaurants', 'Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-600 hover:text-food-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Help */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Get Help</h4>
            <ul className="space-y-2">
              {['Order Status', 'Payment Options', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-600 hover:text-food-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Download App */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Download App</h4>
            <p className="text-gray-600 mb-4">
              Get the best food delivery experience on our mobile apps.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Cities we deliver to */}
        <div className="mb-12">
          <h4 className="font-bold text-gray-800 mb-4">We Deliver To</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
              'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville'
            ].map((city) => (
              <Link key={city} to="#" className="text-sm text-gray-600 hover:text-food-primary transition-colors">
                {city}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © {new Date().getFullYear()} FoodExpress. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Globe className="h-4 w-4" />
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Mail className="h-4 w-4" />
              <span>support@foodexpress.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
