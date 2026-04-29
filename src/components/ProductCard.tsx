import React from 'react';
import { Star, Truck } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? "fill-amazon-orange text-amazon-orange" : "text-gray-300"}
      />
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-4 flex flex-col h-full hover:shadow-lg transition-shadow border border-gray-100 group"
    >
      <div className="relative aspect-square mb-4 overflow-hidden bg-gray-50 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-sm line-clamp-2 hover:text-amazon-orange cursor-pointer mb-1">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-1">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs text-[#007185] hover:text-amazon-orange cursor-pointer">
            {product.reviewCount.toLocaleString()}
          </span>
        </div>

        <div className="flex items-start mb-2">
          <span className="text-xs mt-1">$</span>
          <span className="text-2xl font-bold">{Math.floor(product.price)}</span>
          <span className="text-xs mt-1">{(product.price % 1).toFixed(2).split('.')[1]}</span>
        </div>

        {product.isPrime && (
          <div className="flex items-center gap-1 mb-2">
            <span className="prime-text">prime</span>
            <span className="text-xs text-gray-500 font-medium">Get it {product.deliveryDate}</span>
          </div>
        ) || (
           <div className="flex items-center gap-1 mb-2">
             <Truck size={14} className="text-gray-400" />
             <span className="text-xs text-gray-500">Free Delivery by Friday</span>
           </div>
        )}
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className="amazon-btn-primary w-full text-sm mt-4 active:scale-95 transition-transform"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};
