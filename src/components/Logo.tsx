import React from 'react';
import Images from "../images/logo-zifa.png"
export default function Logo() {
  return (
    <a href="/" className="block" aria-label="Cruip">
      <img
        src={Images} // Replace with your actual image path
        alt="Your Logo"
        width={64} // Set the width you want
        height={64} // Set the height you want
      />
    </a>
  );
}
