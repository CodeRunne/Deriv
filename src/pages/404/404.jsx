import React from 'react'
import { useNavigate } from 'react-router-dom';

// Components
import CustomButton from '../../components/CustomButton/CustomButton';
import Navigation from '../../components/Navigation/Navigation';

// Stylesheet
import './404.css';

function NoMatch() {
  const navigate = useNavigate();
  
  // Page Title
  document.title = `${process.env.REACT_404_TITLE}`;

  return (
    <>
      {/* Navigation */}
      <Navigation />

      <main className="layout__main">
        {/* Page Not Found Container */}
        <div className="pageNotFoundContainer">
          {/* Page Not Found Container SVG */}
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><circle cx="48" cy="48" r="40" fill="#7FBCC4"/><path d="M54.295 57.894c-4.928-4.207-4.347-6.09-10.599-6.09s-10.157 1.464-8.576 10.18c1.58 8.716 6.252 4.788 5.81 11.482-.441 6.694 1.163 8.135 2.185 9.739 1.023 1.603 4.068 6.252 5.23-.28a27.891 27.891 0 0 1 5.81-13.364c2.464-3.254 5.09-7.46.14-11.667Zm-17.13-15.247c.302-3.347 5.671-6.834 9.297-8.414 3.626-1.58 6.973-2.185 6.531-4.927-.441-2.743-1.464-4.835-7.112-4.835s-3.184 7.554-7.833 3.045c-4.648-4.51 1.023-3.347 3.347-4.346 2.324-1 4.649-5.23.581-5.509-4.067-.279-3.184 1.743-6.391.581-3.208-1.162-4.649 4.068-6.67 3.347a27.1 27.1 0 0 1-7.322-5.834A41.836 41.836 0 0 0 10.32 30.747a19.687 19.687 0 0 0 4.95 11.9s2.186 5.09 15.248 11.342c0 0 2.464.14-.442-2.766-2.905-2.905-6.136-6.554-2.51-8.437 3.626-1.883 4.649-1.743 5.532 1.743.883 3.487 3.765 1.441 4.067-1.906v.024Zm37.188 14.898a2.788 2.788 0 0 0-.302 4.486c1.371 1.232 4.137 2.835 5.02 0 .883-2.836-3.138-5.532-4.811-4.51l.093.024Zm15.781-13.713c0-.395 0-.79-.14-1.209 0-.883-.231-1.766-.394-2.626 0-.442-.163-.883-.256-1.325a44.808 44.808 0 0 0-.65-2.533c0-.372-.21-.767-.326-1.14a37.964 37.964 0 0 0-1.209-3.3c-.186-.464-.418-.906-.627-1.348-.21-.441-.581-1.278-.907-1.905a25.554 25.554 0 0 0-.906-1.627l-.86-1.418a44.51 44.51 0 0 0-1.139-1.72l-.674-.907a42.071 42.071 0 0 0-5.485-6.043l-.372-.348c-.72-.628-1.464-1.255-2.324-1.836h-.116A41.836 41.836 0 0 0 62.894 8.48a16.268 16.268 0 0 1-3.788 5.09 2.952 2.952 0 0 0 2.022 5.37s-1.162 1.162 0 5.368c1.162 4.207 3.114 5.137 8.855 2.766 2.464-1.022 4.347-.488 4.068 2.046-.581 5.369-4.649 5.136-1.604 13.806 1.883 5.23 6.531 7.274 8.274 11.342.953 2.324 4.649 4.3 7.763 5.694.326-1.092.605-2.324.86-3.347 0-.418.163-.86.256-1.301.163-.837.279-1.697.395-2.557 0-.395 0-.813.14-1.209 0-1.255.185-2.533.185-3.811 0-1.279 0-2.627-.186-3.905Z" fill="#A8D0C8"/></g><rect x="64" y="64" width="32" height="32" rx="16" fill="#FF444F"/><path fillRule="evenodd" clipRule="evenodd" d="M80 70c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm0 11c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1Zm-1 2v2h2v-2h-2Z" fill="#fff"/><defs><clipPath id="a"><rect x="8" y="8" width="80" height="80" rx="40" fill="#fff"/></clipPath></defs></svg>

          {/* Page Not Found Container Info */}
          <div className='pageNotFoundContainer__info'>
            <h3 type="heading-3" className="eFIFSU">We couldn’t find that page</h3>
            <p type="paragraph" className='eFIFSU'>It may not be available in your country, or maybe a broken link has brought you here.</p>
            <CustomButton handleClick={() => navigate('/')} btn_bg>Visit our homepage</CustomButton>
          </div>  
        </div>
      </main>
    </>
  )
}

export default NoMatch