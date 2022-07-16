import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './InfoCard.css';

function InfoCard({ title, url, image }) {
  return (
    <div className='infoCard'>
        <div className="infoCard__box">
            <div className="infoCard__image">
                <img src={image} alt="" role="presentation" />
            </div>
            <div className="infoCard__content">
                <h2 type="subtitle-1" className='typography'>{title}</h2>

                <div className="infoCard__content__wrapper">
                    <h2 className='typography' type="heading-2">Trade with leverage and low spreads for better returns on successful trades.</h2>
                </div>

                <Link className="localized__link" to={`${url}`}>
                    <p className='typography__text'>{`More on ${title}`}</p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path fill="#FF444F" d="M7.293.293a1 1 0 0 0 0 1.414L12.586 7H1a1 1 0 0 0 0 2l11.586-.001-5.293 5.294a1 1 0 0 0 1.414 1.414l7-7 .073-.082.007-.008-.08.09a.927.927 0 0 0 .097-.112c.018-.024.034-.049.05-.074l.021-.037c.011-.02.022-.04.031-.06l.023-.053.021-.06.014-.045.016-.065.009-.053.007-.058.004-.07v-.04c0-.023-.002-.046-.004-.07L16 8c0-.05-.004-.1-.011-.149l-.01-.052a.762.762 0 0 0-.015-.065l-.014-.046-.021-.06-.023-.051-.03-.061-.022-.037a1.2 1.2 0 0 0-.05-.074l-.017-.022a.97.97 0 0 0-.08-.09l-7-7a1 1 0 0 0-1.414 0z"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default InfoCard