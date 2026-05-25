import React from 'react';

export default function Logo({ className = "", style = {}, color = "currentColor", width = "300" }) {
  return (
    <svg 
      className={className} 
      style={{ ...style, width: width, height: 'auto' }} 
      viewBox="0 0 450 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon Group */}
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="40" strokeWidth="6" />
        {/* Inner Profile Silhouette (Beautified curve) */}
        <path d="M 65 13 C 20 30, 15 55, 25 65 C 35 75, 45 80, 55 88" strokeWidth="5" />
      </g>
      
      {/* Text Group */}
      <g fill={color} fontFamily="Georgia, 'Times New Roman', serif" letterSpacing="0.05em">
        <text x="110" y="32" fontSize="20" fontWeight="500">AYDIN</text>
        <text x="110" y="62" fontSize="28" fontWeight="600">MEME HASTALIKLARI</text>
        <text x="110" y="90" fontSize="28" fontWeight="600">DERNEĞİ</text>
      </g>
    </svg>
  );
}
