import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-kemon-bg relative z-10 border-t border-kemon-ghost">
      {/* Main Footer Block */}
      <div className="px-5 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-20">
            {/* Logo and Intro */}
            <div className="max-w-sm">
                <Link to="/" className="clickable font-bebas text-4xl tracking-[0.08em] text-kemon-cream block mb-6">
                    K<b className="text-kemon-orange font-normal">E</b>MON
                </Link>
                <p className="text-[0.75rem] text-kemon-soft font-light leading-relaxed">
                    Premium performance socks engineered in Tirupur, India's hosiery capital. Built different. Worn better.
                </p>
            </div>
            
            {/* Links Columns */}
            <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-32 w-full md:w-auto">
                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.6rem] tracking-[0.2em] font-medium text-kemon-orange uppercase mb-3">Shop</h4>
                    {['Sports Socks', 'Runner Socks', 'Crew Collection', 'Bamboo Series', 'Invisible Socks'].map(link => (
                        <a href="#" key={link} className="clickable text-[0.8rem] tracking-wide text-kemon-soft hover:text-kemon-cream transition-colors">{link}</a>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.6rem] tracking-[0.2em] font-medium text-kemon-orange uppercase mb-3">Company</h4>
                    {['Our Story', 'Lookbook', 'Wholesale'].map(link => (
                        <a href="#" key={link} className="clickable text-[0.8rem] tracking-wide text-kemon-soft hover:text-kemon-cream transition-colors">{link}</a>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.6rem] tracking-[0.2em] font-medium text-kemon-orange uppercase mb-3">Help</h4>
                    {['Sizing Guide', 'Returns', 'Contact Us'].map(link => (
                        <a href="#" key={link} className="clickable text-[0.8rem] tracking-wide text-kemon-soft hover:text-kemon-cream transition-colors">{link}</a>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-kemon-ghost flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[0.65rem] text-kemon-soft">
                © 2024 Kemon Socks · Crafted in Tirupur · www.kemon.in
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[0.65rem] text-kemon-soft">
                <a href="#" className="clickable hover:text-kemon-cream transition-colors">Privacy Policy</a>
                <a href="#" className="clickable hover:text-kemon-cream transition-colors">Terms & Conditions</a>
                <a href="#" className="clickable hover:text-kemon-cream transition-colors">Returns Policy</a>
            </div>
            <div className="flex gap-4">
                {['IG', 'YT', 'TW'].map(social => (
                    <a href="#" key={social} className="clickable w-9 h-9 rounded-full border border-kemon-ghost flex items-center justify-center text-[0.55rem] text-kemon-soft hover:text-kemon-cream hover:border-kemon-orange transition-all duration-300">
                        {social}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
