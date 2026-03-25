import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CustomCursor />
        <div className="fixed top-0 left-0 right-0 h-[26px] bg-kemon-orange overflow-hidden flex items-center z-[600]">
          <div className="flex whitespace-nowrap animate-tick">
            <span className="px-10 text-[0.62rem] tracking-[0.35em] uppercase font-medium text-kemon-bg">COMPLIMENTARY SHIPPING OVER ₹499 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE BUNDLE EVENT: BUY 3 GET 3 FREE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ENGINEERED FOR EXCELLENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COMPLIMENTARY SHIPPING OVER ₹499 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE BUNDLE EVENT: BUY 3 GET 3 FREE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ENGINEERED FOR EXCELLENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <Navbar />
        <CartDrawer />
        <main className="mt-[26px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
