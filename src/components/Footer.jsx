import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 text-gray-400 text-center overflow-hidden bg-[#050505]">
      
     
      <div className="absolute w-64 h-64 bg-emerald-600/20 blur-[120px] rounded-full -top-20 left-1/4" />
      <div className="absolute w-64 h-64  bg-emerald-600/20 blur-[120px] rounded-full -top-20 right-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto">
        © {new Date().getFullYear()} Aditya Pratap
      </div>
    </footer>
  );
}
