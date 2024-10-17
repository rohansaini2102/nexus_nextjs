// app/components/Header.jsx
'use client';

import React from 'react';

function Header() {
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Nexus Tools</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
