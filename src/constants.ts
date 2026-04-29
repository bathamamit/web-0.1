import { Product } from './types';

export const CATEGORIES = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Books",
  "Toys"
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Quantum Sound X-200 Wireless Headphones",
    description: "Active Noise Cancelling, 40h Battery Life, Premium Comfort.",
    price: 199.99,
    rating: 4.8,
    reviewCount: 1240,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    isPrime: true,
    deliveryDate: "Tomorrow"
  },
  {
    id: "2",
    name: "Classic Minimalist Watch",
    description: "Stainless steel case, genuine leather strap, water resistant.",
    price: 89.00,
    rating: 4.5,
    reviewCount: 856,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Fashion",
    isPrime: true,
    deliveryDate: "Wednesday"
  },
  {
    id: "3",
    name: "Smart Home Brewing Kit",
    description: "Bluetooth connected, precise temperature control, professional results.",
    price: 249.50,
    rating: 4.2,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&q=80",
    category: "Home",
    isPrime: false,
    deliveryDate: "Friday"
  },
  {
    id: "4",
    name: "Organic Glow Skin Serum",
    description: "Vitamin C + Hyaluronic Acid for radiant skin.",
    price: 34.99,
    rating: 4.9,
    reviewCount: 2100,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    category: "Beauty",
    isPrime: true,
    deliveryDate: "Tomorrow"
  },
  {
    id: "5",
    name: "Ergonomic Mesh Office Chair",
    description: "High back support, adjustable armrests, breathable mesh.",
    price: 159.00,
    rating: 4.6,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1505797149-43b00766a1d1?w=800&q=80",
    category: "Home",
    isPrime: true,
    deliveryDate: "Next Day"
  },
  {
    id: "6",
    name: "Retro Mechanical Keyboard",
    description: "Clicky blue switches, RGB backlit, vintage aesthetics.",
    price: 120.00,
    rating: 4.7,
    reviewCount: 520,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    category: "Electronics",
    isPrime: true,
    deliveryDate: "Friday"
  }
];
