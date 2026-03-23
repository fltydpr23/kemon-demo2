import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Shop() {
  const [filter, setFilter] = useState('ALL');
  const filtered = filter === 'ALL' ? products : products.filter(p => p.cat === filter);

  useEffect(() => { window.scrollTo(0,0); }, []);

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
                <p className="font-playfair italic text-kemon-orange text-base mt-2">₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-20 text-kemon-soft">No products found in this category.</div>}
      </section>
    </div>
  );
}
