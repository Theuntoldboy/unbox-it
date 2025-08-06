import React from "react";
import { Github, Twitter, Star } from "lucide-react";

const socials = [
 {
 icon: <Github className="w-5 h-5" />,
 label: "GitHub",
 href: "https://github.com/",
 },
 {
 icon: <Twitter className="w-5 h-5" />,
 label: "Twitter",
 href: "https://twitter.com/",
 },
];

export function Footer() {
 return (
 <footer className="bg-box py-8 border-t border-gray-100">
 <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-2">
 <Star className="w-5 h-5 text-primary" />
 <span className="font-semibold text-gray-700">Unbox It</span>
 </div>
 <nav className="flex gap-6 items-center">
 <a href="#how" className="text-sm text-gray-600 hover:text-primary transition-colors">How It Works</a>
 <a href="#features" className="text-sm text-gray-600 hover:text-primary transition-colors">Features</a>
 <a href="#faq" className="text-sm text-gray-600 hover:text-primary transition-colors">FAQ</a>
 </nav>
 <div className="flex gap-4 items-center">
 {socials.map((s, i) => (
 <a
 key={i}
 href={s.href}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={s.label}
 className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded"
 >
 {s.icon}
 </a>
 ))}
 </div>
 </div>
 <div className="mt-6 text-center text-xs text-gray-400">
 &copy; {new Date().getFullYear()} Unbox It. All rights reserved.
 </div>
 </footer>
 );
}
