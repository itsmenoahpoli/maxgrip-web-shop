"use client";

import { useState } from "react";
import { formatCurrency } from "../../../lib/currency";
import { motion } from "framer-motion";
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('default');

  const product = {
    id: 1,
    title: "MaxGrip Pro Dart Set",
    price: 89.99,
    originalPrice: 119.99,
    rating: 5,
    reviews: 124,
    images: ["/products/product1.jpg", "/products/product1.jpg", "/products/product1.jpg", "/products/product1.jpg"],
    description: "Professional grade dart set engineered for maximum grip and precision. Features tungsten barrels with custom grip patterns and balanced weight distribution.",
    features: [
      "90% Tungsten Construction",
      "Custom Grip Pattern",
      "Balanced Weight Distribution",
      "Professional Grade Quality",
      "Lifetime Warranty"
    ],
    specifications: {
      "Barrel Material": "90% Tungsten",
      "Weight": "23g",
      "Length": "50.8mm",
      "Diameter": "6.35mm",
      "Grip Style": "Ring Grip",
      "Includes": "3 Darts, Flights, Shafts, Case"
    },
    variants: [
      { id: 'default', name: 'Standard', price: 89.99 },
      { id: 'heavy', name: 'Heavy Weight (25g)', price: 94.99 },
      { id: 'light', name: 'Light Weight (21g)', price: 84.99 }
    ]
  };

  const relatedProducts = [
    { id: 2, title: "Custom Steel Points", price: 24.99, imageSrc: "/products/product2.jpg" },
    { id: 3, title: "Tungsten Barrel Set", price: 149.99, imageSrc: "/products/product3.jpg" },
    { id: 4, title: "Professional Flight Set", price: 12.99, imageSrc: "/products/product2.jpg" },
    { id: 5, title: "Elite Dart Set", price: 199.99, imageSrc: "/products/product3.jpg" }
  ];

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent dart set! The grip is perfect and the balance is outstanding. Highly recommend for serious players."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      date: "1 week ago",
      comment: "Great quality darts. The tungsten construction feels premium and the custom grip pattern really helps with control."
    },
    {
      id: 3,
      name: "Mike Davis",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good dart set overall. The only minor issue is the flights could be a bit more durable, but the darts themselves are excellent."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8">
              <div className="aspect-square bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg p-3 shadow-sm border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted">({product.reviews} reviews)</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">{formatCurrency(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted line-through">{formatCurrency(product.originalPrice)}</span>
                )}
              </div>
              
              <p className="text-lg text-muted leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Weight Variant</h3>
              <div className="flex gap-3 mb-8">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedVariant === variant.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quantity</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-accent transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-accent transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="px-8 py-4 rounded-lg border border-border hover:bg-accent transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 rounded-lg border border-border hover:bg-accent transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-muted">On orders over {formatCurrency(75)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-sm">Lifetime Warranty</p>
                  <p className="text-xs text-muted">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <RotateCcw className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-sm">30-Day Returns</p>
                  <p className="text-xs text-muted">No questions asked</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <Tabs.Root defaultValue="description" className="w-full">
            <Tabs.List className="flex border-b border-border mb-8">
              <Tabs.Trigger
                value="description"
                className="flex-1 px-6 py-4 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              >
                Description
              </Tabs.Trigger>
              <Tabs.Trigger
                value="specifications"
                className="flex-1 px-6 py-4 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              >
                Specifications
              </Tabs.Trigger>
              <Tabs.Trigger
                value="reviews"
                className="flex-1 px-6 py-4 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              >
                Reviews ({product.reviews})
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="description" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tabs.Content>

            <Tabs.Content value="specifications" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border">
                    <span className="font-medium text-muted">{key}</span>
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="reviews" className="space-y-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-muted'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-muted">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm hover-glow-red cursor-pointer"
              >
                <div className="aspect-square bg-background rounded-lg mb-4 p-4">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <p className="text-primary font-bold">{formatCurrency(product.price)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
