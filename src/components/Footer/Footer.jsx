import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './Footer.css';

// Form data
const data = [
    {
      title: 'About Us',
      links: [
        {
          title: 'Who we are',
          url: '/whoweare'
        },
        {
          title: 'Why choose us',
          url: '/'
        },
        {
          title: 'Partnership programmes',
          url: '/'
        },
        {
          title: 'Contact us',
          url: '/contact'
        },
        {
          title: 'Careers',
          url: '/careers'
        },
        {
          title: 'Deriv life',
          url: '/'
        }      
      ]
    },
    {
      title: 'Products',
      links: [ 
        {
          title: 'CFDs',
          url: '/'
        },
        {
          title: 'Digital options',
          url: '/'
        },{
          title: 'Multipliers',
          url: '/'
        }     
      ]
    },
    {
      title: 'Markets',
      links: [
        {
          title: 'Forex',
          url: '/'
        },
        {
          title: 'Synthetic indices',
          url: '/'
        },
        {
          title: 'Stock & indices',
          url: '/'
        },
        {
          title: 'Cryptocurrencies',
          url: '/'
        },
        {
          title: 'Basket indices',
          url: '/'
        },
        {
          title: 'Commodities',
          url: '/'
        }     
      ]
    },
    {
      title: 'Trade',
      links: [
        {
          title: 'Deriv MT5',
          url: '/'
        },
        {
          title: 'Deriv X',
          url: '/'
        },
        {
          title: 'Deriv GO',
          url: '/'
        },
        {
          title: 'DTrader',
          url: '/'
        },
        {
          title: 'SmartTrader',
          url: '/'
        }, 
        {
          title: 'DBot',
          url: '/'
        },
        {
          title: 'Binary Bot',
          url: '/'
        }      
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          title: 'Regulatory information',
          url: '/'
        },
        {
          title: 'Terms & conditions',
          url: '/'
        },
        {
          title: 'Secure & responsible trading',
          url: '/'
        }      
      ]
    },
    {
      title: 'Partner',
      links: [
        {
          title: 'Affiliates and IBs',
          url: '/'
        },
        {
          title: 'Payment agents',
          url: '/'
        },
        {
          title: 'API',
          url: '/'
        },
        {
          title: 'Bug bounty',
          url: '/'
        }      
      ]
    },
    {
      title: 'Support',
      links: [
        {
          title: 'Help center',
          url: '/'
        },
        {
          title: 'Community',
          url: '/'
        },
        {
          title: 'Payment methods',
          url: '/'
        },
        {
          title: 'Status page',
          url: '/'
        },
        {
          title: 'Academy',
          url: '/'
        }            
      ]
    },
  ]

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                {/* Footer Logo Wrapper */}
                <div className="footer__logo__wrapper">
                    {/* Footer Logo SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 25" className="footer__logo__wrapper__svg"><defs><linearGradient id="a" x1="-388.13" y1="1321.44" x2="-388.13" y2="1320.44" gradientTransform="matrix(26.91 0 0 -25 10457.84 33036)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff6544"/><stop offset="1" stopColor="#ff4449"/></linearGradient></defs><g data-name="Layer 2"><g data-name="Layer 1"><g data-name="2--logogram"><g data-name="logo/logogram"><path d="M5.86 0l9.73 12.5L0 25h15.74a9.83 9.83 0 009.61-7.53l1.31-5.57a9.6 9.6 0 00-1.9-8.23A9.9 9.9 0 0017.05 0z" fill="url(#a)"/><path data-name="Path" fill="#b51a31" d="M15.58 12.53L8.74 25H0l15.58-12.47z"/></g></g><path d="M129.57 1l3.15 16.78L141.56 1H147l-13.34 24h-4.46L124 1zM48.35 1C55.75 1 60 6.18 58.81 12.93V13a14.71 14.71 0 01-14.62 12H35l4.15-24zm51.85 0c3 0 5.26.86 6.56 2.44a6.57 6.57 0 011.09 5.48v.07a9.32 9.32 0 01-6.44 7.44l4.33 8.57h-6.17l-5.75-12.35h4c2.57 0 4.28-1.38 4.64-3.39v-.07c.4-2.26-1-3.42-3.54-3.42h-5.25L90.28 25H85l4.23-24zM118 1l-4 24h-5l4-24zM84 1l-.82 4.7H70.52l-.85 4.87h8.18l-.85 4.7h-8.14l-.88 5h12.84L80 25H62l4.17-24zM47.77 6h-4.16L41 20h4.17a8.53 8.53 0 008.68-6.93V13c.78-4.11-1.66-7-6.08-7z"/></g></g></svg>

                    {/* Footer Logo Socials Container */}
                    <div className="footer__logo__socials">
                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials_reddit">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#333333"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.4333 9.98833C30.4333 8.84167 29.4967 7.90667 28.35 7.90667C27.9626 7.90421 27.5827 8.01299 27.2554 8.2201C26.928 8.4272 26.667 8.72392 26.5033 9.075L21.66 8.04667C21.5237 8.02216 21.3831 8.04697 21.2633 8.11667C21.1482 8.19407 21.0652 8.31081 21.03 8.445L19.555 15.415C16.445 15.51 13.66 16.4217 11.6483 17.8933C11.1333 17.4033 10.4083 17.0767 9.63667 17.0767C8.02334 17.0767 6.71334 18.3867 6.71334 20C6.71261 20.5645 6.87588 21.117 7.1833 21.5904C7.49072 22.0638 7.92905 22.4377 8.445 22.6667C8.39834 22.9467 8.37334 23.2517 8.37334 23.5567C8.37334 28.0467 13.59 31.6733 20.0467 31.6733C26.5033 31.6733 31.72 28.0467 31.72 23.5567C31.721 23.2663 31.6976 22.9764 31.65 22.69C32.6083 22.2217 33.3333 21.1933 33.3333 20C33.3333 18.3867 32.0233 17.0767 30.41 17.0767C29.615 17.0767 28.9117 17.38 28.3983 17.895C26.4083 16.4683 23.6483 15.5317 20.6083 15.415L21.9417 9.17L26.27 10.0817C26.3 10.6214 26.5387 11.1284 26.9355 11.4954C27.3324 11.8625 27.8564 12.0609 28.3968 12.0488C28.9373 12.0367 29.4518 11.815 29.8318 11.4305C30.2119 11.046 30.4275 10.5289 30.4333 9.98833ZM13.3333 22.0833C13.3333 20.9367 14.2683 20 15.4167 20H15.415C16.5617 20 17.4967 20.935 17.4967 22.0817C17.4967 23.2283 16.5617 24.1633 15.4167 24.1633C14.2683 24.1633 13.3333 23.2283 13.3333 22.0833ZM22.5033 22.0833C22.5033 20.935 23.4383 20 24.5833 20C25.73 20 26.6667 20.9367 26.6667 22.0817C26.6667 23.2283 25.7317 24.1633 24.585 24.1633C23.4383 24.1633 22.5033 23.2283 22.5033 22.0833ZM15.0883 26.8067C15.1909 26.7056 15.3293 26.6493 15.4733 26.65V26.6483C15.545 26.6479 15.6161 26.6617 15.6825 26.6888C15.7489 26.716 15.8092 26.7561 15.86 26.8067C16.7483 27.6967 18.6667 28.0233 20.0467 28.0233C21.4267 28.0233 23.3217 27.695 24.2333 26.8067C24.3363 26.7049 24.4752 26.6478 24.62 26.6478C24.7648 26.6478 24.9037 26.7049 25.0067 26.8067C25.0906 26.9205 25.1317 27.0602 25.1229 27.2013C25.114 27.3424 25.0558 27.4759 24.9583 27.5783C23.5317 29.0067 20.8183 29.1 20.0233 29.1C19.2283 29.1 16.4917 28.9817 15.0883 27.5783C14.9871 27.4755 14.9303 27.3369 14.9303 27.1925C14.9303 27.0481 14.9871 26.9095 15.0883 26.8067Z" fill="white"/>
                          </svg>
                        </Link>

                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials_telegram">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.82483 5.89076C9.55539 2.1427 14.6185 0.0246783 19.9067 0H20C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 1.18729e-09 25.3043 1.18729e-09 20C-5.75792e-05 14.7118 2.09426 9.63882 5.82483 5.89076Z" fill="#333333"/>
                            <path d="M28.9517 12.2733C28.7117 12.0783 28.3433 12.0367 28.1767 12.04C27.425 12.0533 26.27 12.455 20.7167 14.765C18.77 15.5733 14.8833 17.2483 9.05333 19.7883C8.10667 20.165 7.61 20.5333 7.565 20.8933C7.48877 21.5017 8.24932 21.7413 9.28644 22.068C9.42848 22.1128 9.5757 22.1591 9.72667 22.2083C10.7483 22.54 12.1217 22.9283 12.835 22.9417C13.4833 22.9583 14.205 22.6917 15.005 22.1417C20.4517 18.4667 23.2633 16.6067 23.44 16.5667C23.565 16.5383 23.7383 16.5033 23.855 16.6067C23.9717 16.71 23.96 16.9067 23.9483 16.96C23.8722 17.281 20.8891 20.055 19.3388 21.4967C18.8525 21.949 18.5071 22.2701 18.4367 22.3433C18.2805 22.5053 18.1214 22.6585 17.9684 22.8059C17.019 23.7202 16.3058 24.4071 18.0067 25.5267C18.8247 26.0661 19.4791 26.512 20.1323 26.957C20.8433 27.4414 21.5527 27.9247 22.47 28.5267C22.7048 28.6804 22.9291 28.8402 23.1475 28.9959C23.9752 29.5858 24.7188 30.1157 25.6367 30.03C26.1717 29.9817 26.7233 29.48 27.0033 27.98C27.6667 24.4383 28.97 16.765 29.27 13.6017C29.2967 13.325 29.2633 12.97 29.2367 12.815C29.2129 12.6051 29.1111 12.4118 28.9517 12.2733Z" fill="white"/>
                          </svg>                        
                        </Link>

                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials_facebook">
                          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" aria-label="socials facebook">
                            <g fill="none" fillRule="evenodd">
                              <circle cx="20" cy="20" r="20" fill="#333"/>
                              <g transform="translate(5 5)">
                                <rect width="30" height="30" rx="3.73"/>
                                <path fill="#FFF" fillRule="nonzero" d="M21.104 3.755L18.18 3.75c-3.284 0-5.406 2.173-5.406 5.537v2.553h-2.94a.46.46 0 00-.459.46v3.698c0 .254.206.46.46.46h2.939v9.333c0 .254.205.459.46.459h3.834a.46.46 0 00.46-.459v-9.334h3.436a.46.46 0 00.46-.459l.002-3.699a.46.46 0 00-.46-.459h-3.438V9.676c0-1.04.248-1.568 1.606-1.568h1.97a.46.46 0 00.459-.46V4.213a.459.459 0 00-.46-.458z"/>
                              </g>
                            </g>
                          </svg>
                        </Link>

                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials-twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                            <g fill="none" fillRule="evenodd">
                              <circle cx="20" cy="20" r="20" fill="#333"/>
                              <g transform="translate(5 5)">
                                <rect width="30" height="30" rx="3.73"/>
                                <path fill="#FFF" fillRule="nonzero" d="M27.188 7.845a9.448 9.448 0 01-2.658.747 4.687 4.687 0 002.029-2.615 9.09 9.09 0 01-2.925 1.145 4.572 4.572 0 00-3.37-1.497c-2.553 0-4.61 2.126-4.61 4.732 0 .375.032.736.108 1.08-3.835-.193-7.228-2.078-9.508-4.95a4.863 4.863 0 00-.631 2.392c0 1.638.822 3.09 2.049 3.932a4.476 4.476 0 01-2.084-.583v.052c0 2.299 1.598 4.208 3.695 4.648a4.468 4.468 0 01-1.21.156c-.295 0-.593-.017-.873-.08.598 1.873 2.294 3.25 4.31 3.295a9.114 9.114 0 01-5.719 2.018c-.378 0-.74-.017-1.104-.065a12.758 12.758 0 007.077 2.123c8.488 0 13.128-7.212 13.128-13.463 0-.209-.007-.41-.016-.611a9.342 9.342 0 002.311-2.456z"/>
                              </g>
                            </g>
                          </svg>
                        </Link>

                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials_instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#333"/><g transform="translate(5 5)"><rect width="30" height="30" rx="3.73"/><path fill="#FFF" fillRule="nonzero" d="M20.04 3.75a6.217 6.217 0 016.21 6.21v10.08a6.217 6.217 0 01-6.21 6.21H9.96a6.216 6.216 0 01-6.21-6.21V9.96a6.217 6.217 0 016.21-6.21zm0 1.996H9.96a4.218 4.218 0 00-4.214 4.213v10.082a4.218 4.218 0 004.213 4.213h10.082a4.218 4.218 0 004.213-4.213V9.959a4.218 4.218 0 00-4.213-4.213zM15 9.107A5.9 5.9 0 0120.893 15 5.9 5.9 0 0115 20.893 5.9 5.9 0 019.107 15 5.9 5.9 0 0115 9.107zm0 2.03A3.868 3.868 0 0011.136 15c0 2.13 1.734 3.864 3.864 3.864S18.864 17.13 18.864 15 17.13 11.136 15 11.136zM21.16 7.5a1.342 1.342 0 01.948 2.287c-.25.248-.594.392-.947.392a1.35 1.35 0 01-.946-.392 1.352 1.352 0 01-.394-.948 1.344 1.344 0 011.34-1.339z"/></g></g></svg>
                        </Link>

                        {/* Footer Logo Socials Link */}
                        <Link to="/" className="localized_link" rel="noopener noreferrer" target="_blank" id="socials_linkedin">
                          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#333"/><g transform="translate(5 5)"><rect width="30" height="30" rx="3.73"/><path fill="#FFF" fillRule="nonzero" d="M4.583 23.75h3.334c.46 0 .833-.316.833-.705v-12.34c0-.39-.373-.705-.833-.705H4.583c-.46 0-.833.316-.833.705v12.34c0 .39.373.705.833.705zm0-16.25h3.334c.46 0 .833-.302.833-.675v-2.4c0-.373-.373-.675-.833-.675H4.583c-.46 0-.833.302-.833.675v2.4c0 .373.373.675.833.675zm20.575 3.156c-.409-.555-1.01-1.012-1.806-1.37-.795-.357-1.673-.536-2.634-.536-1.95 0-3.603.77-4.958 2.308-.27.306-.466.24-.466-.175v-1a.737.737 0 00-.725-.749h-2.594c-.4 0-.725.336-.725.75V23c0 .414.325.75.725.75h2.904c.4 0 .725-.336.725-.75v-4.56c0-1.9.111-3.203.333-3.908a3.221 3.221 0 011.232-1.697c.6-.427 1.276-.64 2.03-.64.59 0 1.093.149 1.511.448.419.299.72.718.907 1.257.186.539.279 1.727.279 3.563V23c0 .414.324.75.725.75h2.904c.4 0 .725-.336.725-.75v-7.428c0-1.313-.08-2.322-.24-3.026a5.032 5.032 0 00-.852-1.89z"/></g></g></svg>
                        </Link>
                    </div>
                </div>

                {/* Footer Links Wrapper */}
                <div className="footer__links__wrapper">
                    <div className="footer__links__container">
                        {/* Footer Links */}
                        {
                            data.map(({ title, links }, id) => (
                                <div className="footer__links" key={ id + title }>
                                    {/* Footer Link Title */}
                                    <p className="footer__links__title">{ title.toUpperCase() }</p>

                                    {/* Footer Links */}
                                    <ul className="footer__links__items">
                                      {
                                        links.map((link, index) => (
                                        <li className="footer__link" key={ link.title + index }>
                                            <Link to={`${link.title}`}>{ link.title }</Link>
                                        </li>
                                        ))
                                      }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="footer__disclaimer">
                    <p className="typography footer__disclaimer__paragraph">
                        In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed in Malta (<Link to="/regulatory/Deriv_Investment_(Europe)_Limited.pdf" className="footer__disclamer__asset" rel="noopener noreferrer">licence no. IS/70156</Link>) and regulated by the Malta Financial Services Authority, Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investments Services Act. Authorised by the Financial Conduct Authority and with deemed variation of permission. Subject to regulation by the Financial Conduct Authority. The nature and extent of consumer protections may differ from those for firms based in the UK. Details of the Financial Services Contracts Regime, which allows EEA-based firms to operate in the UK for a limited period to carry on activities that are necessary for the performance of pre-existing contracts, are available on the Financial Conduct Authority’s website.
                    </p>

                    <p className="typography footer__disclaimer__paragraph">
                        Outside the EU, financial products are offered by the following companies: Deriv (FX) Ltd, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, licensed by Labuan Financial Services Authority (<Link target="_blank" to="/regulatory/Deriv_(FX)_Ltd.pdf" rel="noopener noreferrer" className="style__StaticAsset-sc-y1eemc-11 bUmbZd">licence no. MB/18/0024</Link>); Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, licensed by the British Virgin Islands Financial Services Commission (<Link target="_blank" to="/regulatory/Deriv_(BVI)_Ltd.pdf" rel="noopener noreferrer" className="style__StaticAsset-sc-y1eemc-11 bUmbZd">licence no. SIBA/L/18/1114</Link>); Deriv (V) Ltd, 1276, Kumul Highway, Port Vila, Vanuatu, licensed and regulated by the Vanuatu Financial Services Commission; and Deriv (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines.
                    </p>

                    <p className="typography footer__disclaimer__paragraph">Deriv Limited - 13 Castle Street, St. Helier, JE2 3BT, Jersey - is the holding company for the above subsidiaries.</p>

                    <p className="typography footer__disclaimer__paragraph">This website's services are not available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.</p>

                    <div className="footer__risk__warning bRCStyle">
                        <p className="typography footer__disclaimer__paragraph">
                            CFDs are considered complex derivatives and may not be suitable for retail clients. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money.
                        </p>

                        <p className="typography footer__disclaimer__paragraph">
                            Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <Link target="_blank" className="localized-link" to="/responsible/">Secure and responsible trading</Link>.
                        </p>
                    </div>
                </div>
            </div>    
        </footer>
    )
}


export default Footer;