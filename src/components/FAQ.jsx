import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion.jsx";
import { Badge } from "@/components/ui/Badge.jsx";

const faqs = [
 {
 q: "Is this a real product?",
 a: "Nope! This is a playful demo page. The earbuds, box, and animation are all for fun.",
 },
 {
 q: "Can I buy these earbuds?",
 a: "Sorry, they're not for sale. But you can enjoy the unboxing experience as much as you like!",
 },
 {
 q: "How does the animation work?",
 a: "The animation is powered by React, SVG, and Tailwind CSS. As you scroll, each part animates into place.",
 },
 {
 q: "Can I use this code for my own project?",
 a: "Absolutely! Feel free to fork, remix, and build your own interactive unboxing experiences.",
 },
];

export function FAQ() {
 return (
 <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f5f6fa]">
 <div className="max-w-3xl mx-auto px-4">
 <div className="text-center mb-10">
 <Badge className="bg-accent text-accent-foreground mb-2">FAQ</Badge>
 <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
 <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">Got questions? We have answers. If you want to know more, reach out on GitHub!</p>
 </div>
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((faq, i) => (
 <AccordionItem key={i} value={`faq-${i}`}>
 <AccordionTrigger>{faq.q}</AccordionTrigger>
 <AccordionContent>{faq.a}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>
 );
}
