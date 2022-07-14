import React from 'react';

// Stylesheet
import './Home.css';

// Components
import Navigation from '../../components/Navigation/Navigation';
import Market from '../../components/Market/Market';
import TradeTypes from '../../components/TradeTypes/TradeTypes';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Platforms from '../../components/Platform/Platform';
import FormSection from '../../components/FormSection/FormSection';

function Home() {
  // Page Title
  document.title = "Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv";

  return (
    <>
        {/* Navigation */}
        <Navigation />

        {/* Hero */}
        <Hero />

        {/* Markets */}
        <Market />

        {/* Trade Types */}
        <TradeTypes />

        {/* Platforms */}
        <Platforms />

        {/* Testimonials */}
        <Testimonials />

        {/* Form Section */}
        <FormSection />

        {/* Footer */}
        <Footer />
    </>
  )
}

export default Home