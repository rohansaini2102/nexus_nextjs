// app/components/HeroSection.jsx
'use client';

import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-blue-700 text-white h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: 'url(/path/to/your/background-image.jpg)', // Replace with your image path
        }}
      ></div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in">
          Nexus Tools
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Empowering professionals with cutting-edge tools to streamline your workflow and boost productivity.
        </p>
        {/* Scroll to Products Section */}
        <a href="#products">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-200 transition duration-300">
            Get Started
          </button>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-36 h-56 bg-blue-200 rounded-l-full opacity-20 -mb-18 translate-x-1 animate-pulse"></div>
    </section>
  );
}

export default HeroSection;
