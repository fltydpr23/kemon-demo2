import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [step]);

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 text-kemon-cream">
        <h2 className="font-bebas text-4xl mb-4">Your bag is empty</h2>
        <button onClick={() => navigate('/shop')} className="text-kemon-orange hover:text-kemon-cream uppercase tracking-widest text-xs">Return to Shop</button>
      </div>
    );
  }

  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 2500);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen pt-32 px-5 md:px-12 flex flex-col items-center text-center bg-kemon-bg text-kemon-cream">
        <div className="w-20 h-20 bg-green-900/40 rounded-full flex items-center justify-center mb-8 border border-green-500/30 text-green-500">
          <CheckCircle size={40} />
        </div>
        <p className="text-[0.63rem] tracking-[0.3em] uppercase text-kemon-orange mb-3">// SECURE CHECKOUT</p>
        <h1 className="font-bebas text-6xl tracking-widest mb-4">Order Confirmed</h1>
        <p className="text-kemon-soft max-w-sm mb-12">Your order has been placed and is being processed. You will receive an email confirmation shortly.</p>
        <button onClick={() => navigate('/')} className="px-8 py-3 border border-kemon-orange text-kemon-orange uppercase tracking-widest text-xs hover:bg-kemon-orange hover:text-kemon-bg transition">Return Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[100px] md:pt-[130px] px-5 md:px-12 bg-kemon-bg text-kemon-cream pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
        
        {/* Left Col - Form */}
        <div className="lg:col-span-7">
          <button onClick={() => step === 2 ? setStep(1) : navigate('/shop')} className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-kemon-soft hover:text-kemon-orange transition mb-8">
            <ArrowLeft size={14} /> Back
          </button>
          
          <h1 className="font-bebas text-5xl tracking-widest mb-10">{step === 1 ? 'Shipping Info' : 'Payment'}</h1>
          
          {step === 1 ? (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">First Name</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm" />
                </div>
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Email Address</label>
                <input required type="email" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm" />
              </div>
              <div>
                <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Shipping Address</label>
                <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm placeholder:text-kemon-soft" placeholder="123 Main St" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">City</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm" />
                </div>
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Postal Code</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 text-sm" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 mt-8 bg-kemon-cream text-kemon-bg uppercase tracking-[0.2em] font-medium text-[0.7rem] hover:bg-kemon-orange transition">Continue to Payment</button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handlePay}>
              <div className="p-4 border border-kemon-orange/30 bg-kemon-orange/5 rounded-sm flex items-start gap-4 mb-8">
                <Lock className="text-kemon-orange mt-1" size={18} />
                <div>
                  <h4 className="text-sm font-medium text-kemon-orange mb-1">Secure Payment</h4>
                  <p className="text-xs text-kemon-soft leading-relaxed">All transactions are secure and encrypted. Kemon Socks never stores your credit card information.</p>
                </div>
              </div>

              <div>
                <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Card Number</label>
                <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 font-mono text-sm placeholder-kemon-soft/50" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">Expiry Date</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 font-mono text-sm placeholder-kemon-soft/50" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-[0.6rem] uppercase tracking-widest text-kemon-soft mb-2">CVC</label>
                  <input required type="text" className="w-full bg-kemon-char border border-kemon-ghost focus:border-kemon-orange outline-none p-3 font-mono text-sm placeholder-kemon-soft/50" placeholder="123" />
                </div>
              </div>

              <button disabled={loading} type="submit" className={`w-full py-4 mt-8 bg-kemon-orange text-kemon-bg uppercase tracking-[0.2em] font-medium text-[0.7rem] transition flex items-center justify-center ${loading ? 'opacity-70' : 'hover:bg-kemon-cream'}`}>
                {loading ? 'Processing...' : `Pay ₹${cartTotal}`}
              </button>
            </form>
          )}
        </div>

        {/* Right Col - Order Summary */}
        <div className="lg:col-span-5 bg-kemon-char p-8 border border-kemon-ghost self-start sticky top-32">
          <h3 className="font-bebas text-2xl tracking-widest mb-6">Order Summary</h3>
          <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scroll">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="relative w-16 h-20 bg-kemon-bg flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <span className="absolute -top-2 -right-2 bg-kemon-orange text-kemon-bg w-5 h-5 rounded-full flex items-center justify-center text-[0.5rem] font-bold">{item.quantity}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bebas text-lg tracking-wider text-kemon-cream">{item.name}</h4>
                  <p className="text-[0.55rem] uppercase tracking-widest text-kemon-soft">Size: {item.size}</p>
                </div>
                <div className="text-right">
                  <p className="font-playfair italic text-kemon-soft/50 line-through text-[0.6rem]">₹{item.mrp * item.quantity}</p>
                  <p className="font-playfair italic text-kemon-orange text-sm">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-kemon-ghost pt-6 space-y-3">
            <div className="flex justify-between text-sm text-kemon-soft">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between text-sm text-kemon-soft">
              <span>Shipping</span>
              <span>{cartTotal > 499 ? 'Free' : '₹50'}</span>
            </div>
            <div className="flex justify-between items-center text-kemon-cream pt-3 border-t border-kemon-ghost">
              <span className="text-xs uppercase tracking-widest">Total</span>
              <span className="font-playfair italic text-2xl text-kemon-orange">₹{cartTotal > 499 ? cartTotal : cartTotal + 50}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
