import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Stylesheet
import './Signin.css';

// Components
import FormNavigation from '../../components/FormNavigation/FormNavigation'
import FormInputs from '../../components/FormInputs/FormInputs';
import CustomButton from '../../components/CustomButton/CustomButton';


function Signin() {
  const [userValues, setValues] = useState({
        email: '',
        password: ''
  });

  const [errors, setErrors] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;

    setValues({ ...userValues, [name]: value });
  }

  function handleBlur() {
    // ValidateUser
    setErrors(ValidateUser(userValues));
  } 

  function ValidateUser(user) {
    const error = {};

    if(user.email === "") {
        error.email = "Email can't be empty";
    } else if(!(/[\D][\w]{4,15}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/ig).exec(user.email)) {
        error.email = "Invalid email"
    }

    if(user.password === "") error.password = "Password cant be empty";

    return error;
  }

  // Page Title
  document.title = "Log in | Deriv.com";

  

  return (
    <>
        {/* Navigation */}
        <FormNavigation />

        <div className="signin__container">
            <h1 className="signin__title-text" style={{ fontSize: '2.4rem' }}>Welcome back!</h1>
            <p className="signin__subtitle-text">It's good to see you again. Log in to start trading.</p>
            {/* Form Container Note Container */}
            <div className="signin__note-container">
                {/* Form Container Binary Logo */}
                <div className='binary-logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42">
                    <g fill="none" fillRule="evenodd"><path fill="#FEFEFE" d="M36.03 6.598C27.97-1.48 14.857-1.48 6.795 6.596c-8.06 8.074-8.06 21.216 0 29.29 8.062 8.08 21.179 8.078 29.235 0 8.07-8.074 8.07-21.216 0-29.288"></path><path fill="#777" d="M15.652 26.674s.237 1.776 1.73 2.599l-.398-.742s.761-1.999-1.332-1.857"></path><path fill="#777" d="M22.255 14.32c1.605.573 2.121 2.287 2.121 2.287-2.042.466-1.612-1.622-1.612-1.622l-.51-.665zM33 32.851c-.21.205-.415.405-.627.598-4.611 3.764-8.162 1.892-8.203 1.892-2.407-.482-3.602-.49-4.277-.942-.17-.114-.715-.407-.84-.336-.491.293-1.168.444-1.863-.11-.061-.05-.12-.107-.173-.158-.766-.765-.506-1.554-.252-1.829.177-.18-.134-.684-.134-.684s-.904-1.345-1.521-2.154c-.68-.889-.773-2.652-.781-2.675l-.01-.025c-.686-.817-.758-1.069-.995-1.467-.138-.236-.351-.456-.532-.646a3.35 3.35 0 01-.32-.353c-.018-.023-.023-.058-.016-.112.064-.382.882-1.224 1.06-1.34.216-.141 1.15-.71 1.15-.71s.525-.827 1.418-.827c.806.005 1.298-.044 2.688.41l.578.183c.969.311 1.823.678 2.502.972.576.248 1.037.45 1.39.542 1.2.316 3.314-.656 3.76-1.066.732-.667 1.048-1.114 1.052-1.48.006-.206-.085-.386-.292-.603-.108-.1-.247-.285-.421-.462-.028-.027-.057-.06-.092-.085-2.03-2.159-1.679-3.513-1.677-3.535.088-.971-.468-1.595-1.066-2.24l-.097-.122a.652.652 0 01-.07-.078c.864.141 1.453.49 3.141.678.959.103.656.094 1.422.076 1.055-.034 1.891-.127 1.948-.367-.102-.087-.569.026-2.81-.832a32.835 32.835 0 00-1.86-.676 27.01 27.01 0 01-1.768-.683c3.656.96 4.852 1.337 6.524 1.36a5.273 5.273 0 001.258-.112c.238-.043.976-.21 1.06-.466.025-.045-.708.12-2.065-.328-4.267-1.413-4.63-2.12-6.995-3.041-.826-.321-1.094-.497-3.586-1.142-1.142-.294-2.868-.125-3.103.023-3.235-.762-3.97-.679-4.919-.474C18.915 3.36 27.463 4.092 33 9.638c.75.754 1.415 1.564 1.997 2.423l.078.118a16.266 16.266 0 012.725 9.065A16.33 16.33 0 0133 32.851zm1.984-25.205c-7.486-7.5-19.657-7.5-27.142-.002-7.483 7.498-7.483 19.699 0 27.198 7.485 7.5 19.66 7.496 27.142-.002 7.493-7.497 7.493-19.698 0-27.194z"></path>
                    </g>
                    </svg>
                </div>
                {/* Form Container Note Wrapper */}
                <div className="signin__note-wrapper">
                    <h5 className="signin__note-title">
                    If you're a <strong>Binary.com</strong> user, log in with your <strong>Binary.com</strong> username and password
                    </h5>
                </div>
            </div>
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
                    type="password"
                    name="password"
                    handleChange={ handleChange }
                    handleBlur={ handleBlur }
                    value={ userValues.password }
                    error={ errors.password }
                    label="Password"
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
            Don't have an account yet?
            <Link className='account-a' to="/outh-signup"> Create a new account</Link>
            </p>
        </div>
    </>
  )
}

export default Signin