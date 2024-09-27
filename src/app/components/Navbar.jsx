import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-darkGray shadow-custom">
      <div className="text-white text-3xl font-extrabold">Matereal</div>
      <div className="space-x-8 text-grayText font-medium">
        <a href="#about" className="hover:text-white transition">About Us</a>
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="mailto:manthanindane141@gmail.com" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
