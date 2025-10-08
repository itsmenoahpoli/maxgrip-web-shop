"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="mb-4 block">
              <Image
                src="/brand-logo-transparent.png"
                alt="MaxGrip"
                width={150}
                height={45}
                className="!h-24 w-auto invert"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/shop" className="block text-gray-400 hover:text-white transition-colors text-sm">Shop All</Link>
              <Link href="/shop?category=dart-sets" className="block text-gray-400 hover:text-white transition-colors text-sm">Dart Sets</Link>
              <Link href="/shop?category=custom-points" className="block text-gray-400 hover:text-white transition-colors text-sm">Custom Points</Link>
              <Link href="/shop?category=accessories" className="block text-gray-400 hover:text-white transition-colors text-sm">Accessories</Link>
              <Link href="/custom-points" className="block text-gray-400 hover:text-white transition-colors text-sm">Custom Design</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">Help Center</Link>
              <Link href="/shipping" className="block text-gray-400 hover:text-white transition-colors text-sm">Shipping Info</Link>
              <Link href="/returns" className="block text-gray-400 hover:text-white transition-colors text-sm">Returns</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>shop@maxgripph.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+6392223333</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>2045 Capt. M.Reyes st., Brgy.Bangkal, Makati City, Philippines</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} MaxGrip. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


