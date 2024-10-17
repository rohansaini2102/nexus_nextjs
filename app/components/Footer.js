// components/Footer.jsx
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nexus Tools</h3>
            <p className="text-gray-300">
              Providing excellent services and products to our valued customers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#products" className="hover:underline text-gray-300">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#testimonials" className="hover:underline text-gray-300">
                  Testimonials
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Email:{" "}
              <a href="mailto:nexustoolsbox@gmail.com" className="hover:underline">
                nexustoolsbox@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              Phone:{" "}
              <a href="tel:+918239555834" className="hover:underline">
                +91 82395 55834
              </a>
            </p>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.636h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nexustoolbox/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608C4.527 2.5 5.794 2.225 7.16 2.163 8.426 2.105 8.806 2.093 12 2.093zm0-2.163C8.741 0 8.332.014 7.052.072 5.78.13 4.668.393 3.75 1.312 2.832 2.23 2.569 3.342 2.511 4.614 2.453 5.894 2.438 6.303 2.438 12c0 5.697.015 6.106.073 7.386.058 1.272.321 2.384 1.23 3.292.909.909 2.021 1.172 3.292 1.23 1.28.058 1.689.073 7.386.073s6.106-.015 7.386-.073c1.272-.058 2.384-.321 3.292-1.23.909-.909 1.172-2.021 1.23-3.292.058-1.28.073-1.689.073-7.386s-.015-6.106-.073-7.386c-.058-1.272-.321-2.384-1.23-3.292C19.768.393 18.656.13 17.384.072 16.104.014 15.695 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.024-3.066-1.872-3.066-1.872 0-2.158 1.459-2.158 2.964v5.706h-3v-10h2.884v1.366h.041c.402-.764 1.385-1.566 2.848-1.566 3.042 0 3.603 2.0 3.603 4.604v5.602z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Nexus Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
