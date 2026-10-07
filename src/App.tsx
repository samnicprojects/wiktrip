import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { UserAccountModal } from './components/UserAccountModal';
import { DetailModal } from './components/DetailModal';
import { FloatingEnquiryBar } from './components/FloatingEnquiryBar';

// Views
import { HomeView } from './views/HomeView';
import { HotelsView } from './views/HotelsView';
import { ToursView } from './views/ToursView';
import { EventsView } from './views/EventsView';
import { AdventureSetupView } from './views/AdventureSetupView';
import { PermanentAdventureView } from './views/PermanentAdventureView';
import { TrekkingCampingView } from './views/TrekkingCampingView';
import { StoreView } from './views/StoreView';
import { LearningView } from './views/LearningView';
import { RentalsView } from './views/RentalsView';
import { GalleryView } from './views/GalleryView';
import { BlogsView } from './views/BlogsView';
import { PartnersView } from './views/PartnersView';
import { CareerView } from './views/CareerView';
import { TestimonialsView } from './views/TestimonialsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

const MainContent: React.FC = () => {
  const { currentPage, toastMessage } = useApp();

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'hotels':
        return <HotelsView />;
      case 'tours':
        return <ToursView />;
      case 'events':
        return <EventsView />;
      case 'adventure':
        return <AdventureSetupView />;
      case 'trekking':
        return <TrekkingCampingView />;
      case 'store':
        return <StoreView />;
      case 'learning':
        return <LearningView />;
      case 'rentals':
        return <RentalsView />;
      case 'gallery':
        return <GalleryView />;
      case 'blogs':
        return <BlogsView />;
      case 'partners':
        return <PartnersView />;
      case 'career':
        return <CareerView />;
      case 'testimonials':
        return <TestimonialsView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9F6] selection:bg-[#556B2F] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B0D0C] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/15 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar />

      {/* Dynamic View */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlays & Modals */}
      <GlobalSearchModal />
      <BookingModal />
      <CartDrawer />
      <WishlistDrawer />
      <UserAccountModal />
      <DetailModal />
      <FloatingEnquiryBar />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
