"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";
import SubpageHero from "../../components/SubpageHero";
import { formatCurrency } from "../../lib/currency";
import { Filter, SortAsc, Grid, List, ChevronDown, Star, SlidersHorizontal } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Checkbox from "@radix-ui/react-checkbox";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const products = [
    { id: 1, title: "MaxGrip Pro Dart Set", price: 89.99, imageSrc: "/products/product1.jpg", category: "dart-sets", brand: "MaxGrip", rating: 5, reviews: 124 },
    { id: 2, title: "Custom Steel Points", price: 24.99, imageSrc: "/products/product2.jpg", category: "custom-points", brand: "MaxGrip", rating: 5, reviews: 89 },
    { id: 3, title: "Tungsten Barrel Set", price: 149.99, imageSrc: "/products/product3.jpg", category: "barrels", brand: "MaxGrip", rating: 4, reviews: 67 }
  ];

  const categories = [
    { id: 'dart-sets', name: 'Dart Sets', count: 12 },
    { id: 'custom-points', name: 'Custom Points', count: 8 },
    { id: 'barrels', name: 'Barrels', count: 15 },
    { id: 'accessories', name: 'Accessories', count: 25 }
  ];

  const brands = [
    { id: 'maxgrip', name: 'MaxGrip', count: 35 },
    { id: 'precision', name: 'Precision Darts', count: 12 },
    { id: 'elite', name: 'Elite Sports', count: 8 }
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SubpageHero
        title="Shop"
        subtitle="Discover our complete collection of premium dart equipment. Professional grade tools for champions."
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted">
                      <span>{formatCurrency(priceRange[0])}</span>
                      <span>{formatCurrency(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-3">
                        <Checkbox.Root
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                          className="w-5 h-5 border-2 border-border rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        >
                          <Checkbox.Indicator className="text-white">
                            <div className="w-3 h-3 bg-white rounded-sm" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label htmlFor={`category-${category.id}`} className="flex-1 flex items-center justify-between cursor-pointer">
                          <span className="text-sm">{category.name}</span>
                          <span className="text-xs text-muted">({category.count})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Brands</h4>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand.id} className="flex items-center gap-3">
                        <Checkbox.Root
                          id={`brand-${brand.id}`}
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrand(brand.id)}
                          className="w-5 h-5 border-2 border-border rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        >
                          <Checkbox.Indicator className="text-white">
                            <div className="w-3 h-3 bg-white rounded-sm" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label htmlFor={`brand-${brand.id}`} className="flex-1 flex items-center justify-between cursor-pointer">
                          <span className="text-sm">{brand.name}</span>
                          <span className="text-xs text-muted">({brand.count})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3">
                        <Checkbox.Root
                          id={`rating-${rating}`}
                          className="w-5 h-5 border-2 border-border rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        >
                          <Checkbox.Indicator className="text-white">
                            <div className="w-3 h-3 bg-white rounded-sm" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label htmlFor={`rating-${rating}`} className="flex-1 flex items-center gap-2 cursor-pointer">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-muted">({rating}+)</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>

          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm mb-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">All Products</h2>
                  <p className="text-sm text-muted">{products.length} products found</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors">
                      <SortAsc className="h-4 w-4" />
                      <span className="text-sm">Sort by</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="min-w-[150px] bg-white rounded-lg shadow-lg border border-border p-2" sideOffset={5}>
                        <DropdownMenu.Item 
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer"
                          onSelect={() => setSortBy('featured')}
                        >
                          Featured
                        </DropdownMenu.Item>
                        <DropdownMenu.Item 
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer"
                          onSelect={() => setSortBy('price-low')}
                        >
                          Price: Low to High
                        </DropdownMenu.Item>
                        <DropdownMenu.Item 
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer"
                          onSelect={() => setSortBy('price-high')}
                        >
                          Price: High to Low
                        </DropdownMenu.Item>
                        <DropdownMenu.Item 
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer"
                          onSelect={() => setSortBy('newest')}
                        >
                          Newest
                        </DropdownMenu.Item>
                        <DropdownMenu.Item 
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer"
                          onSelect={() => setSortBy('rating')}
                        >
                          Highest Rated
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-accent">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {products.map((product, index) => (
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
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
