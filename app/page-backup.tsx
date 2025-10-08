import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Truck, Phone, Mail } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "MaxGrip Pro Dart Set",
      price: 89.99,
      imageSrc: "/vercel.svg",
      rating: 5,
      reviews: 124
    },
    {
      id: 2,
      title: "Custom Steel Points",
      price: 24.99,
      imageSrc: "/vercel.svg",
      rating: 5,
      reviews: 89
    },
    {
      id: 3,
      title: "Tungsten Barrel Set",
      price: 149.99,
      imageSrc: "/vercel.svg",
      rating: 4,
      reviews: 67
    },
    {
      id: 4,
      title: "Professional Flight Set",
      price: 12.99,
      imageSrc: "/vercel.svg",
      rating: 5,
      reviews: 203
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/90 to-primary/20" />
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center bg-no-repeat opacity-5" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Precision
                <span className="text-primary block">Darts</span>
                <span className="text-white">for Champions</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-lg leading-relaxed">
                Premium dart equipment engineered for grip, balance, and unmatched performance. 
                Join thousands of professional players who trust MaxGrip.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="/custom-points"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-surface transition-colors text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Custom Points
                </motion.a>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Free Shipping</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">MG</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">MaxGrip Signature</h3>
                    <p className="text-white/80">Professional Grade Equipment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Top Products</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Our best-selling premium equipment trusted by professional players worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Customer Feedback</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Hear what our customers say about their MaxGrip experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Professional Player",
                rating: 5,
                comment: "The MaxGrip Pro Dart Set is absolutely incredible. The grip pattern is perfect and the balance is spot-on. I've improved my game significantly since switching to MaxGrip.",
                image: "/vercel.svg"
              },
              {
                name: "Mike Chen",
                location: "Tournament Player",
                rating: 5,
                comment: "Outstanding quality and craftsmanship. These darts feel like they were made specifically for my hand. The custom points service is top-notch too!",
                image: "/vercel.svg"
              },
              {
                name: "Emma Davis",
                location: "Club Champion",
                rating: 5,
                comment: "Best darts I've ever owned. The tungsten construction feels premium and the grip is exceptional. Customer service was also amazing throughout the entire process.",
                image: "/vercel.svg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted mb-6 leading-relaxed">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-surface to-surface/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Get in Touch
                <span className="text-primary block">We&apos;re Here to Help</span>
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Have questions about our products or need help choosing the right dart equipment? 
                Our expert team is ready to assist you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                    <p className="text-white/70 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">info@maxgrip.com</p>
                    <p className="text-white/70 text-sm">24-hour response time</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover-glow-red text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-surface transition-colors text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Products
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-80 bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">CS</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Expert Support</h4>
                    <p className="text-white/80">Professional guidance from dart experts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
