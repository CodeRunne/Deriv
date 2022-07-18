import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Stylesheet
import './Signin.css';

// Auth
import ValidateUsers from '../../Auth/ValidateUsers';

// Components
import FormNavigation from '../../components/FormNavigation/FormNavigation'
import FormInputs from '../../components/FormInputs/FormInputs';
import CustomButton from '../../components/CustomButton/CustomButton';
import AccountNote from '../../components/AccountNote/AccountNote';


function Signin() {
  const [userValues, setValues] = useState({
        email: '',
        password: ''
  });

  const [errors, setErrors] = useState({});
  const [isPasswordType, setIsPasswordType] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;

    setValues({ ...userValues, [name]: value });
  }

  function handleBlur() {
    // ValidateUser
    setErrors(ValidateUsers(userValues));
  } 

  function togglePasswordType() {
    setIsPasswordType(!isPasswordType);
  }

  // Page Title
  document.title = "Log in | Deriv.com";

  return (
    <>
        {/* Navigation */}
        <FormNavigation />

        <div className="account__page">
          <div className="signin__container">
              <h1 className="account__title-text" style={{ fontSize: '2.4rem' }}>Welcome back!</h1>
              <p className="account__subtitle-text">It's good to see you again. Log in to start trading.</p>

              {/* Form Container Note Container */}
              <AccountNote>
                <h5 className="account__note__title">
                If you're a <strong>Binary.com</strong> user, log in with your <strong>Binary.com</strong> username and password
                </h5>
              </AccountNote>

              {/* Form Container Form */}
              <form className="signin__form__login" noValidate>
                  {/* Form Container Form Email Input */}
                  <FormInputs
                      formid="txtEmail" 
                      type="text"
                      name="email"
                      placeholder="example@gmail.com"
                      handleChange={ handleChange }
                      handleBlur={ handleBlur }
                      value={ userValues.email }
                      error={ errors.email }
                      label="Email"
                  />

                  {/* Form Container Form Password Input */}
                  <FormInputs
                      formid="txtPassword" 
                      type={ isPasswordType ? 'text' : 'password' }
                      name="password"
                      togglePasswordType={ togglePasswordType }
                      handleChange={ handleChange }
                      handleBlur={ handleBlur }
                      value={ userValues.password }
                      error={ errors.password }
                      label="Password"
                      togglePassword
                  />

                  <div className="signin__lost-password-container">
                      {/* Form Lost Password a */}
                      <Link className="signin__lost-password" to="/reset-password">Forgot password?</Link>

                      {/* Form Submit Buttom */}
                      <CustomButton type="submit" btn_bg>Log in</CustomButton>
                  </div>
              </form>

              {/* Form Container Seperator */}
              <div className='seperator'>
                <p className='center-text social-text'> or log in with </p>
              </div>

              {/* Form Container Social Login Container */}
              <div className='account__oa_social_login_container'>
                  <div className="account__provider">
                      <Link to="#" id="button_google" rel="nofollow" role="button" title="Sign in with Google" aria-label="Sign in with Google"></Link>
                  </div>

                  <div className="account__provider">
                      <Link to="#" id="button_facebook" rel="nofollow" role="button" title="Sign in with Facebook" aria-label="Sign in with Facebook"></Link>
                  </div>

                  <div className="account__provider">
                      <Link to="#" id="button_apple" rel="nofollow" role="button" title="Sign in with Apple" aria-label="Sign in with Apple">Apple</Link>
                  </div>
              </div>

              <p className="account-text">
              Don't have an account yet?
              <Link className='account-a' to="/outh-signup"> Create a new account</Link>
              </p>
          </div>
        </div>
    </>
  )
}

export default Signin