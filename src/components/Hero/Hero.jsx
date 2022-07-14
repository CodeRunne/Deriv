import React from 'react';
import { useNavigate } from 'react-router-dom';

// Stylesheet
import './Hero.css';

import CustomButton from '../CustomButton/CustomButton';
import HeroPlatformImage from '../../assets/static/images/hero_platform1.png';

function Hero() {
    const navigate = useNavigate();

  return (
    <section className="hero">
        {/* Hero Wrapper */}
        <div className="hero__image"></div>

        {/* Hero Wrapper */}
        <div className="hero__wrapper">
            {/* Hero Contents */}
            <div className="hero__content">
                {/* Hero Content Heading */}
                <div className="hero__content__box-1" height="unset" direction="column">
                    <h2 type="main-landing-title heading-2" color="white">Simple.</h2>
                    <h2 type="main-landing-title heading-2" color="white">Flexible.</h2>
                    <h2 type="main-landing-title heading-2" color="white">Reliable.</h2>
                </div>

                <h2 className="hero__content__title typography" color="white">
                    Trade forex, synthetics, stocks & indices, cryptocurrencies, basket indices, and commodities.
                </h2>

                <div className="hero__text__slider">
                    <h3 className="typography hero__text__title">Tight Spreads</h3>
                </div>

                <CustomButton handleClick={() => navigate('/oauth-signup')} btn_bg>Create a free demo account</CustomButton>
            </div>

            {/* Hero Slideshow */}
            <div className="hero__slideshow">
                <div className="hero__slideshow__image">
                    <img src={HeroPlatformImage} alt="" role="presentation" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;