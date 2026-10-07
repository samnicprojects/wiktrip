import React from 'react';
import { useApp } from '../context/AppContext';
import { formatINR } from '../utils/format';
import { SafeImage } from './SafeImage';
import { X, Trash2, ArrowRight, ShoppingBag, Plus, Minus, MessageSquare, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    clearCart,
    showToast
  } = useApp();

  if (!isCartOpen) return null;

  const handleEnquirySubmit = () => {
    const itemList = cartItems.map(i => `${i.product.name} (Qty: ${i.quantity})`).join(', ');
    const waText = encodeURIComponent(`Hi Wiktrip, I want to enquire about purchasing/renting gear: ${itemList}. Estimated value: ₹${formatINR(cartTotal)}. Please confirm availability & sizes!`);
    window.open(`https://wa.me/919876543210?text=${waText}`, '_blank');
    showToast('Gear enquiry created! Opening WhatsApp to connect with our gear specialist.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#161917] border-l border-white/10 h-full flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#242625]/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#556B2F]" />
            <h2 className="font-display text-lg font-bold">Wiktrip Gear Enquiry</h2>
            <span className="text-xs text-neutral-400">({cartItems.length} items)</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400">
              <ShoppingBag className="w-12 h-12 text-[#556B2F] mb-3 opacity-60" />
              <p className="text-base font-semibold text-white">Your gear enquiry list is empty</p>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Explore our expedition gear: 4-season tents, 55L packs, Vibram boots and high-altitude gear. Add items to request an official quote.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 p-3 bg-[#242625] rounded-xl border border-white/5"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <SafeImage
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#556B2F] font-semibold">{item.product.category}</div>
                  <h4 className="text-sm font-medium text-white truncate">{item.product.name}</h4>
                  <div className="text-xs font-bold text-neutral-300 mt-1">
                    ₹{formatINR(item.product.price)}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-neutral-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 bg-[#161917] px-2 py-1 rounded-md border border-white/10 text-xs">
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                      className="text-neutral-400 hover:text-white cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-semibold text-white w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                      className="text-neutral-400 hover:text-white cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#242625]/60 space-y-4">
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Estimated Gear Value</span>
                <span className="text-white font-medium">₹{formatINR(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Expedition Consultation</span>
                <span className="text-emerald-400 font-medium">FREE ON ENQUIRY</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                <span>Quotation Estimate</span>
                <span className="text-[#F97316]">₹{formatINR(cartTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleEnquirySubmit}
              className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl text-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit Gear Enquiry on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
