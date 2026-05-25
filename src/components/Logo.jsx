import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = "", style = {}, width = "300" }) {
  return (
    <img 
      src={logoImg} 
      alt="Aydın Meme Hastalıkları Derneği" 
      className={className} 
      style={{ ...style, width: width, height: 'auto', objectFit: 'contain' }} 
    />
  );
}
