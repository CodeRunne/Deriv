import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './Market.css';

// Images
import Forex from '../../assets/static/images/market_forex_2.webp';
import Forex1 from '../../assets/static/images/market_forex.webp';
import Forex2 from '../../assets/static/images/market_forex_2.png';
import Forex3 from '../../assets/static/images/market_forex_3.png';

function Market() {
  return (
    <section className='market'>
        <h1 className='heading-1'>Markets</h1>

        {/* Markets Collection */}
        <div className="market__collection">
          <div className="market__collection__item">
            <div className="carousel">
              <div className="carousel__slider">
                {/* Carousel Item*/}
                  <div className="carousel__item">
                    <div className="market__item__wrapper">
                      <Link to="/">
                        <h2 color="white" type="subtitle-1" mb="8px" className="text">Forex</h2>

                        <div className="market__item__wrapper__item">
                          <p color="white" type="paragraph-1" className='text'>Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.</p>
                          <div className="market__item__wrapper__item__image">
                            <picture>
                              <source type="image/webp" srcSet={`${Forex} 360w, ${Forex1} 440w`} sizes="(min-width: 440px) 440px, 100vw" />
                              <img width="440" height="456" sizes="(min-width: 440px) 440px, 100vw" src={`${Forex2}`} srcSet={`${Forex2} 360w,${Forex3} 440w`} alt="Market Forex" style={{
                                    objectFit: 'cover', 
                                    opacity: '1' 
                                  }} 
                                />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="markets__collection__item">
            Card 2
          </div>

          <div className="markets__collection__item">
            Card 3
          </div>

          <div className="markets__collection__item">
            Card 4
          </div>

          <div className="markets__collection__item">
            Card 5
          </div>
        </div>
      </section>
  )
}

export default Market;