import ProductCard from "../components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Slider - Ochaka Style */}
      <section className="relative bg-gray-900 h-[600px] flex items-center">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Precision Darts for Champions
            </h1>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              Premium dart equipment engineered for grip, balance, and unmatched performance. 
              Join thousands of professional players across the Philippines who trust MaxGrip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors text-sm"
              >
                Shop Now
              </a>
              <a
                href="/custom-points"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm"
              >
                Custom Points
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Ochaka Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Our best-selling premium equipment trusted by professional players across the Philippines
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title="MaxGrip Pro Dart Set"
              price={4500}
              imageSrc="/products/product1.jpg"
            />
            <ProductCard
              title="Custom Steel Points"
              price={4500}
              imageSrc="/products/product2.jpg"
            />
            <ProductCard
              title="Tungsten Barrel Set"
              price={4500}
              imageSrc="/products/product3.jpg"
            />
            <ProductCard
              title="Professional Flight Set"
              price={4500}
              imageSrc="/products/product1.jpg"
            />
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Ochaka Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Hear what our customers say about their MaxGrip experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Professional Player",
                rating: 5,
                comment: "The MaxGrip Pro Dart Set is absolutely incredible. The grip pattern is perfect and the balance is spot-on. I've improved my game significantly since switching to MaxGrip."
              },
              {
                name: "Mike Chen",
                location: "Tournament Player",
                rating: 5,
                comment: "Outstanding quality and craftsmanship. These darts feel like they were made specifically for my hand. The custom points service is top-notch too!"
              },
              {
                name: "Emma Davis",
                location: "Club Champion",
                rating: 5,
                comment: "Best darts I've ever owned. The tungsten construction feels premium and the grip is exceptional. Customer service was also amazing throughout the entire process."
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-3xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Ochaka Style */}
      <section className="py-16 bg-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-sm text-red-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest products, tips, and exclusive offers
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-white placeholder:text-gray-300 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-300 focus:border-red-300"
                />
                <button className="px-6 py-3 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}