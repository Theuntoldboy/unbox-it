import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Star, Zap, ShieldCheck, Wifi, Battery, Music } from "lucide-react";

const features = [
 {
 icon: <Zap className="w-6 h-6 text-primary" />,
 title: "Instant Animation",
 desc: "Experience seamless, real-time unboxing as you scroll. Every detail is animated for maximum delight.",
 },
 {
 icon: <Music className="w-6 h-6 text-primary" />,
 title: "True Wireless Sound",
 desc: "Our fake earbuds deliver crystal-clear audio with zero wires and maximum comfort.",
 },
 {
 icon: <Battery className="w-6 h-6 text-primary" />,
 title: "All-Day Battery",
 desc: "Enjoy up to24 hours of playtime with the sleek charging case.",
 },
 {
 icon: <Wifi className="w-6 h-6 text-primary" />,
 title: "Effortless Pairing",
 desc: "Connect instantly to any device with next-gen Bluetooth5.3.",
 },
 {
 icon: <ShieldCheck className="w-6 h-6 text-primary" />,
 title: "Water Resistant",
 desc: "IPX5-rated to handle sweat, rain, and your toughest workouts.",
 },
 {
 icon: <Star className="w-6 h-6 text-primary" />,
 title: "Award-Winning Design",
 desc: "Minimal, ergonomic, and built for comfort. Looks as good as it sounds.",
 },
];

export function Features() {
 return (
 <section id="features" className="bg-gradient-to-b from-[#f5f6fa] to-white py-16 md:py-24">
 <div className="max-w-5xl mx-auto px-4">
 <div className="text-center mb-12">
 <Badge className="bg-accent text-accent-foreground mb-2">Features</Badge>
 <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why You'll Love Unboxing</h2>
 <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">Every interaction is designed to surprise and delight. Discover what makes our (totally fake) earbuds so special.</p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
 {features.map((f, i) => (
 <div key={i} className="bg-white rounded-xl shadow-unbox p-6 flex flex-col items-center text-center transition-transform hover:scale-105 focus-within:scale-105">
 <div className="mb-3">{f.icon}</div>
 <h3 className="font-semibold text-lg text-gray-900 mb-1">{f.title}</h3>
 <p className="text-gray-600 text-sm">{f.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
