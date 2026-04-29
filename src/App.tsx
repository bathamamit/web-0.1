import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Derived State
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="flex-1 bg-gray-200 pb-10">
        {/* Banner Hero */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80" 
            className="w-full h-full object-cover"
            alt="Hero Banner"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-20 max-w-lg space-y-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-amazon-orange text-amazon-dark px-3 py-1 font-bold inline-flex items-center gap-2 rounded-sm"
            >
              <Zap size={18} fill="currentColor" />
              TOP DEALS OF THE WEEK
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg tracking-tight">
              Upgrade Your Tech <br/> & Lifestyle
            </h1>
            <p className="text-white/90 text-lg hidden md:block">
              Save up to 40% on exclusive electronics and fashion. Prime members get free shipping on all orders.
            </p>
            <button className="amazon-btn-primary !py-3 !px-8 text-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1500px] mx-auto px-4 -mt-10 md:-mt-32 lg:-mt-60 relative z-20">
          {/* Categories Bar */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all shadow-sm ${
                  selectedCategory === cat 
                  ? "bg-amazon-dark text-white" 
                  : "bg-white text-amazon-dark hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {/* Feature Cards or Product Grid */}
             <AnimatePresence mode="popLayout">
               {filteredProducts.length > 0 ? (
                 filteredProducts.map(product => (
                   <ProductCard 
                     key={product.id} 
                     product={product} 
                     onAddToCart={handleAddToCart} 
                   />
                 ))
               ) : (
                 <div className="col-span-full py-20 text-center bg-white rounded-lg shadow-sm">
                   <p className="text-2xl font-bold text-gray-400">No products found for "{searchTerm}"</p>
                   <button 
                    onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
                    className="text-amazon-orange hover:underline mt-2"
                   >
                     Clear all filters
                   </button>
                 </div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amazon-blue text-white py-12">
        <div className="max-w-[1500px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Get to Know Us</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">About SwiftCart</li>
              <li className="hover:underline cursor-pointer">Investor Relations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Make Money with Us</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Sell on SwiftCart</li>
              <li className="hover:underline cursor-pointer">Sell on SwiftCart Business</li>
              <li className="hover:underline cursor-pointer">Become an Affiliate</li>
              <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Payment Products</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Amazon Rewards</li>
              <li className="hover:underline cursor-pointer">Shop with Points</li>
              <li className="hover:underline cursor-pointer">Reload Your Balance</li>
              <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Let Us Help You</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Your Account</li>
              <li className="hover:underline cursor-pointer">Your Orders</li>
              <li className="hover:underline cursor-pointer">Shipping Rates</li>
              <li className="hover:underline cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>© 2024-2026, SwiftCart, Inc. or its affiliates</p>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
