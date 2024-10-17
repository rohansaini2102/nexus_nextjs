// app/page.js
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatUsButton from './components/ChatUsButton';
// import { Analytics } from '@vercel/analytics/react';
import Pricing from './components/Pricing';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Header />
      {/* <Analytics /> */}
      <HeroSection />
      <Pricing />
      <Products />
      {/* <Testimonials /> */}
      <Footer />
      <ChatUsButton />
    </div>
  );
}
