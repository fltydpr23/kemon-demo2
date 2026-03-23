import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if(e.isIntersecting) e.target.classList.add('on');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.rv').forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

export default function Home() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="min-h-screen pt-36 px-5 md:px-12 pb-16 flex flex-col justify-center relative overflow-hidden">
        <div className="h-bg"></div>
        <div className="h-grid"></div>
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-kemon-orange mb-6 animate-fup" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            // Est. 2024 · Karuvampalayam, Tirupur
          </p>
          <h1 className="font-bebas text-[clamp(4.8rem,15vw,13rem)] leading-[0.87] tracking-tight">
            <span className="block overflow-hidden"><span className="block animate-lup opacity-0" style={{animationDelay:'0.3s', animationFillMode:'forwards'}}>STEP</span></span>
            <span className="block overflow-hidden"><span className="block animate-lup opacity-0 text-kemon-orange" style={{animationDelay:'0.5s', animationFillMode:'forwards'}}>DIFFERENTLY</span></span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mt-11 animate-fup opacity-0" style={{animationDelay: '1s', animationFillMode:'forwards'}}>
            <p className="max-w-[300px] text-[0.86rem] md:text-[0.9rem] leading-relaxed text-kemon-soft font-light">
              We built Kemon for people who notice the details. Who feel the difference. Who refuse to let the last layer be an afterthought.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="clickable bg-kemon-orange text-kemon-bg px-8 py-4 rounded-full font-medium text-[0.74rem] tracking-[0.14em] uppercase hover:bg-kemon-cream transition-transform hover:-translate-y-0.5" onClick={() => navigate('/shop')}>
                Explore Collection
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute right-14 bottom-24 w-28 h-28 border border-kemon-orange/30 rounded-full items-center justify-center animate-fin opacity-0" style={{animationDelay: '1.8s', animationFillMode:'forwards'}}>
          <span className="text-[0.52rem] tracking-[0.18em] uppercase text-kemon-orange text-center leading-loose animate-spin-slow">MARATHON<br/>TESTED<br/>★<br/>APPROVED</span>
        </div>
      </section>

      <div className="grid grid-cols-2 md:flex md:justify-around py-9 md:px-12 border-y border-kemon-ghost">
        {[{ n: '5+', l: 'Collections' }, { n: '42K+', l: 'Kms Run' }, { n: '100%', l: 'Comfort Tested' }, { n: '∞', l: 'Good Strides' }].map((s, i) => (
          <div key={i} className="text-center p-5 md:p-0 border-r md:border-r-0 border-b md:border-b-0 border-kemon-ghost last:border-0 rv" style={{ transitionDelay: `${i*0.1}s`}}>
            <div className="font-bebas text-4xl md:text-5xl text-kemon-orange">{s.n}</div>
            <div className="text-[0.63rem] tracking-[0.2em] uppercase text-kemon-cream/30 mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <section className="py-20 md:py-32 px-5 md:px-12">
        <h2 className="font-bebas text-4xl md:text-6xl tracking-wide rv mb-12">LATEST ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-kemon-bg">
          {products.slice(0, 4).map((p) => (
            <div onClick={() => navigate(`/product/${p.id}`)} key={p.id} className="group clickable relative overflow-hidden aspect-[3/4] bg-kemon-char block rv">
              <div className="absolute inset-0 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-bebas text-2xl tracking-wider text-kemon-cream">{p.name}</h3>
                <p className="font-playfair italic text-kemon-orange text-base mt-2">₹{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 rv">
            <button onClick={() => navigate('/shop')} className="clickable bg-transparent border border-kemon-soft text-kemon-cream px-8 py-4 rounded-full text-[0.74rem] tracking-[0.13em] uppercase hover:bg-kemon-cream hover:text-kemon-bg transition-colors">View Full Collection</button>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-kemon-char border-y border-kemon-ghost text-center px-5">
        <div className="max-w-3xl mx-auto">
            <p className="text-[0.63rem] tracking-[0.2em] uppercase text-kemon-orange mb-6 rv">// OUR STORY</p>
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wide leading-tight mb-8 rv">WE ARE NOT JUST ANOTHER SOCK COMPANY. WE ARE ARCHITECTS OF COMFORT.</h2>
            <p className="text-kemon-soft font-light leading-relaxed mb-10 rv">Born in Tirupur, India's textile capital, Kemon Socks was founded on a simple premise: your feet deserve better. Every thread, every seam, and every fiber is engineered with purpose. From our moisture-wicking sports tech to our invisible loaf liners, we craft premium experiences from the ground up.</p>
        </div>
      </section>

      <section className="py-20 md:py-32 overflow-hidden border-b border-kemon-ghost">
        <h2 className="font-bebas text-4xl md:text-6xl tracking-wide rv px-5 md:px-12 mb-12">THE LOOKBOOK</h2>
        <div className="flex gap-4 px-5 md:px-12 overflow-x-auto pb-8 no-scrollbar rv">
            {['LOOKBOOK+1','LOOKBOOK+2','LOOKBOOK+3','LOOKBOOK+4','LOOKBOOK+5'].map((t,i) => (
              <img key={i} src={`https://placehold.co/400x500/141414/F4611A?text=${t}`} className={`w-64 h-80 object-cover shrink-0 rounded-sm ${i%2!==0?'mt-8':''}`} alt="Lookbook" />
            ))}
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-12 bg-kemon-char">
        <h2 className="font-bebas text-4xl md:text-6xl tracking-wide rv mb-4 text-center">THE PEOPLE HAVE SPOKEN</h2>
        <p className="text-[0.63rem] tracking-[0.2em] uppercase text-kemon-orange mb-12 rv text-center">OVER 10,000+ HAPPY SOLES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-kemon-bg p-8 border border-kemon-ghost rv">
                    <div className="flex gap-1 mb-4 text-kemon-orange text-lg">★★★★★</div>
                    <p className="text-kemon-soft font-light italic leading-relaxed mb-6">"Absolutely unbelievable comfort. I've tried every premium brand out there, but Kemon genuinely feels distinctly better. The stealth invisible socks actually stay on my heel all day."</p>
                    <p className="text-[0.65rem] uppercase tracking-widest text-kemon-cream/60">— Verified Buyer {i}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="py-24 md:py-36 px-5 md:px-12 text-center">
        <h2 className="text-center font-bebas text-5xl md:text-7xl tracking-wide rv">READY TO FEEL <i className="font-playfair italic text-kemon-orange">THE DIFFERENCE?</i></h2>
        <button onClick={() => navigate('/shop')} className="clickable mt-8 bg-kemon-bg border border-kemon-soft text-kemon-cream px-8 py-4 rounded-full text-[0.74rem] tracking-[0.13em] uppercase hover:bg-kemon-char hover:border-kemon-orange transition-all rv">Explore The Shop</button>
      </section>
    </div>
  );
}
