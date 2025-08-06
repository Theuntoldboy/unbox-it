import React from "react";
import { Navbar } from "@/components/Navbar.jsx";
import { ProductUnboxer } from "@/components/ProductUnboxer.jsx";
import { Features } from "@/components/Features.jsx";
import { HowItWorks } from "@/components/HowItWorks.jsx";
import { FAQ } from "@/components/FAQ.jsx";
import { Footer } from "@/components/Footer.jsx";

export default function App() {
 return (
 <div className="font-body bg-white min-h-screen flex flex-col">
 <Navbar />
 <main className="flex-1">
 {/* Hero Section */}
 <section className="relative bg-gradient-to-b from-primary/5 to-white pt-16 md:pt-24 pb-8 md:pb-16">
 <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
 <div className="flex-1 text-center md:text-left">
 <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
 Experience the Joy of <span className="text-primary">Unboxing</span>
 </h1>
 <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
 Scroll down to reveal our (totally fake) wireless earbuds. Every part animates into place—just like a real unboxing, but better.
 </p>
 <a href="#unbox" className="inline-block">
 <span className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80">
 Start Unboxing
 </span>
 </a>
 </div>
 <div className="flex-1 flex justify-center md:justify-end">
 <img
 src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
 alt="Modern wireless earbuds in a case"
 className="rounded-2xl shadow-unbox w-72 h-72 object-cover border-4 border-white"
 loading="eager"
 />
 </div>
 </div>
 </section>
 {/* Unboxing Animation Section */}
 <div id="unbox">
 <ProductUnboxer />
 </div>
 <HowItWorks />
 <Features />
 <FAQ />
 </main>
 <Footer />
 </div>
 );
}
