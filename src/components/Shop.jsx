import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Gift } from 'lucide-react';
import { products } from '../data/products';

export default function Shop() {
  const [filter, setFilter] = useState('ALL');
  const [showPromo, setShowPromo] = useState(false);
  const filtered = filter === 'ALL' ? products : products.filter(p => p.cat === filter);

  useEffect(() => { 
    window.scrollTo(0,0); 
    const timer = setTimeout(() => setShowPromo(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <section className="pt-36 px-5 md:px-12 pb-8 border-b border-kemon-ghost">
        <p className="text-[0.63rem] tracking-[0.28em] uppercase text-kemon-orange mb-2">// ALL PRODUCTS</p>
        <h1 className="font-bebas text-[clamp(2.4rem,5vw,4.2rem)] md:text-[6rem] leading-none tracking-wide text-kemon-cream animate-fup">THE <i className="font-playfair italic text-kemon-orange">Collection</i></h1>
        <div className="flex gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
          {['ALL', 'SPORTS', 'RUNNER', 'CREW', 'INVISIBLE', 'EVERYDAY'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`clickable shrink-0 px-6 py-2.5 rounded-full text-[0.74rem] tracking-[0.14em] uppercase transition-colors ${filter === f ? 'bg-kemon-cream text-kemon-bg font-medium' : 'border border-kemon-softer text-kemon-cream hover:border-kemon-orange hover:text-kemon-orange'}`}
            >
              {f === 'ALL' ? 'All Socks' : f}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-kemon-bg">
          {filtered.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className="group clickable relative overflow-hidden aspect-[3/4] bg-kemon-char block">
              <div className="absolute inset-0 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {p.badge && (
                <div className={`absolute top-3 left-3 text-[0.56rem] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full font-medium z-10 ${p.badge==='NEW'?'bg-kemon-orange text-kemon-bg':'bg-kemon-cream text-kemon-bg'}`}>{p.badge}</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-bebas text-2xl tracking-wider text-kemon-cream">{p.name}</h3>
                <p className="text-[0.62rem] tracking-[0.18em] uppercase text-kemon-cream/50 mt-1">{p.cat}</p>
                <p className="font-playfair italic text-kemon-orange text-base mt-2">
                  <span className="text-kemon-soft/50 line-through mr-2">₹{p.mrp}</span>₹{p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-20 text-kemon-soft">No products found in this category.</div>}
      </section>

      {/* The Silent Concierge Promo Popup */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 z-[500] bg-kemon-char/90 backdrop-blur-md border border-kemon-ghost p-5 shadow-2xl transition-all duration-700 w-[90vw] md:w-[340px] ${
          showPromo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setShowPromo(false)} 
          className="absolute top-4 right-4 text-kemon-soft hover:text-kemon-orange transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 bg-kemon-orange/10 rounded-full flex items-center justify-center text-kemon-orange mt-1">
            <Gift size={18} />
          </div>
          <div>
            <p className="text-[0.6rem] tracking-[0.2em] font-medium text-kemon-orange uppercase mb-1">The Vault is Open</p>
            <h4 className="font-bebas text-2xl tracking-widest text-kemon-cream mb-2">Build Your Bundle</h4>
            <p className="text-sm font-light text-kemon-soft leading-relaxed italic border-l border-kemon-orange/30 pl-3">
              Unlock complimentary pairs automatically. <br/>
              <span className="font-medium text-kemon-cream not-italic text-[0.7rem] uppercase tracking-widest mt-2 shadow-[0_4px_14px_0_rgba(244,97,26,0.1)] inline-block px-2 py-1 bg-kemon-char border border-kemon-ghost">Buy 2 Get 2 Free • Buy 3 Get 3 Free</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
