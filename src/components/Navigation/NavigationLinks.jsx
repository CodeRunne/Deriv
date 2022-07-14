import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Navigation.css';

function NavigationLinks({ link }) {
  const navigate = useNavigate();
  
  return (
    <>
        {/* Navigation Link */}
        <li className='navigation__link' onClick={ () => navigate(`${ link.toLowerCase() }`) }>
            <span className="navigation__link__tab gWfdSDF">{ link }</span>
        </li>
    </>
  )
}

export default NavigationLinks