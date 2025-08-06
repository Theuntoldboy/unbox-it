import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button.jsx";
import { Confetti } from "@/components/Confetti.jsx";
import { Star, ArrowDown } from "lucide-react";

// Earbuds product illustration (SVG)
function EarbudsSVG({ lidOpen, leftIn, rightIn, caseIn, highlightPart, onPartHover, ...props }) {
 // highlightPart: 'left', 'right', 'case', null
 return (
 <svg
 viewBox="00320220"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className="w-full max-w-[320px] h-auto"
 aria-label="Earbuds product illustration"
 {...props}
 >
 {/* Case base */}
 <g
 className={cn(
 "transition-all duration-700",
 caseIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
 )}
 >
 <rect
 x="60"
 y="120"
 width="200"
 height="70"
 rx="36"
 fill="#F5F6FA"
 stroke="#22223B"
 strokeWidth="3"
 className={cn(
 "transition-all",
 highlightPart === "case" && "stroke-primary stroke-[5] shadow-lg"
 )}
 onMouseEnter={() => onPartHover && onPartHover("case")}
 onMouseLeave={() => onPartHover && onPartHover(null)}
 />
 </g>
 {/* Lid */}
 <g
 style={{
 transformOrigin: "160px120px",
 transform: lidOpen
 ? "rotateX(-75deg) translateY(-30px)"
 : "rotateX(0deg) translateY(0)",
 transition: "transform1s cubic-bezier(0.4,0,0.2,1)",
 }}
 >
 <rect
 x="60"
 y="70"
 width="200"
 height="50"
 rx="28"
 fill="#E0E2F1"
 stroke="#22223B"
 strokeWidth="3"
 />
 </g>
 {/* Left earbud */}
 <g
 className={cn(
 "transition-all duration-700",
 leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
 )}
 >
 <ellipse
 cx="110"
 cy="155"
 rx="18"
 ry="24"
 fill="#5D5FEF"
 stroke="#22223B"
 strokeWidth="2"
 className={cn(
 "cursor-pointer transition-all",
 highlightPart === "left" && "stroke-accent stroke-[4] shadow-lg"
 )}
 onMouseEnter={() => onPartHover && onPartHover("left")}
 onMouseLeave={() => onPartHover && onPartHover(null)}
 />
 <circle cx="110" cy="155" r="7" fill="#fff" />
 </g>
 {/* Right earbud */}
 <g
 className={cn(
 "transition-all duration-700",
 rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
 )}
 >
 <ellipse
 cx="210"
 cy="155"
 rx="18"
 ry="24"
 fill="#5D5FEF"
 stroke="#22223B"
 strokeWidth="2"
 className={cn(
 "cursor-pointer transition-all",
 highlightPart === "right" && "stroke-accent stroke-[4] shadow-lg"
 )}
 onMouseEnter={() => onPartHover && onPartHover("right")}
 onMouseLeave={() => onPartHover && onPartHover(null)}
 />
 <circle cx="210" cy="155" r="7" fill="#fff" />
 </g>
 </svg>
 );
}

export function ProductUnboxer() {
 const [scrollY, setScrollY] = useState(0);
 const [lidOpen, setLidOpen] = useState(false);
 const [leftIn, setLeftIn] = useState(false);
 const [rightIn, setRightIn] = useState(false);
 const [caseIn, setCaseIn] = useState(false);
 const [highlightPart, setHighlightPart] = useState(null);
 const [confettiTrigger, setConfettiTrigger] = useState(false);
 const containerRef = useRef();

 // Animate on scroll
 useEffect(() => {
 function handleScroll() {
 if (!containerRef.current) return;
 const rect = containerRef.current.getBoundingClientRect();
 const windowH = window.innerHeight;
 const visible = Math.max(0, Math.min(rect.bottom, windowH) - Math.max(rect.top,0));
 const percent = Math.max(0, Math.min(1, visible / rect.height));
 setScrollY(percent);
 }
 window.addEventListener("scroll", handleScroll, { passive: true });
 handleScroll();
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Stepwise animation
 useEffect(() => {
 setCaseIn(scrollY >0.05);
 setLidOpen(scrollY >0.18);
 setLeftIn(scrollY >0.32);
 setRightIn(scrollY >0.45);
 }, [scrollY]);

 // Confetti on button
 function handleButtonClick() {
 setConfettiTrigger(false);
 setTimeout(() => setConfettiTrigger(true),10);
 }

 return (
 <section
 ref={containerRef}
 className="relative flex flex-col items-center justify-center min-h-[600px] py-16 md:py-24"
 aria-label="Product Unboxing Animation"
 >
 <div className="relative z-10 flex flex-col items-center">
 <div className="mb-6">
 <EarbudsSVG
 lidOpen={lidOpen}
 leftIn={leftIn}
 rightIn={rightIn}
 caseIn={caseIn}
 highlightPart={highlightPart}
 onPartHover={setHighlightPart}
 />
 </div>
 <div className="flex flex-col items-center gap-2">
 <Button
 size="lg"
 className="relative px-8 py-3 text-lg font-semibold shadow-lg bg-accent text-accent-foreground hover:scale-105 transition-transform"
 onClick={handleButtonClick}
 aria-label="Celebrate Unboxing"
 >
 <Star className="w-5 h-5 mr-2 text-primary inline" />
 Celebrate Unboxing
 </Button>
 <Confetti trigger={confettiTrigger} />
 </div>
 <div className="mt-6 flex flex-wrap gap-4 justify-center">
 <div className="flex items-center gap-2">
 <span className="w-4 h-4 rounded-full bg-primary inline-block border border-primary/60" />
 <span className="text-xs text-muted-foreground">Earbud</span>
 </div>
 <div className="flex items-center gap-2">
 <span className="w-4 h-4 rounded-full bg-box inline-block border border-box-dark/60" />
 <span className="text-xs text-muted-foreground">Charging Case</span>
 </div>
 </div>
 </div>
 {/* Scroll hint */}
 <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center opacity-80 animate-bounce">
 <ArrowDown className="w-6 h-6 text-primary" />
 <span className="text-xs text-primary font-medium mt-1">Scroll to Unbox</span>
 </div>
 </section>
 );
}
