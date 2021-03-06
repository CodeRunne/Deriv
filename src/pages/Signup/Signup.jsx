import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Stylesheet
import './Signup.css'

import FormNavigation from '../../components/FormNavigation/FormNavigation'
import FormInputs from '../../components/FormInputs/FormInputs';
import CustomButton from '../../components/CustomButton/CustomButton';
import AccountNote from '../../components/AccountNote/AccountNote';
import ValidateUsers from '../../Auth/ValidateUsers';
import Checkbox from '../../components/Checkbox/Checkbox';

function Signup() {
  const [user, setUser] = useState({
    email: '',
    checkbox: false
  })

  const [error, setError] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;
    const checkCheckboxType = (user.checkbox === false) ? true : false;

    const inputValues = (name === "checkbox") ? checkCheckboxType : value;

    setUser({...user, [name]: inputValues});
  }
  
  function handleBlur() {
    setError(ValidateUsers(user));
  }

  function deleteInputValue(value) {
    setUser({...user, [`${value}`]: '' })
  }

  // Document Title
  document.title = "Easy And Free Signup | Online Trading | Deriv.com"; 

  return (
    <>
      {/* Navigation */}
      <FormNavigation helperClass="navigation__hrsd" />

      <div className="account__page">
        {/* Section */}
        <div className="signup__wrapper">
          <div className="signup__content">
            <svg className="signup__content__img" xmlns="http://www.w3.org/2000/svg" width="436" height="75" viewBox="0 0 438 75"><g fill="none" fillRule="evenodd"><path d="M-1 0h438v75H-1z"/><path fill="#FF444F" fillRule="nonzero" d="M36.5 50a.5.5 0 01.5.5V60h2a1 1 0 011 1v11a1 1 0 01-1 1h-2v1.5a.5.5 0 01-1 0V73h-2a1 1 0 01-1-1V61a1 1 0 011-1h2v-9.5a.5.5 0 01.5-.5zm143-3a.5.5 0 01.5.5V55h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v10.5a.5.5 0 01-1 0V60h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2v-7.5a.5.5 0 01.5-.5zm242-1a.5.5 0 01.5.5V53h2a1 1 0 01.993.883L425 54v11a1 1 0 01-.883.993L424 66h-2v3.5a.5.5 0 01-1 0V66h-2a1 1 0 01-.993-.883L418 65V54a1 1 0 01.883-.993L419 53h2v-6.5a.5.5 0 01.5-.5zm-341 0a.5.5 0 01.5.5V59h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v5.5a.5.5 0 01-1 0V64h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2V46.5a.5.5 0 01.5-.5zm352-3a.5.5 0 01.5.5V51h2a1 1 0 01.993.883L436 52v11a1 1 0 01-.883.993L435 64h-2v3.5a.5.5 0 01-1 0V64h-2a1 1 0 01-.993-.883L429 63V52a1 1 0 01.883-.993L430 51h2v-7.5a.5.5 0 01.5-.5zm-319 2a.5.5 0 01.5.5V54h2a1 1 0 011 1v11a1 1 0 01-1 1h-5a1 1 0 01-1-1V55a1 1 0 011-1h2v-8.5a.5.5 0 01.5-.5zM50 42a1 1 0 011 1v11a1 1 0 01-1 1h-2v10.5a.5.5 0 01-1 0V55h-2a1 1 0 01-1-1V43a1 1 0 011-1h5zm195.5 1a.5.5 0 01.5.5V46h2a1 1 0 01.993.883L249 47v11a1 1 0 01-.883.993L248 59h-2v5.5a.5.5 0 01-1 0V59h-2a1 1 0 01-.993-.883L242 58V47a1 1 0 01.883-.993L243 46h2v-2.5a.5.5 0 01.5-.5zm-121-5a.5.5 0 01.5.5V49h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v8.5a.5.5 0 01-1 0V54h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2V38.5a.5.5 0 01.5-.5zm-33-7a.5.5 0 01.5.5V38h2a1 1 0 011 1v23a1 1 0 01-1 1h-5a1 1 0 01-1-1V39a1 1 0 011-1h2v-6.5a.5.5 0 01.5-.5zm99 5a.5.5 0 01.5.5V40h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v15.5a.5.5 0 01-1 0V45h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2v-3.5a.5.5 0 01.5-.5zM303 36a1 1 0 01.993.883L304 37v11a1 1 0 01-.883.993L303 49h-2v10.5a.5.5 0 01-1 0V49h-2a1 1 0 01-.993-.883L297 48V37a1 1 0 01.883-.993L298 36h5zm-156.5-6a.5.5 0 01.5.5V36h2a1 1 0 011 1v11a1 1 0 01-1 1h-2v8.5a.5.5 0 01-1 0V49h-2a1 1 0 01-1-1V37a1 1 0 011-1h2v-5.5a.5.5 0 01.5-.5zm231 3a.5.5 0 01.5.5V40h2a1 1 0 01.993.883L381 41v3a1 1 0 01-.883.993L380 45h-2v11.5a.5.5 0 01-1 0V45h-2a1 1 0 01-.993-.883L374 44v-3a1 1 0 01.883-.993L375 40h2v-6.5a.5.5 0 01.5-.5zM237 27a1 1 0 01.993.883L238 28v23a1 1 0 01-.883.993L237 52h-2v4.5a.5.5 0 01-1 0V52h-2a1 1 0 01-.993-.883L231 51V28a1 1 0 01.883-.993L232 27h5zm162.5-12a.5.5 0 01.5.5V18h2a1 1 0 01.993.883L403 19v32a1 1 0 01-.883.993L402 52h-2v2.5a.5.5 0 01-1 0V52h-2a1 1 0 01-.993-.883L396 51V19a1 1 0 01.883-.993L397 18h2v-2.5a.5.5 0 01.5-.5zm-187 21a.5.5 0 01.5.5V49h2a1 1 0 01.993.883L216 50v1a1 1 0 01-.883.993L215 52h-2v.5a.5.5 0 01-1 0V52h-2a1 1 0 01-.993-.883L209 51v-1a1 1 0 01.883-.993L210 49h2V36.5a.5.5 0 01.5-.5zM61 35a1 1 0 011 1v3a1 1 0 01-1 1h-2v10.5a.5.5 0 01-1 0V40h-2a1 1 0 01-1-1v-3a1 1 0 011-1h5zm305.5-9a.5.5 0 01.5.5V31h2a1 1 0 01.993.883L370 32v11a1 1 0 01-.883.993L369 44h-2v5.5a.5.5 0 01-1 0V44h-2a1 1 0 01-.993-.883L363 43V32a1 1 0 01.883-.993L364 31h2v-4.5a.5.5 0 01.5-.5zm-110 0a.5.5 0 01.5.5V41h2a1 1 0 01.993.883L260 42v3a1 1 0 01-.883.993L259 46h-2v3.5a.5.5 0 01-1 0V46h-2a1 1 0 01-.993-.883L253 45v-3a1 1 0 01.883-.993L254 41h2V26.5a.5.5 0 01.5-.5zM347 15a1 1 0 01.993.883L348 16v23a1 1 0 01-.883.993L347 40h-2v8.5a.5.5 0 01-1 0V40h-2a1 1 0 01-.993-.883L341 39V16a1 1 0 01.883-.993L342 15h5zM201.5 30a.5.5 0 01.5.5V37h2.5a.5.5 0 01.492.41l.008.09a.5.5 0 01-.41.492l-.09.008H202v8.5a.5.5 0 01-1 0V38h-2.5a.5.5 0 01-.492-.41L198 37.5a.5.5 0 01.41-.492l.09-.008h2.5v-6.5a.5.5 0 01.5-.5z"/><path fill="#85ACB0" fillRule="nonzero" d="M168.5 20a.5.5 0 01.5.5V27h2a1 1 0 011 1v33a1 1 0 01-1 1h-2v7.5a.5.5 0 01-1 0V62h-2a1 1 0 01-1-1V28a1 1 0 011-1h2v-6.5a.5.5 0 01.5-.5zM105 47a1 1 0 011 1v11a1 1 0 01-1 1h-2v3.5a.5.5 0 01-1 0V60h-2a1 1 0 01-1-1V48a1 1 0 011-1h5zm-33 0a1 1 0 011 1v4a1 1 0 01-1 1h-2v10.5a.5.5 0 01-1 0V53h-2a1 1 0 01-1-1v-4a1 1 0 011-1h5zm316.5-11a.5.5 0 01.5.5V40h2a1 1 0 011 1v15a1 1 0 01-1 1h-2v5.5a.5.5 0 01-1 0V57h-2a1 1 0 01-1-1V41a1 1 0 011-1h2v-3.5a.5.5 0 01.5-.5zm-385 9a.5.5 0 01.5.5V48h2a1 1 0 011 1v11a1 1 0 01-1 1H4v1.5a.5.5 0 01-1 0V61H1a1 1 0 01-1-1V49a1 1 0 011-1h2v-2.5a.5.5 0 01.5-.5zm275 0a.5.5 0 01.5.5V52h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v3.5a.5.5 0 01-1 0V58h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2v-6.5a.5.5 0 01.5-.5zM413 37a1 1 0 011 1v15a1 1 0 01-1 1h-2v6.5a.5.5 0 01-1 0V54h-2a1 1 0 01-1-1V38a1 1 0 011-1h5zM14.5 2a.5.5 0 01.5.5V11h2a1 1 0 011 1v46a1 1 0 01-1 1h-2v1.5a.5.5 0 01-1 0V59h-2a1 1 0 01-1-1V12a1 1 0 011-1h2V2.5a.5.5 0 01.5-.5zm121 36a.5.5 0 01.5.5V40h2a1 1 0 011 1v11a1 1 0 01-1 1h-2v3.5a.5.5 0 01-1 0V53h-2a1 1 0 01-1-1V41a1 1 0 011-1h2v-1.5a.5.5 0 01.5-.5zM28 37a1 1 0 011 1v15a1 1 0 01-1 1h-2v2.5a.5.5 0 01-1 0V54h-2a1 1 0 01-1-1V38a1 1 0 011-1h5zm327.5 0a.5.5 0 01.5.5V46h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v1.5a.5.5 0 01-1 0V52h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2v-8.5a.5.5 0 01.5-.5zm-88-3a.5.5 0 01.5.5V36h2a1 1 0 011 1v11a1 1 0 01-1 1h-2v1.5a.5.5 0 01-1 0V49h-2a1 1 0 01-1-1V37a1 1 0 011-1h2v-1.5a.5.5 0 01.5-.5zm-110-34a.5.5 0 01.5.5V9h2a1 1 0 011 1v33a1 1 0 01-1 1h-2v4.5a.5.5 0 01-1 0V44h-2a1 1 0 01-1-1V10a1 1 0 011-1h2V.5a.5.5 0 01.5-.5zm132 31a.5.5 0 01.5.5v.5h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v9.5a.5.5 0 01-1 0V38h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2v-.5a.5.5 0 01.5-.5zM226 30a1 1 0 011 1v4a1 1 0 01-1 1h-2v11.5a.5.5 0 01-1 0V36h-2a1 1 0 01-1-1v-4a1 1 0 011-1h5zm107.5-1a.5.5 0 01.5.5V31h2a1 1 0 011 1v11a1 1 0 01-1 1h-2v1.5a.5.5 0 01-1 0V44h-2a1 1 0 01-1-1V32a1 1 0 011-1h2v-1.5a.5.5 0 01.5-.5zm-22-13a.5.5 0 01.5.5V18h2a1 1 0 011 1v15a1 1 0 01-1 1h-5a1 1 0 01-1-1V19a1 1 0 011-1h2v-1.5a.5.5 0 01.5-.5zm11 0a.5.5 0 01.5.5V18h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v8.5a.5.5 0 01-1 0V24h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2v-1.5a.5.5 0 01.5-.5z"/></g></svg>

            <h3 type="section-title" className="signup__content__header typography">Start trading with Deriv</h3>
    
            <br />
    
            <p className="typography signup__content__title">Join over 1 million people who trade with Deriv.com and Binary.com ??? the award-winning platform that???s been trusted for over 20 years.</p>
    
            <div className='signup__line'></div>
          </div>

          <div className="signup__form">
            <h1 className="account__title-text" style={{ fontSize: '2.4rem' }}>Sign up</h1>
            <p className="account__subtitle-text">Enter your email address to begin</p>

            {/* Form Container Note Container */}
            <AccountNote>
              <h5 className="account__note__title">
                Got a <strong>Binary.com</strong> account?
              </h5>
              <p className="account__note__p">Log in to <strong>Deriv.com</strong> with your <strong>Binary.com</strong> username and password.</p>
          </AccountNote>

            {/* Form Container Form */}
            <form className="signin__form__register" noValidate>
              {/* Form Container Form Email Input */}
              <FormInputs
                  formid="txtEmail" 
                  type="text"
                  name="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  deleteInputValue={deleteInputValue}
                  value={user.email}
                  error={error.email ? error.email : ''}
                  placeholder="example@gmail.com"
                  label="Email"
                  deleteValue
              />

              {/* Form Container Form Email Input */}
              <Checkbox 
                formid="txtCheck" 
                name="checkbox"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={user.checkbox}
                label="checkbox"
              />
              
              {/* Form Submit Button */}
              <CustomButton type="submit" ids="signup__form__submitButton" helperClass={` opq ${Object.keys(error).length !== 0 ? "show" : ""} `} btn_bg>Create demo account</CustomButton>

              <p className="typography account__policy">
                By pressing ???Create demo account???, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv???s <Link to="/trc/security-and-privacy.pdf" target="_blank" rel="noopener noreferrer" size="1.2rem" color="red" className="localized_link">Security and privacy</Link> 
              </p>
            </form>

            {/* Form Container Seperator */}
            <div className='seperator'>
              <p className='center-text social-text'> or sign up with </p>
            </div>

            {/* Form Container Social Login Container */}
            <div className='signin__oa_social_login_container'>
              <div className="signin__provider">
                  <Link to="#" id="button_google" rel="nofollow" role="button" title="Sign in with Google" aria-label="Sign in with Google"></Link>
              </div>

              <div className="signin__provider">
                  <Link to="#" id="button_facebook" rel="nofollow" role="button" title="Sign in with Facebook" aria-label="Sign in with Facebook"></Link>
              </div>

              <div className="signin__provider">
                  <Link to="#" id="button_apple" rel="nofollow" role="button" title="Sign in with Apple" aria-label="Sign in with Apple">Apple</Link>
              </div>
            </div>

            <p className="account-text">
              Already have an account?
              <Link className='account-a' to="/outh-signin"> Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup