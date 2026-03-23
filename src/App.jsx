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
            <span className="px-10 text-[0.62rem] tracking-[0.22em] uppercase font-medium text-kemon-bg">FREE SHIPPING ON ORDERS ABOVE ₹499 ★ SPORTS · RUNNER · BAMBOO · CREW · INVISIBLE ★ ENGINEERED IN TIRUPUR — INDIA'S SOCK CAPITAL ★ FREE SHIPPING ON ORDERS ABOVE ₹499 ★ SPORTS · RUNNER · BAMBOO · CREW · INVISIBLE ★ ENGINEERED IN TIRUPUR — INDIA'S SOCK CAPITAL ★</span>
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
