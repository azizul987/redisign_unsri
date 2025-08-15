import TopBar from './assets/topbar';
import Header from './assets/Header';
import HeroSection from './assets/HeroSection';
import NewsSection from './assets/NewsSection';
import Footer from './assets/Footer';
import Infosesion from './assets/Infosesion';
import RecentVideos from './assets/RecentVideos';
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800">
      <TopBar />
      <Header />
      <HeroSection />
      <NewsSection />
      <Infosesion/>
      <RecentVideos/>
      <Footer />
    </div>
  );
}
