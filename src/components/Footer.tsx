import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-green-800 text-white py-12 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/logo.svg" alt="TAT GLOBAL" className="h-10 mb-4" />
            <p className="text-gray-300 mb-4">
              Leading provider of premium fertilizer solutions for sustainable agriculture worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Agricultural Consulting</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Custom Blending</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Distribution</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">info@tatglobal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">123 Agriculture Way<br />Farmville, USA 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2025 TAT GLOBAL COMPANY LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            Built by <a href="https://pipilot.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PiPilot</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer