// app/components/Products.jsx
'use client';

import React from 'react';
import Image from 'next/image';

// Placeholder Image URL (You can replace this with any placeholder image you prefer)
const placeholderImage =  '/images/background-image.jpg';

// Product Data with IDs and Updated Names
const products = [
  {
    id: 'grammarly-per-month',
    name: 'Grammarly - Per Month',
    price: '₹ 129 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg',
  },
  {
    id: 'chatgpt-per-month',
    name: 'ChatGPT - Per Month',
    price: '₹ 299 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg',
  },
  {
    id: 'freepik-per-month',
    name: 'Freepik - Per Month',
    price: '₹ 249 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg',
  },
  {
    id: 'drive-lifetime',
    name: 'Google Drive - Lifetime (On Personal Mail)',
    price: '₹ 499 INR',
    image: 'https://logowik.com/content/uploads/images/996_google_drive.jpg',
  },
  {
    id: 'ahref-per-month',
    name: 'Ahrefs - Per Month',
    price: '₹ 449 INR',
    image: 'https://logowik.com/content/uploads/images/996_google_drive.jpg',
  },
  {
    id: 'linkedin-6-months',
    name: 'LinkedIn - 6 Months (On Personal Mail)',
    price: '₹ 1399 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg',
  },
  {
    id: 'canva-yearly',
    name: 'Canva - Yearly (Personal Mail)',
    price: '₹ 199 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg',
  },
  {
    id: 'quillbot-per-month',
    name: 'QuillBot - Per Month',
    price: '₹ 129 INR',
    image: 'https://mma.prnewswire.com/media/2032096/QuillBot_logo_Logo.jpg?w=200',
  },
  {
    id: 'leonardo-per-month',
    name: 'Leonardo AI - Per Month',
    price: '₹ 499 INR',
    image: 'https://www.bworldonline.com/wp-content/uploads/2024/07/Leonardo-AI-logo.jpg',
  },
  {
    id: 'netflix-per-month',
    name: 'Netflix - Per Month',
    price: '₹ 89 INR',
    image: 'https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b?h=307',
  },
  {
    id: 'semrush-per-month',
    name: 'SEMrush - Per Month',
    price: '₹ 199 INR',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/304852598/CL/DY/FW/189067380/semrush-seo-marketing-500x500.png',
  },
  {
    id: 'perplexity-per-month',
    name: 'Perplexity AI - Per Month',
    price: '₹ 249 INR',
    image: 'https://b3718828.smushcdn.com/3718828/wp-content/uploads/2024/03/Perplexity-AI.Blog_-2.jpg?lossy=2&strip=1&webp=1',
  },
  {
    id: 'perplexity-yearly',
    name: 'Perplexity AI - One Year (On Personal Mail)',
    price: '₹ 2999 INR',
    image: 'https://b3718828.smushcdn.com/3718828/wp-content/uploads/2024/03/Perplexity-AI.Blog_-2.jpg?lossy=2&strip=1&webp=1',
  },
  {
    id: 'office-lifetime',
    name: 'Office 365 - Lifetime (On Personal Mail)',
    price: '₹ 599 INR',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RA/JO/AN/90848123/office-365-premium-software-500x500.png',
  },
  {
    id: 'turnitin-per-month',
    name: 'Turnitin - Per Month',
    price: '₹ 199 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Turnitin_logo_%282021%29.svg',
  },
  {
    id: 'nordvpn-per-month',
    name: 'NordVPN - Per Month',
    price: '₹ 199 INR',
    image: 'https://apps.whmcs.com/security/nordvpn/logo.png',
  },
  {
    id: 'coursera-per-month',
    name: 'Coursera - Per Month',
    price: '₹ 249 INR',
    image: 'https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13.fit_scale.size_1028x578.v1620226809.png',
  },
  {
    id: 'coursera-yearly',
    name: 'Coursera - One Year (On Personal Mail)',
    price: '₹ 999 INR',
    image: 'https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13.fit_scale.size_1028x578.v1620226809.png',
  },
  {
    id: 'envato-per-month',
    name: 'Envato - Per Month',
    price: '₹ 249 INR',
    image: 'https://cabinetm-beta.s3.amazonaws.com/00000160-f64e-981b-451d-6eb4eed4181e.png',
  },
  {
    id: 'figma-2-years',
    name: 'Figma - Two Years',
    price: '₹ 799 INR',
    image: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg',
  },
  {
    id: 'udemy-per-month',
    name: 'Udemy - Per Month',
    price: '₹ 249 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg',
  },
  {
    id: 'amazon-prime-per-month',
    name: 'Amazon Prime - Per Month',
    price: '₹ 89 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg',
  },
  {
    id: 'adobe-per-month',
    name: 'Adobe - Per Month (On Personal Mail)',
    price: '₹ 549 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',
  },
  {
    id: 'adobe-yearly',
    name: 'Adobe - One Year (On Personal Mail)',
    price: '₹ 3999 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',
  },
  {
    id: 'claude-per-month',
    name: 'Claude AI - Per Month',
    price: '₹ 299 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Claude_AI_logo.png',
  },
  {
    id: 'invideo-per-month',
    name: 'InVideo - Per Month',
    price: '₹ 249 INR',
    image: 'https://logowik.com/content/uploads/images/invideo12525.logowik.com.webp',
  },
  {
    id: 'capcut-per-month',
    name: 'CapCut - Per Month',
    price: '₹ 199 INR',
    image: 'https://logos-world.net/wp-content/uploads/2024/01/CapCut-Logo.png',
  },
  {
    id: 'adobe-stock-per-month',
    name: 'Adobe Stock - Per Month',
    price: '₹ 199 INR',
    image: 'https://www.seekpng.com/png/full/229-2292763_adobe-stock-adobe-stock-logo.png',
  },
  {
    id: 'shutterstock-per-month',
    name: 'Shutterstock - Per Month',
    price: '₹ 199 INR',
    image: 'https://cdn.freebiesupply.com/logos/large/2x/shutterstock-logo-png-transparent.png',
  },
  {
    id: 'storyblock-per-month',
    name: 'Storyblocks - Per Month',
    price: '₹ 199 INR',
    image: 'https://logowik.com/content/uploads/images/storyblocks116.logowik.com.webp',
  },
  {
    id: 'helium10-per-month',
    name: 'Helium10 - Per Month',
    price: '₹ 249 INR',
    image: 'https://marketplace.walmart.com/wp-content/uploads/2021/10/helium10-logo.png',
  },
  {
    id: 'youcom-per-month',
    name: 'You.com - Per Month',
    price: '₹ 149 INR',
    image: 'https://logowik.com/content/uploads/images/youcom-new-20242443.logowik.com.webp',
  },
  {
    id: 'skillshare-per-month',
    name: 'Skillshare - Per Month',
    price: '₹ 199 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Skillshare_logo_2020.svg',
  },
];

// Products Component
function Products() {
  return (
    <section id="products" className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Individual Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="flex items-center justify-center h-40 p-4 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-contain h-full w-full"
                onError={(e) => {
                  e.target.src = placeholderImage;
                }}
              />
            </div>
            
            {/* Price */}
            <div className="text-center text-lg font-medium text-red-600 mb-2">
              {product.price}
            </div>
            
            {/* Product Name */}
            <h3 className="text-xl font-semibold mb-4 text-center">
              {product.name}
            </h3>
            
            {/* Spacer to push the button to the bottom */}
            <div className="flex-grow"></div>
            
            {/* Buy Now Button */}
            <button 
              onClick={() => window.open(`https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product%20${encodeURIComponent(product.name)}`, "_blank", "noopener,noreferrer")}
              className="w-full bg-blue-800 text-white py-2 rounded-b-lg hover:bg-black transition-colors duration-300"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
