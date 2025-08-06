import React, { useEffect, useRef } from "react";

const CONFETTI_COLORS = [
 "#5D5FEF", // blue-violet
 "#FFB800", // gold
 "#FF5EAE", // pink
 "#00D084", // green
];

function randomBetween(a, b) {
 return Math.random() * (b - a) + a;
}

export function Confetti({ trigger, count =24, className = "", style = {} }) {
 const [show, setShow] = React.useState(false);
 const [confetti, setConfetti] = React.useState([]);
 const timeoutRef = useRef();

 useEffect(() => {
 if (trigger) {
 const arr = Array.from({ length: count }).map((_, i) => ({
 id: i,
 left: randomBetween(5,95),
 delay: randomBetween(0,0.3),
 rotate: randomBetween(-40,40),
 color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
 size: randomBetween(8,16),
 }));
 setConfetti(arr);
 setShow(true);
 timeoutRef.current = setTimeout(() => setShow(false),1400);
 }
 return () => clearTimeout(timeoutRef.current);
 }, [trigger, count]);

 if (!show) return null;

 return (
 <div className={"pointer-events-none absolute inset-0 z-50 overflow-visible " + className} style={style} aria-hidden>
 {confetti.map((c) => (
 <span
 key={c.id}
 className="absolute animate-confetti-fall"
 style={{
 left: `${c.left}%`,
 top:0,
 width: c.size,
 height: c.size *2,
 background: c.color,
 borderRadius:2,
 transform: `rotate(${c.rotate}deg)`,
 opacity:0.85,
 animationDelay: `${c.delay}s`,
 }}
 />
 ))}
 </div>
 );
}
