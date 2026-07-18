export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'printing' | 'stationery' | 'other';
  iconName: string; // Used to dynamically map Lucide icons
  image?: string; // Real image representing the service
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  category: 'shop' | 'xerox_machines' | 'printing' | 'stationery' | 'products';
  image: string;
  title: string;
  description: string;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  serviceRequired: string;
  message: string;
}
