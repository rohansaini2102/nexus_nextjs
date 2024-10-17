// app/components/Pricing.jsx
'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Pricing Plans Data
const plans = [
  {
    name: 'Student Plan',
    price: '₹299',
    discount: '60% Off',
    features: [
      'Semrush',
      'Moz Pro',
      'Ubersuggest',
      'QuillBot',
      'Canva Pro',
      'Wordtune',
      'VistaCreate',
      'Nando.ai',
      'SEOptimer',
      'Grammarly',
      'Scribd',
      'PicMonkey',
    ],
    message: 'Hello, I am interested in the Student Plan.',
  },
  {
    name: 'Designer Plan', // Renamed from Blogging Plan
    price: '₹999',
    discount: 'Limited Time Offer',
    features: [
      'Semrush',
      'Moz Pro',
      'QuillBot',
      'Storyblocks',
      'Writesonic',
      'Canva Pro',
      'Ubersuggest',
      'Scite.ai',
      'PicMonkey',
      'Mangools (KWFinder)',
      'Prezi',
      'NeuronWriter',
      'AnswerThePublic',
      'VistaCreate',
      'Nando.ai',
      'Jasper.ai',
      'SEOptimer',
      'Design.ai',
      'Grammarly Premium',
      'Scribd',
      'InVideo.io',
      'Wordtune',
      'ClosersCopy',
      'Turnitin Student',
      'WordHero',
      'Word.ai',
    ],
    message: 'Hello, I am interested in the Designer Plan.',
    isFeatured: true, // Marking as featured plan
  },
  {
    name: 'Agency Plan',
    price: '₹1499',
    discount: 'Best Value',
    features: [
      'Semrush',
      'Moz Pro',
      'QuillBot',
      'Envato Elements',
      'Placeit',
      'Vecteezy',
      'Storyblocks',
      'Writesonic',
      'Ubersuggest',
      'Vyond',
      'Mangools',
      'VistaCreate',
      'Canva Pro',
      'Nando.ai',
      'Jasper.ai',
      'SEOptimer',
      'Design.ai',
      'Grammarly Premium',
      'Scribd',
      'InVideo.io',
      'Wordtune',
      'ClosersCopy',
      'Turnitin Student',
      'Viral Launch',
      'PicMonkey',
      'Prezi',
      'VidIQ Boost Plan',
      'WriterZen',
      'CapCut Pro',
      'AnswerThePublic',
      'You.com',
      'WordHero',
      'Word.ai',
      'NeuronWriter',
      'Coursera',
    ],
    message: 'Hello, I am interested in the Agency Plan.',
  },
];

// Pricing Component
function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          Pricing Plans
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                plan.isFeatured
                  ? 'border-4 border-blue-800'
                  : 'border border-glass'
              }`}
            >
              {/* Discount Badge as Circle */}
              {plan.discount && (
                <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                  <span className="text-sm font-bold text-center px-2">
                    {plan.discount}
                  </span>
                </div>
              )}

              {/* Special Offer Badge for Featured Plan */}
              {plan.isFeatured && (
                <div className="absolute top-4 left-4 bg-red-800 text-white px-4 py-1 rounded-md shadow-lg">
                  Special Offer
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
              </div>

              <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

              <div className="mb-6 flex-grow">
                <ul className="text-gray-700 columns-2 [column-fill:balance]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 break-inside-avoid flex items-center">
                      <FaCheck className="text-blue-800 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/8239555834?text=${encodeURIComponent(
                      plan.message
                    )}`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          {/* Featured Plan (Always Visible) */}
          {plans.slice(0, 1).map((plan, index) => (
            <div key={index} className="px-4 mb-8">
              <div
                className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                  plan.isFeatured
                    ? 'border-4 border-blue-800'
                    : 'border border-glass'
                }`}
              >
                {/* Discount Badge as Circle */}
                {plan.discount && (
                  <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                    <span className="text-sm font-bold text-center px-2">
                      {plan.discount}
                    </span>
                  </div>
                )}

                {/* Special Offer Badge for Featured Plan */}
                {plan.isFeatured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-md shadow-lg">
                    Special Offer
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
                </div>

                <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

                <div className="mb-6 flex-grow">
                  <ul className="text-gray-700 columns-2 [column-fill:balance]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 break-inside-avoid flex items-center">
                        <FaCheck className="text-blue-800 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/8239555834?text=${encodeURIComponent(
                        plan.message
                      )}`,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          {/* Swiper for Other Plans */}
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="mySwiper"
          >
            {plans.slice(1).map((plan, index) => (
              <SwiperSlide key={index} className="px-4">
                <div
                  className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                    plan.isFeatured
                      ? 'border-4 border-blue-800'
                      : 'border border-glass'
                  }`}
                >
                  {/* Discount Badge as Circle */}
                  {plan.discount && (
                    <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                      <span className="text-sm font-bold text-center px-2">
                        {plan.discount}
                      </span>
                    </div>
                  )}

                  {/* Special Offer Badge for Featured Plan */}
                  {plan.isFeatured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-md shadow-lg">
                      Special Offer
                    </div>
                  )}

                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
                  </div>

                  <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

                  <div className="mb-6 flex-grow">
                    <ul className="text-gray-700 columns-2 [column-fill:balance]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 break-inside-avoid flex items-center">
                          <FaCheck className="text-blue-800 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/8239555834?text=${encodeURIComponent(
                          plan.message
                        )}`,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
