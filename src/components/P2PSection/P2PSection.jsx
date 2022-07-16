import React from 'react'

// Stylesheet
import './P2PSection.css';

// Images
import P2PImageBanner from '../../assets/static/images/p2p_home_banner.webp';
import P2PLogo from '../../assets/static/images/deriv_p2p_logo.webp';
import P2PQR from '../../assets/static/images/p2p_all_appstores.webp';
import { Link } from 'react-router-dom';


function P2PSection() {
  return (
    <div className="p2pSection">
        <div className="p2pSection__image__wrapper">
            <img src={P2PImageBanner} role="presentation" alt="p2p home banner" />
        </div>

        <div className="p2pSection__information__wrapper" direction="column">
            <div className='p2pSection__information__wrapper__logo'>
                <img src={P2PLogo} role="presentation" alt="p2p logo" />
            </div>
            <h1 className="typography p2pSection__banner__headerText">Hassle-free deposits and withdrawals</h1>
            <h2 className='typography'>Connect with fellow traders and transfer money in minutes.</h2>
            <Link className="localized__link" to="/p2p/">
                <p>{`Learn more >`}</p>
            </Link>
        </div>

        <div className="p2p__wrapper__qr">
            <img src={P2PQR} alt="QR code" role="presentation" />
            <span>Scan to download to Deriv P2P</span>
        </div>
    </div>
  )
}

export default P2PSection