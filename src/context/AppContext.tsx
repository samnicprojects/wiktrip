import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageView, StoreProduct, CartItem, BookingDetails } from '../types';
import { STORE_PRODUCTS_DATA } from '../data/mockData';

interface AppContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  // Detail views
  activeDetailItem: any | null;
  detailType: string | null;
  openDetail: (type: string, item: any) => void;
  closeDetail: () => void;
  // Global search
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  // Booking modal
  isBookingOpen: boolean;
  bookingItem: {
    type: 'hotel' | 'tour' | 'trek' | 'event' | 'adventure' | 'rental';
    id: string;
    title: string;
    location: string;
    price: number;
    image?: string;
  } | null;
  openBooking: (item: {
    type: 'hotel' | 'tour' | 'trek' | 'event' | 'adventure' | 'rental';
    id: string;
    title: string;
    location: string;
    price: number;
    image?: string;
  }) => void;
  closeBooking: () => void;
  // Cart
  cartItems: CartItem[];
  addToCart: (product: StoreProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartTotal: number;
  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  // Account
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  userBookings: BookingDetails[];
  addUserBooking: (booking: BookingDetails) => void;
  // Notification toast
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeDetailItem, setActiveDetailItem] = useState<any | null>(null);
  const [detailType, setDetailType] = useState<string | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState<{
    type: 'hotel' | 'tour' | 'trek' | 'event' | 'adventure' | 'rental';
    id: string;
    title: string;
    location: string;
    price: number;
    image?: string;
  } | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: STORE_PRODUCTS_DATA[0],
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlistIds, setWishlistIds] = useState<string[]>(['hotel-1', 'trek-1']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [userBookings, setUserBookings] = useState<BookingDetails[]>([
    {
      id: 'enq-sample-1',
      type: 'trek',
      title: 'Hampta Pass & Chandratal Crossover',
      location: 'Manali to Spiti Valley',
      pricePerUnit: 10499,
      date: '2026-11-10',
      guests: 2,
      customerName: 'Aarav Sharma',
      customerEmail: 'aarav.sharma@example.com',
      customerPhone: '+91 98765 43210',
      preferredContactMethod: 'WhatsApp',
      budgetPreference: 'Comfort / Standard',
      customNotes: 'Interested in vegetarian hot meals and private tent on Day 3 if possible.',
      addOns: [{ name: 'Backpack Offloading', price: 1500 }],
      basePrice: 20998,
      addOnTotal: 1500,
      taxes: 1125,
      discount: 1000,
      totalAmount: 22623,
      paymentMethod: 'Custom Quote Requested',
      bookingRef: 'WT-ENQ-8942',
      status: 'Enquiry Received',
      createdAt: '2026-10-01'
    }
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const openDetail = (type: string, item: any) => {
    setDetailType(type);
    setActiveDetailItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setActiveDetailItem(null);
    setDetailType(null);
  };

  const openBooking = (item: {
    type: 'hotel' | 'tour' | 'trek' | 'event' | 'adventure' | 'rental';
    id: string;
    title: string;
    location: string;
    price: number;
    image?: string;
  }) => {
    setBookingItem(item);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const addToCart = (product: StoreProduct, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const toggleWishlist = (id: string) => {
    setWishlistIds(prev => {
      if (prev.includes(id)) {
        showToast('Removed from saved wishlist');
        return prev.filter(item => item !== id);
      } else {
        showToast('Saved to wishlist');
        return [...prev, id];
      }
    });
  };

  const isWishlisted = (id: string) => wishlistIds.includes(id);

  const addUserBooking = (booking: BookingDetails) => {
    setUserBookings(prev => [booking, ...prev]);
    showToast(`Enquiry ${booking.bookingRef} submitted! Our team will contact you.`);
  };

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeDetail();
  }, [currentPage]);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        activeDetailItem,
        detailType,
        openDetail,
        closeDetail,
        isSearchOpen,
        setIsSearchOpen,
        isBookingOpen,
        bookingItem,
        openBooking,
        closeBooking,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotal,
        wishlistIds,
        toggleWishlist,
        isWishlisted,
        isWishlistOpen,
        setIsWishlistOpen,
        isAccountOpen,
        setIsAccountOpen,
        userBookings,
        addUserBooking,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
