export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isPrime?: boolean;
  deliveryDate?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
