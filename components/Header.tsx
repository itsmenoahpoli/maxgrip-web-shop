"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search, Menu, ChevronDown, Phone, Mail, Heart } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Ochaka Style */}
      <div className="bg-gray-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+6392223333</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>shop@maxgripph.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free shipping on orders over ₱3,500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Ochaka Style */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/brand-logo-transparent.png"
                  alt="MaxGrip"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-sm text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center text-sm text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Products
                  <ChevronDown className="h-3 w-3 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/shop" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">All Products</Link>
                  <Link href="/shop?category=dart-sets" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Dart Sets</Link>
                  <Link href="/shop?category=custom-points" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Custom Points</Link>
                  <Link href="/shop?category=barrels" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Barrels</Link>
                  <Link href="/shop?category=accessories" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Accessories</Link>
                </div>
              </div>
              <Link href="/custom-points" className="text-sm text-gray-700 hover:text-red-600 font-medium transition-colors">
                Custom Points
              </Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-red-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-8 pl-8 pr-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-1.5 text-gray-700 hover:text-red-600 transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-gray-700 hover:text-red-600 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <Link href="/cart" className="relative p-1.5 text-gray-700 hover:text-red-600 transition-colors">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </Link>
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-red-600 font-medium">
                Home
              </Link>
              <Link href="/shop" className="block text-gray-700 hover:text-red-600 font-medium">
                Shop
              </Link>
              <Link href="/custom-points" className="block text-gray-700 hover:text-red-600 font-medium">
                Custom Points
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-red-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-red-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


