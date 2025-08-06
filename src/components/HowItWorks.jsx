import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { ArrowDown, ArrowLeft, ArrowRight, Check } from "lucide-react";

const steps = [
 {
 icon: <ArrowDown className="w-6 h-6 text-primary" />,
 title: "Scroll Down",
 desc: "Start scrolling to begin the unboxing animation.",
 },
 {
 icon: <ArrowLeft className="w-6 h-6 text-primary" />,
 title: "Watch the Magic",
 desc: "The box opens and earbuds fly in as you scroll. Try hovering over each part!",
 },
 {
 icon: <Check className="w-6 h-6 text-primary" />,
 title: "Celebrate",
 desc: "Press the button to launch confetti and highlight your favorite part.",
 },
];

export function HowItWorks() {
 return (
 <section id="how" className="py-16 md:py-24 bg-white">
 <div className="max-w-4xl mx-auto px-4">
 <div className="text-center mb-12">
 <Badge className="bg-primary text-white mb-2">How It Works</Badge>
 <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">Unboxing, Reimagined</h2>
 <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">Interact with every step. Our animation responds to your scroll, your hover, and your clicks.</p>
 </div>
 <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
 {steps.map((s, i) => (
 <div key={i} className="flex flex-col items-center text-center max-w-xs">
 <div className="mb-3">{s.icon}</div>
 <h3 className="font-semibold text-lg text-gray-900 mb-1">{s.title}</h3>
 <p className="text-gray-600 text-sm">{s.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
