import React from 'react';
import { useCart } from './CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[900]" onClick={() => setIsCartOpen(false)}></div>
      <div className="fixed top-0 right-0 bottom-0 w-full md:w-[420px] bg-kemon-bg border-l border-kemon-ghost z-[1000] flex flex-col shadow-2xl animate-in fade-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-kemon-ghost">
          <h2 className="font-bebas text-3xl tracking-widest text-kemon-cream flex items-center gap-3">
            <ShoppingBag /> Bag
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-kemon-soft hover:text-kemon-orange transition"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-kemon-soft">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <p className="text-sm tracking-widest uppercase">Your bag is empty.</p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${item.size}-${idx}`} className="flex gap-4 group">
                <div className="w-20 h-24 bg-kemon-char flex-shrink-0 relative overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bebas text-xl tracking-wider text-kemon-cream leading-none">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id, item.size)} className="text-kemon-soft hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><X size={16}/></button>
                    </div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-kemon-soft mt-1">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-kemon-char px-2 py-1 h-8 rounded-sm text-kemon-cream">
                      <button onClick={() => updateQuantity(item.id, item.size, -1)} className="hover:text-kemon-orange"><Minus size={14}/></button>
                      <span className="text-xs w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, 1)} className="hover:text-kemon-orange"><Plus size={14}/></button>
                    </div>
                    <div className="text-right">
                      <p className="font-playfair italic text-kemon-soft/50 line-through text-[0.7rem]">₹{item.mrp * item.quantity}</p>
                      <p className="font-playfair italic text-kemon-orange">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-kemon-ghost bg-kemon-char/30">
            <div className="flex justify-between items-center mb-6 text-kemon-cream">
              <span className="text-[0.7rem] uppercase tracking-widest">Subtotal</span>
              <span className="font-playfair italic text-xl">₹{cartTotal}</span>
            </div>
            <button 
              onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}
              className="w-full bg-kemon-orange text-kemon-bg py-4 uppercase tracking-[0.2em] text-[0.7rem] font-bold hover:bg-kemon-cream transition-colors text-center block"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
