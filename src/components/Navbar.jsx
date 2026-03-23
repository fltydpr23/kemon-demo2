import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
    <nav className={`fixed top-[26px] left-0 right-0 z-[500] flex items-center justify-between px-5 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-kemon-bg/95 backdrop-blur-[20px] border-b border-kemon-orange/10' : ''}`}>
      <Link to="/" className="clickable font-bebas text-[1.6rem] md:text-[1.9rem] tracking-[0.08em] text-kemon-cream">
        K<b className="text-kemon-orange font-normal">E</b>MON
      </Link>
      <ul className="hidden md:flex gap-9 list-none items-center">
        <li className="clickable cursor-pointer text-[0.72rem] tracking-[0.18em] uppercase text-kemon-cream/50 hover:text-kemon-cream transition-colors" onClick={() => nav('/')}>Story</li>
        <li className="clickable cursor-pointer text-[0.72rem] tracking-[0.18em] uppercase text-kemon-cream/50 hover:text-kemon-cream transition-colors" onClick={() => nav('/')}>Lookbook</li>
        <li className="clickable cursor-pointer bg-kemon-orange text-kemon-bg px-5 py-2 rounded-full font-medium text-[0.72rem] tracking-[0.18em] uppercase hover:bg-kemon-cream transition-colors" onClick={() => nav('/shop')}>
          Shop Now
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <button onClick={() => setIsCartOpen(true)} className="clickable relative text-kemon-cream hover:text-kemon-orange transition">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-kemon-orange text-kemon-bg text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button className="md:hidden flex flex-col gap-[5px] w-[30px] h-[30px] items-center justify-center border border-transparent rounded-full bg-transparent" onClick={() => setMobileOpen(true)}>
          <span className="block w-[16px] h-[1.5px] bg-kemon-cream rounded-[2px]"></span>
          <span className="block w-[16px] h-[1.5px] bg-kemon-cream rounded-[2px]"></span>
          <span className="block w-[16px] h-[1.5px] bg-kemon-cream rounded-[2px]"></span>
        </button>
      </div>
    </nav>
    
    <div className={`fixed inset-0 bg-kemon-bg/98 z-[800] flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button className="absolute top-5 right-5 bg-transparent border border-kemon-cream/20 text-kemon-cream w-9 h-9 rounded-full text-sm" onClick={() => setMobileOpen(false)}>✕</button>
      <a className="font-bebas text-5xl tracking-wide text-kemon-cream cursor-pointer hover:text-kemon-orange transition-colors" onClick={() => nav('/')}>Story</a>
      <a className="font-bebas text-5xl tracking-wide text-kemon-cream cursor-pointer hover:text-kemon-orange transition-colors" onClick={() => nav('/')}>Lookbook</a>
      <a className="font-bebas text-5xl tracking-wide text-kemon-orange cursor-pointer hover:text-kemon-cream transition-colors" onClick={() => nav('/shop')}>Shop Now →</a>
    </div>
    </>
  );
}
