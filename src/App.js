import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

// Stylesheet
import './App.css';

// Component
import Spinner from './components/Spinner/Spinner';

// Routes
const Home = lazy(() => import('./pages/Home/Home'));
const Partners = lazy(() => import('./pages/Partners/Partners'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre/WhoWeAre'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Careers = lazy(() => import('./pages/Careers/Careers'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Signin = lazy(() => import('./pages/Signin/Signin'));
const NoMatch = lazy(() => import('./pages/404/404'));


function App() {  
  return (
    <>
      <Suspense fallback={ <Spinner /> }> 
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about/contact" element={ <Contact /> } />
            <Route path="/about/careers" element={ <Careers /> } />
            <Route path="/about/whoweare" element={ <WhoWeAre /> } />
            <Route path="/resources/partners" element={ <Partners /> } />
            <Route path="/oauth-signup" element={ <Signup /> } />
            <Route path="/oauth-signin" element={ <Signin /> } />
            <Route path="*" element={ <NoMatch /> } />
          </Routes>
        </Suspense>
    </>
  )
}

export default App