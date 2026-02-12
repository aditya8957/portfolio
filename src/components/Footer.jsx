import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 text-gray-400 text-center overflow-hidden bg-[#050505]">
      
      {/* Same gradient as Hero */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 animate-gradient" /> */}

      {/* Glow blobs */}
      <div className="absolute w-64 h-64 bg-purple-700/20 blur-[120px] rounded-full -top-20 left-1/4" />
      <div className="absolute w-64 h-64 bg-pink-600/20 blur-[120px] rounded-full -top-20 right-1/4" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        © {new Date().getFullYear()} Aditya Pratap
      </div>
    </footer>
  );
}
