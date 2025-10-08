"use client";

import { useState } from "react";
import { formatCurrency } from "../../lib/currency";
import SubpageHero from "../../components/SubpageHero";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "MaxGrip Pro Dart Set",
      price: 89.99,
      imageSrc: "/vercel.svg",
      quantity: 2,
      variant: "Standard (23g)"
    },
    {
      id: 2,
      title: "Custom Steel Points",
      price: 24.99,
      imageSrc: "/vercel.svg",
      quantity: 1,
      variant: "Standard Length"
    },
    {
      id: 3,
      title: "Professional Flight Set",
      price: 12.99,
      imageSrc: "/vercel.svg",
      quantity: 3,
      variant: "Standard Shape"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <ShoppingBag className="h-16 w-16 text-primary" />
          </motion.div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-xl text-muted mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red text-lg"
          >
            Start Shopping
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SubpageHero
        title="Shopping Cart"
        subtitle="Review your items and proceed to checkout"
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Cart Items ({cartItems.length})</h2>
              
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 border border-border rounded-xl hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-20 h-20 bg-background rounded-lg p-3 flex-shrink-0">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted mb-2">{item.variant}</p>
                      <p className="text-lg font-bold text-primary">{formatCurrency(item.price)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-accent transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-accent transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm sticky top-8"
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Tax</span>
                  <span className="font-medium">{formatCurrency(tax)}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
              
              {subtotal < 75 && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-primary">
                    Add {formatCurrency(75 - subtotal)} more to get free shipping!
                  </p>
                </div>
              )}
              
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red text-lg"
              >
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Secure Checkout</h3>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
