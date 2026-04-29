import React from 'react';
import { Search, ShoppingCart, MapPin, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartClick,
  searchTerm,
  onSearchChange
}) => {
  return (
    <header className="sticky top-0 z-50 bg-amazon-dark text-white shadow-md">
      <div className="max-w-[1500px] mx-auto px-4 py-2 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer transition-all">
          <span className="text-xl font-bold tracking-tighter flex items-center">
            swift<span className="text-amazon-orange font-black">cart.</span>
          </span>
        </div>

        {/* Deliver to */}
        <div className="hidden md:flex flex-col hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer">
          <span className="text-xs text-gray-400 pl-4 font-light">Deliver to</span>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="text-sm font-bold">India</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex items-center h-10 group">
          <div className="bg-gray-200 text-amazon-dark text-xs h-full flex items-center px-3 rounded-l-md cursor-pointer hover:bg-gray-300 border-r border-gray-300">
            All
          </div>
          <input
            type="text"
            placeholder="Search SwiftCart"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 h-full px-4 text-amazon-dark focus:outline-none focus:ring-2 focus:ring-amazon-orange"
          />
          <button className="bg-amazon-orange hover:bg-[#f3a847] h-full px-4 rounded-r-md text-amazon-dark flex items-center">
            <Search size={22} />
          </button>
        </div>

        {/* User Stats */}
        <div className="hidden lg:flex flex-col hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-bold">Account & Lists</span>
        </div>

        <div className="hidden lg:flex flex-col hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        {/* Cart */}
        <motion.div 
          whileTap={{ scale: 0.95 }}
          onClick={onCartClick}
          className="flex items-end hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer relative"
        >
          <div className="relative">
             <ShoppingCart size={32} />
             <span className="absolute -top-2 left-[18px] text-amazon-orange font-bold bg-amazon-dark px-1 rounded-full text-base">
               {cartCount}
             </span>
          </div>
          <span className="hidden sm:block text-sm font-bold mt-2">Cart</span>
        </motion.div>
      </div>

      {/* Sub Header */}
      <div className="bg-amazon-blue px-4 py-1 flex items-center gap-6 text-sm font-medium overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer">
          <Menu size={20} />
          <span>All</span>
        </div>
        <span className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer truncate">Today's Deals</span>
        <span className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer truncate">Customer Service</span>
        <span className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer truncate">Registry</span>
        <span className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer truncate">Gift Cards</span>
        <span className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 cursor-pointer truncate">Sell</span>
      </div>
    </header>
  );
};
