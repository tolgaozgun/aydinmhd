import React from 'react';
import logoWhite from '../assets/logo.png';
import logoPink from '../assets/logo-pink.png';

export default function Logo({ className = "", style = {}, width = "300", variant = "white" }) {
  const imgSrc = variant === "pink" ? logoPink : logoWhite;

  return (
    <img 
      src={imgSrc} 
      alt="Aydın Meme Hastalıkları Derneği" 
      className={className} 
      style={{ ...style, width: width, height: 'auto', objectFit: 'contain' }} 
    />
  );
}
