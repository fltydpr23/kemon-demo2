import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from './CartContext';
import { ArrowLeft, Check, Plus, Minus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('M');
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0,0);
    const found = products.find(p => p.id === id);
    if (found) setProduct(found);
  }, [id]);

  if (!product) return <div className="pt-40 text-center min-h-screen text-kemon-cream">Loading...</div>;

  const handleAdd = () => {
    addToCart(product, qty, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-[80px] pb-24 md:pt-[120px] px-5 md:px-12 bg-kemon-bg text-kemon-cream">
      <button onClick={() => navigate(-1)} className="clickable flex items-center gap-2 text-[0.7rem] uppercase tracking-widest text-kemon-soft hover:text-kemon-orange transition mb-8">
        <ArrowLeft size={16} /> Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="relative aspect-[3/4] bg-kemon-char w-full overflow-hidden">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <div className={`absolute top-4 left-4 text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium ${product.badge === 'NEW' ? 'bg-kemon-orange text-kemon-bg' : 'bg-kemon-cream text-kemon-bg'}`}>
              {product.badge}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-kemon-orange mb-3">// {product.cat}</p>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wide leading-none">{product.name}</h1>
          <div className="flex items-center gap-3 mt-3">
            <p className="font-playfair italic text-kemon-soft/50 line-through text-lg">₹{product.mrp}</p>
            <p className="font-playfair italic text-kemon-orange text-2xl">₹{product.price}</p>
            <span className="bg-kemon-orange/10 text-kemon-orange border border-kemon-orange/20 text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-sm">Save ₹{product.mrp - product.price}</span>
          </div>
          
          <div className="h-[1px] w-full bg-kemon-ghost my-8"></div>
          
          <p className="text-[0.9rem] leading-relaxed text-kemon-cream/80 font-light mb-6">
            {product.description}
          </p>

          <div className="mb-6">
            <h3 className="text-[0.7rem] tracking-[0.15em] uppercase text-kemon-soft mb-2">Ideal For</h3>
            <p className="text-sm font-light italic text-kemon-cream/90 border-l border-kemon-orange pl-3">{product.useCase}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-[0.7rem] tracking-[0.15em] uppercase text-kemon-soft mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex flex-row items-center gap-3 text-[0.85rem] font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-kemon-orange/50"></div> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
             <div>
                <label className="block text-[0.65rem] tracking-[0.1em] uppercase text-kemon-soft mb-2">Size</label>
                <div className="flex gap-2">
                  {['S', 'M', 'L'].map(s => (
                    <button key={s} onClick={() => setSize(s)} className={`h-10 flex-1 border ${size === s ? 'border-kemon-orange text-kemon-orange' : 'border-kemon-softer text-kemon-cream'} transition-colors`}>{s}</button>
                  ))}
                </div>
             </div>
             <div>
                <label className="block text-[0.65rem] tracking-[0.1em] uppercase text-kemon-soft mb-2">Quantity</label>
                <div className="flex h-10 border border-kemon-softer items-center justify-between px-3">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-kemon-soft hover:text-kemon-cream"><Minus size={14}/></button>
                  <span className="text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="text-kemon-soft hover:text-kemon-cream"><Plus size={14}/></button>
                </div>
             </div>
          </div>

          <button 
            onClick={handleAdd}
            className={`w-full py-4 text-[0.75rem] tracking-[0.15em] uppercase font-medium transition-all flex items-center justify-center gap-2 ${added ? 'bg-green-600 text-white' : 'bg-kemon-cream text-kemon-bg hover:bg-kemon-orange'}`}
          >
            {added ? <><Check size={18} /> Added to Cart</> : 'Add to Cart — ₹' + (product.price * qty)}
          </button>
        </div>
      </div>
    </div>
  );
}
