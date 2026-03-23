import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if(e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    const timer = setTimeout(() => {
      document.querySelectorAll('.rv, .rl, .rr').forEach(el => io.observe(el));
    }, 100);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, []);
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

      {/* Moving Carousel: Collections */}
      <div className="border-b border-kemon-ghost overflow-hidden flex py-5 select-none relative bg-kemon-bg">
        <div className="animate-tick flex items-center shrink-0 w-max" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
          {[...Array(5)].flatMap(() => ['BAMBOO CREW', 'INVISIBLE SOCKS', 'CREW COLLECTIONS', 'COMPRESSION WEAR', 'SPORTS SOCKS', 'RUNNER SOCKS']).map((text, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-bebas text-xl md:text-2xl tracking-[0.15em] text-kemon-soft/70 px-8">{text}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-kemon-orange"></div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 md:py-32 overflow-hidden border-b border-kemon-ghost">
        <h2 className="font-bebas text-4xl md:text-6xl tracking-wide rv px-5 md:px-12 mb-12">THE LOOKBOOK</h2>
        <div className="flex gap-4 px-5 md:px-12 overflow-x-auto pb-8 no-scrollbar rv">
            {['LOOKBOOK+1','LOOKBOOK+2','LOOKBOOK+3','LOOKBOOK+4','LOOKBOOK+5'].map((t,i) => (
              <img key={i} src={`https://placehold.co/400x500/141414/F4611A?text=${t}`} className={`w-64 h-80 object-cover shrink-0 rounded-sm ${i%2!==0?'mt-8':''}`} alt="Lookbook" />
            ))}
        </div>
      </section>

      {/* Moving Carousel: Features */}
      <div className="border-y border-kemon-ghost overflow-hidden flex py-5 select-none relative bg-kemon-bg">
        <div className="animate-tick flex items-center shrink-0 w-max" style={{ animationDuration: '85s' }}>
          {[...Array(5)].flatMap(() => ['ANTI-BACTERIAL', 'HYPOALLERGENIC', 'SMART KNITTING', 'CUSHIONED HEEL', 'ANKLE GRIP', 'SEAMLESS TOE', 'STRIDE IN STYLE']).map((text, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-bebas text-xl md:text-2xl tracking-[0.15em] text-kemon-soft/70 px-8">{text}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-kemon-orange"></div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 md:py-32 px-5 md:px-12 bg-kemon-bg">
        <p className="text-[0.63rem] tracking-[0.2em] uppercase text-kemon-orange mb-3 rv">// 05 — REAL PEOPLE, REAL MILES.</p>
        <h2 className="font-bebas text-[clamp(4rem,10vw,7rem)] tracking-wide rv mb-16 uppercase leading-none">WORN <span className="font-playfair italic text-kemon-orange normal-case tracking-normal">& Proven</span></h2>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 rv gap-6">
            <div>
                <h3 className="font-bebas text-5xl text-kemon-cream tracking-wide">4.7 <span className="text-kemon-orange text-2xl tracking-widest align-middle ml-2">★★★★★</span></h3>
                <p className="text-[0.6rem] uppercase tracking-widest text-kemon-soft mt-1">FROM 150+ VERIFIED BUYERS</p>
            </div>
            <div className="w-12 h-12 border border-kemon-orange/30 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-kemon-orange rounded-full"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv hover:border-kemon-orange/50 transition-colors flex flex-col justify-between group">
                <div className="absolute top-6 right-6 bg-kemon-orange text-kemon-bg text-[0.55rem] font-bold px-3 py-1 rounded-full tracking-widest uppercase">ULTRA MARATHON</div>
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"Ran a 60km ultra in these. Zero blisters, zero shifting. Nothing comes close to the cushioning. These are the real deal."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">RK</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Rahul K.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">ULTRA MARATHONER · CHENNAI</p>
                    </div>
                </div>
            </div>

            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv hover:border-kemon-orange/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"6 years of half-marathons. Kemon's runner socks are the first pair that actually grips where it needs to without cutting circulation."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">PS</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Priya S.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">HALF MARATHON RUNNER · BANGALORE</p>
                    </div>
                </div>
            </div>

            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv hover:border-kemon-orange/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"My husband came home and said he forgot he was wearing socks. That's the highest compliment I can give any product."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">AM</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Ananya M.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">VERIFIED BUYER · MUMBAI</p>
                    </div>
                </div>
            </div>

            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv hover:border-kemon-orange/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"Full 90 minutes of football plus warmup. My legs felt noticeably fresher at the end. The compression is perfectly dialled in."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">VT</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Vikram T.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">FOOTBALLER · COIMBATORE</p>
                    </div>
                </div>
            </div>

            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv relative hover:border-kemon-orange/50 transition-colors flex flex-col justify-between group">
                <div className="absolute top-6 right-6 bg-kemon-orange text-kemon-bg text-[0.55rem] font-bold px-3 py-1 rounded-full tracking-widest uppercase">FULL MARATHON</div>
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"42.2km. Not a single hot spot. The seamless toe made all the difference in the last 10km. Ordering three more pairs today."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">SK</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Santhosh K.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">MARATHON RUNNER · CHENNAI</p>
                    </div>
                </div>
            </div>

            <div className="bg-kemon-char/30 p-8 border border-kemon-ghost rv hover:border-kemon-orange/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="text-kemon-orange text-sm mb-6 tracking-widest">★★★★★</div>
                  <p className="text-kemon-cream/90 font-playfair italic leading-relaxed mb-10 text-[1.05rem]">"As a fitness coach I only recommend gear I personally trust. Best silicon grip I've tested. Proud to back a homegrown brand."</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-kemon-orange text-kemon-bg flex items-center justify-center font-bold text-xs pt-1">DN</div>
                    <div>
                        <p className="text-[0.8rem] font-medium text-kemon-cream">Divya N.</p>
                        <p className="text-[0.55rem] uppercase tracking-widest text-kemon-orange mt-0.5">FITNESS COACH · HYDERABAD</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 md:py-36 px-5 md:px-12 bg-kemon-bg flex justify-center">
        <div className="w-full max-w-[1400px] bg-[#F4611A] rounded-sm p-12 md:p-20 relative overflow-hidden rv flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="absolute -right-10 top-1/2 -translate-y-1/2 font-bebas text-[15rem] leading-none text-black/[0.04] select-none pointer-events-none tracking-tighter hidden md:block">KEMON</h2>
            
            <div className="relative z-10 flex flex-col items-start text-black">
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-black/70 mb-6 font-medium">// LIMITED DROPS · FREE SHIPPING ABOVE ₹499</p>
                <h2 className="font-bebas text-6xl md:text-8xl tracking-wide uppercase leading-[0.9] mb-6">
                    YOUR FEET<br/>DESERVE THIS
                </h2>
                <p className="text-black/80 text-sm md:text-base font-light tracking-wide mb-10 md:mb-0">
                    Step into premium. Orders above ₹499 ship free across India.
                </p>
            </div>
            
            <div className="relative z-10">
                <button onClick={() => navigate('/shop')} className="clickable bg-kemon-bg text-kemon-cream px-10 py-5 rounded-full text-[0.7rem] tracking-[0.2em] font-medium uppercase hover:bg-black transition-colors whitespace-nowrap">
                    SHOP KEMON.IN →
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
