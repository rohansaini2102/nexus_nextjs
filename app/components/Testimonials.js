// components/Testimonials.jsx
"use client"; // Ensures the component is rendered on the client side

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

function Testimonials() {
  // Array of testimonial images
  const images = [
    '/images/screenshotnexus1.jpg',
    '/images/screenshotnexus4.jpg',
    '/images/screenshotnexus5.jpg',
    '/images/screenshotnexus6.jpg',
    '/images/screenshotnexus7.jpg',
    '/images/screenshotnexus8.jpg',
    '/images/screenshotnexus9.jpg',
    '/images/screenshotnexus10.jpg',
    '/images/screenshotnexus11.jpg',
    '/images/screenshotnexus12.jpg',
  ];

  // Array of testimonials (if you plan to use them later)
  const testimonials = [
    {
      quote: "Nexus Tools has transformed the way I work!",
      author: "Ram Sharma",
    },
    {
      quote: "An indispensable platform for my business.",
      author: "Amit Pal",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-white">
      {/* Blurred White Background */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-lg"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false} // Maintains multiple slides view
          slidesPerView="auto"
          spaceBetween={20} // Space between slides
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-48 sm:w-56 md:w-64 lg:w-72 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                loading="lazy" // Enables lazy loading
                className="w-full h-auto object-cover"
                alt={`Client testimonial ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Testimonials Text Section */}
        {/* Uncomment the following block if you wish to display textual testimonials alongside images */}
        {/*
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <p className="text-lg italic text-gray-800 mb-4">"{testimonial.quote}"</p>
              <p className="text-right font-semibold text-gray-900">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}

export default Testimonials;
