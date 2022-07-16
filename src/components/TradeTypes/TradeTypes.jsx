import React from 'react';

// Stylesheet
import './TradeTypes.css';

// Components
import InfoCard from '../InfoCard/InfoCard';

// Images
import CFDTradeType from '../../assets/static/images/trade_type_cfds.webp';
import MultiplierTradeType from '../../assets/static/images/trade_type_multipliers.webp';
import OptionTradeType from '../../assets/static/images/trade_type_digitaloptions.webp';

const data = [
  {
    title: 'CFDs',
    url: '/trade-types/cfds/',
    image: CFDTradeType
  },
  {
    title: 'Multipliers',
    url: '/trade-types/multipliers/',
    image: MultiplierTradeType
  },
  {
    title: 'Options',
    url: '/trade-types/options/',
    image: OptionTradeType
  }
];


function TradeTypes() {
  return (
    <section className="tradeTypes">
      {/* Trade Types Header */}
      <div className="tradeTypes__header">
        <h1 className="typography" type="heading-2">Trade types</h1>
        <h2>Trade the way you want with 3 flexible trade types.</h2>
      </div>


      {/* Trade Types Cards */}
      <div className="tradeTypes__cards__container">
        {/* Trade Types Cards Wrapper */}
        <div className="tradeTypes__cards__wrapper">
          {/* Trade Types Cards */}
          {
            data.map(({ title, url, image }) => (
              <InfoCard key={title} title={title} url={url} image={image} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TradeTypes