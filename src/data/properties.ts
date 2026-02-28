export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'apartment' | 'house' | 'condo' | 'villa';
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    price: 450000,
    location: "Downtown, Metro City",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    featured: true,
    description: "Modern apartment in the heart of downtown with stunning city views.",
    amenities: ["Pool", "Gym", "Parking", "Concierge"]
  },
  {
    id: 2,
    title: "Spacious Family Home",
    price: 750000,
    location: "Suburban Heights",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "house",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    featured: true,
    description: "Beautiful family home with large backyard and modern amenities.",
    amenities: ["Garden", "Garage", "Fireplace", "Smart Home"]
  },
  {
    id: 3,
    title: "Modern Condo with View",
    price: 520000,
    location: "Waterfront District",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "condo",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    featured: false,
    description: "Contemporary condo with panoramic water views.",
    amenities: ["Pool", "Gym", "Balcony", "Security"]
  },
  {
    id: 4,
    title: "Elegant Villa",
    price: 1200000,
    location: "Hillside Estates",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    type: "villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    featured: true,
    description: "Luxurious villa with private pool and garden.",
    amenities: ["Pool", "Garden", "Garage", "Home Theater", "Wine Cellar"]
  },
  {
    id: 5,
    title: "Cozy Studio Apartment",
    price: 280000,
    location: "Arts District",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    featured: false,
    description: "Charming studio in the vibrant arts district.",
    amenities: ["Gym", "Rooftop", "Pet Friendly"]
  },
  {
    id: 6,
    title: "Beachfront Condo",
    price: 890000,
    location: "Coastal Paradise",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "condo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    featured: true,
    description: "Stunning beachfront property with direct beach access.",
    amenities: ["Beach Access", "Pool", "Gym", "Parking"]
  }
];

export const propertyTypes = ['apartment', 'house', 'condo', 'villa'] as const;
export type PropertyType = typeof propertyTypes[number];
