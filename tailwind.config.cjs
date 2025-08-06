module.exports = {
 darkMode: 'class',
 content: [
 './index.html',
 './src/**/*.{js,jsx,ts,tsx}',
 ],
 theme: {
 extend: {
 fontFamily: {
 display: ['Inter', 'ui-sans-serif', 'system-ui'],
 body: ['Inter', 'ui-sans-serif', 'system-ui'],
 },
 colors: {
 primary: {
 DEFAULT: '#5D5FEF', // Vibrant blue-violet
 foreground: '#fff',
 },
 accent: {
 DEFAULT: '#FFB800', // Gold accent
 foreground: '#222',
 },
 box: {
 DEFAULT: '#F5F6FA', // Light box background
 dark: '#23243A',
 },
 product: {
 DEFAULT: '#22223B', // Product base color
 accent: '#5D5FEF',
 },
 confetti: {
 blue: '#5D5FEF',
 yellow: '#FFB800',
 pink: '#FF5EAE',
 green: '#00D084',
 }
 },
 boxShadow: {
 'unbox': '08px32px0 rgba(93,95,239,0.18)',
 },
 keyframes: {
 'lid-open': {
 '0%': { transform: 'rotateX(0deg)' },
 '100%': { transform: 'rotateX(-75deg)' },
 },
 'fly-in-left': {
 '0%': { opacity: '0', transform: 'translateX(-80px) scale(0.8)' },
 '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
 },
 'fly-in-right': {
 '0%': { opacity: '0', transform: 'translateX(80px) scale(0.8)' },
 '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
 },
 'fly-in-up': {
 '0%': { opacity: '0', transform: 'translateY(80px) scale(0.8)' },
 '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
 },
 'confetti-fall': {
 '0%': { opacity: '1', transform: 'translateY(-20px) scale(1)' },
 '100%': { opacity: '0', transform: 'translateY(120px) scale(0.8)' },
 },
 },
 animation: {
 'lid-open': 'lid-open1s cubic-bezier(0.4,0,0.2,1) forwards',
 'fly-in-left': 'fly-in-left0.8s cubic-bezier(0.4,0,0.2,1) forwards',
 'fly-in-right': 'fly-in-right0.8s cubic-bezier(0.4,0,0.2,1) forwards',
 'fly-in-up': 'fly-in-up0.8s cubic-bezier(0.4,0,0.2,1) forwards',
 'confetti-fall': 'confetti-fall1.2s linear forwards',
 },
 },
 },
 plugins: [require('tailwindcss-animate')],
};
