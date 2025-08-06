import React from "react";
import { Button } from "@/components/ui/Button.jsx";
import { Menu, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
 const [open, setOpen] = React.useState(false);
 return (
 <header className="w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm sticky top-0 z-40">
 <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
 <div className="flex items-center gap-2">
 <Package className="w-7 h-7 text-primary" aria-hidden />
 <span className="font-display text-xl font-bold tracking-tight text-primary">Unbox It</span>
 </div>
 <div className="hidden md:flex items-center gap-6">
 <a href="#how" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded px-2 py-1">How It Works</a>
 <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded px-2 py-1">Features</a>
 <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded px-2 py-1">FAQ</a>
 <Button size="sm" className="ml-2 bg-primary text-white hover:bg-primary/90 shadow" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
 Try Unboxing
 </Button>
 </div>
 <button
 className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
 aria-label="Open menu"
 onClick={() => setOpen((v) => !v)}
 >
 <Menu className="w-6 h-6 text-primary" />
 </button>
 </nav>
 {/* Mobile menu */}
 <div
 className={cn(
 "md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-gray-100",
 open ? "max-h-52 py-2" : "max-h-0 py-0"
 )}
 aria-hidden={!open}
 >
 <div className="flex flex-col gap-2 px-4">
 <a href="#how" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded">How It Works</a>
 <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded">Features</a>
 <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded">FAQ</a>
 <Button size="sm" className="mt-2 bg-primary text-white hover:bg-primary/90 shadow" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
 Try Unboxing
 </Button>
 </div>
 </div>
 </header>
 );
}
