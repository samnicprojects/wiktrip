export type PageView =
  | 'home'
  | 'hotels'
  | 'tours'
  | 'events'
  | 'adventure'
  | 'trekking'
  | 'store'
  | 'learning'
  | 'rentals'
  | 'gallery'
  | 'blogs'
  | 'partners'
  | 'career'
  | 'testimonials'
  | 'about'
  | 'contact';

export interface Hotel {
  id: string;
  name: string;
  location: string;
  state: string;
  type: 'Luxury Resort' | 'Mountain Chalet' | 'Eco Stay' | 'Boutique Villa' | 'Heritage Lodge';
  pricePerNight: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
  rooms: {
    name: string;
    bed: string;
    maxGuests: number;
    price: number;
    features: string[];
  }[];
  policies: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  durationDays: number;
  category: 'Holiday' | 'Honeymoon' | 'Pilgrimage' | 'Adventure' | 'Corporate' | 'Educational' | 'Ecotourism' | 'Family' | 'Couple' | 'Solo' | 'Group' | 'Weekend' | 'Luxury' | string;
  collection?: 'Popular Holiday Tours' | 'Weekend Escapes' | 'Adventure Trips' | 'Family Holidays' | 'Couple Trips' | 'Group Trips' | 'Luxury Experiences' | 'Budget Experiences' | string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  groupSize: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Music & Festivals' | 'Adventure Events' | 'Festivals' | 'Community Events' | 'Previous Events' | 'Music & Nightlife' | 'Adventure Festival' | 'Community Gathering' | 'Cultural Fiesta' | 'Previous Event' | string;
  isPast?: boolean;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  lineup: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  campingOptions?: {
    type: 'Dome Tent' | 'Premium Tent' | string;
    description: string;
    capacity: string;
    amenities: string[];
  }[];
  facilities?: string[];
  availablePasses: number;
  venueDetails: string;
}

export interface AdventureActivity {
  id: string;
  name: string;
  location: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Extreme';
  price: number;
  ageRequirement: string;
  image: string;
  gallery: string[];
  description: string;
  safetyInfo: string[];
  requirements: string[];
  equipmentProvided: string[];
}

export interface TrekCamp {
  id: string;
  title: string;
  type: 'Trek' | 'Camping' | 'Expedition' | 'Hiking' | 'Mountain Climbing' | 'High-Altitude Adventure';
  location: string;
  state: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  altitude: string;
  bestSeason: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  overview: string;
  quickFacts: {
    label: string;
    value: string;
  }[];
  itinerary: {
    day: number;
    title: string;
    altitude?: string;
    distance?: string;
    description: string;
  }[];
  equipment: string[];
  inclusions: string[];
  exclusions: string[];
  safetyProtocol: string[];
}

export interface StoreProduct {
  id: string;
  name: string;
  category: 'Tents' | 'Sleeping Equipment' | 'Camping Lighting' | 'Outdoor Gear' | 'Travel Accessories' | 'Wiktrip Merchandise' | 'Backpacks' | 'Tents & Shelter' | 'Footwear' | 'Apparel' | 'Hydration & Cooking' | 'Safety & Tech' | string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  specs: { [key: string]: string };
  inStock: boolean;
  featured?: boolean;
  isBestSeller?: boolean;
}

export interface LearningCourse {
  id: string;
  title: string;
  category: 'Travel Planning' | 'Trekking & Hiking' | 'Camping & Mountains' | 'Adventure Safety' | 'Guiding & Client Management' | 'Outdoor Skills' | 'Ecotourism & Responsible Travel' | 'Trekking Guides' | 'Wilderness Safety' | 'Outdoor Skills' | 'Photography' | 'High Altitude Health' | string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modulesCount: number;
  instructor: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  image: string;
  description: string;
  whatYouWillLearn: string[];
  modules: {
    title: string;
    duration: string;
    topics: string[];
  }[];
  price: number; // 0 for free
}

export interface VehicleRental {
  id: string;
  name: string;
  type: 'SUV' | 'Sedan' | '4x4 Off-Roader' | 'Minivan / Traveller' | 'Adventure Bike';
  seats: number;
  luggage: number;
  hasAC: boolean;
  fuelType: 'Diesel' | 'Petrol' | 'Electric';
  pricePerDay: number;
  pricePerKm?: number;
  rentalType: 'Chauffeur Driven' | 'Self Drive' | 'Outstation' | 'Airport Transfer';
  image: string;
  features: string[];
  included: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Destinations' | 'Hotels' | 'Trekking' | 'Camping' | 'Events' | 'Adventure' | 'Culture';
  location: string;
  image: string;
  photographer?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Travel Guides' | 'Adventure' | 'Destinations' | 'Trekking' | 'Safety' | 'Stories';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tripName: string;
  tripType: string;
  review: string;
  date: string;
  verified: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Operations' | 'Outdoor Leadership' | 'Engineering' | 'Marketing & Growth' | 'Safety & Compliance';
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'Seasonal';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CartItem {
  product: StoreProduct;
  quantity: number;
  selectedVariant?: string;
}

export interface BookingDetails {
  id: string;
  type: 'hotel' | 'tour' | 'trek' | 'event' | 'adventure' | 'rental';
  title: string;
  location: string;
  pricePerUnit: number;
  date: string;
  endDate?: string;
  guests: number;
  selectedOption?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  preferredContactMethod?: 'WhatsApp' | 'Phone Call' | 'Email';
  budgetPreference?: string;
  customNotes?: string;
  addOns: {
    name: string;
    price: number;
  }[];
  basePrice: number;
  addOnTotal: number;
  taxes: number;
  discount: number;
  totalAmount: number;
  paymentMethod: string;
  bookingRef: string;
  status: 'Enquiry Received' | 'Quote Shared' | 'Executive Assigned' | 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface SetupSpec {
  id: string;
  name: string;
  category: string;
  categoryKey: string;
  tagline?: string;
  description: string;
  tags: ('Indoor' | 'Outdoor' | 'Kids' | 'Extreme' | 'Family')[];
  indicativeBudget: string;
  spaceRequired: string;
  installationTime: string;
  image: string;
  popular?: boolean;
  keyComponents?: string;
  siteNote?: string;
  highlightSpecs?: { [key: string]: string };
}
