// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // Include the app directory
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        blue: {
          700: '#6989c4',
          800: '#1D4E89',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
      backdropFilter: {
        'blur': 'blur(10px)', // Custom blur value
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.2)', // Semi-transparent background for frosted glass
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Shadow for depth
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)', // Border color for frosted effect
      },
      opacity: {
        '90': '0.9', // Custom opacity value for frosted glass effect
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this plugin for backdrop-filter utility
  ],
};
