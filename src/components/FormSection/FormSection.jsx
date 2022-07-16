import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Stylesheet
import './FormSection.css';

// Components
import CustomButton from '../CustomButton/CustomButton';
import FormInputs from '../FormInputs/FormInputs';

import BannerPhone from '../../assets/static/images/banner-phone.png'

function FormSection() {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <section className='formSection'>
        <div className="formSection__container">
            <div className="formSection__wrapper">
                {/* Form Section Form */}
                <div className="formSection__form">
                    <div className="formSection__form__container">
                        <h2 type="section-title" width="100%" className="text">Join over 1 million traders worldwide</h2>
                        <br />
                        <p size="1.6rem" className="text">Sign up for ypur demo account now</p>

                        <form className="signup__form">
                            {/* Sign Up Form Wrapper */}
                            <div className="signup__form__wrapper">
                                {/* Sign Up Email Input */}
                                <FormInputs
                                    type="text"
                                    name="email"
                                    label="Email"
                                    formid="txtEmail"
                                    value={email}
                                    handleChange={({ target }) => setEmail(target.value) }
                                    placeholder="example@gmail.com"                      
                                />
                                    {/*placeholder="example@gmail.com"*/}
                            </div>

                            {/* Sign Up Form Submit Button */}
                            <CustomButton type="submit" btn_bg isDisabled={ email ? true : false } ids="signup__form__submit__button">Sign up</CustomButton>
                        </form>

                        {/* Form Section Checkbox */}
                        <div className="formSection__checkbox">
                            {/* Sign Up Email Input */}
                            <FormInputs
                                type="checkbox"
                                name="checkbox"
                                formid="txtCheckbox"
                                value={ checked }
                                handleChange={ () => setChecked(!checked) }
                            />
                        </div>

                        {/* Form Section Options */}
                        <div className="formSection__options">
                            <p className="typography formSection__options__text">Or sign up with</p>

                            {/* Form Section Button */}
                            <div className="formSection__options__button">
                                <CustomButton btn_no_bg>
                                    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" fill="#F2F3F4"/><path d="M30 20.234c0-.686-.064-1.371-.184-2.046h-9.613v3.867h5.491a4.589 4.589 0 0 1-2.035 3.017l3.296 2.512C28.887 25.842 30 23.28 30 20.234Z" fill="#3E82F1"/><path d="M23.66 25.074c-.91.601-2.08.955-3.456.955-2.66 0-4.907-1.759-5.71-4.125l-3.41 2.59c1.731 3.378 5.262 5.514 9.12 5.508 2.757 0 5.067-.893 6.753-2.422l-3.296-2.506Z" fill="#32A753"/><path d="m14.494 18.103-3.41-2.59a9.858 9.858 0 0 0 0 8.985l3.41-2.59a5.846 5.846 0 0 1 0-3.805Z" fill="#F9BB00"/><path d="M20.204 10c-3.858 0-7.389 2.135-9.12 5.513l3.41 2.59c.803-2.365 3.05-4.124 5.71-4.124 1.496 0 2.843.505 3.898 1.494l2.93-2.871C25.265 10.989 22.955 10 20.203 10Z" fill="#E74133"/></svg>
                                </CustomButton>

                                <CustomButton btn_no_bg>
                                    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" fill="#1877F2"/><circle cx="20" cy="20" r="10" fill="#fff"/><path d="M21.563 29.879v-6.91h2.33l.443-2.908h-2.773v-1.887c0-.796.387-1.571 1.63-1.571h1.26v-2.476s-1.144-.197-2.238-.197c-2.285 0-3.777 1.393-3.777 3.915v2.216h-2.54v2.909h2.54v6.909a10.073 10.073 0 0 0 3.125 0Z" fill="#1877F2"/></svg>
                                </CustomButton>

                                <CustomButton btn_no_bg>
                                    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" fill="#000"/><path d="M20.223 14.385c.832 0 1.875-.58 2.496-1.353.562-.7.972-1.68.972-2.658 0-.132-.011-.265-.035-.374-.925.036-2.039.64-2.707 1.45-.527.616-1.008 1.582-1.008 2.572 0 .145.024.29.036.338.058.013.152.025.246.025ZM17.293 29c1.137 0 1.64-.785 3.059-.785 1.441 0 1.757.76 3.023.76 1.242 0 2.074-1.183 2.86-2.343.878-1.328 1.242-2.633 1.265-2.693-.082-.024-2.46-1.027-2.46-3.841 0-2.44 1.874-3.54 1.98-3.624-1.243-1.836-3.13-1.884-3.645-1.884-1.395 0-2.531.87-3.246.87-.774 0-1.793-.822-3-.822-2.297 0-4.629 1.957-4.629 5.653 0 2.295.867 4.723 1.934 6.293.914 1.329 1.71 2.416 2.859 2.416Z" fill="#fff"/></svg>
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section Link Section */}
                <div className="formSection__link">
                    {/* Form Section Link Container */}
                    <div className="formSection__link__image__container">
                        {/* Form Section Link Image */}
                        <img 
                            src={BannerPhone}
                            alt="form_section_image"
                            className="formSection__link__image"
                            role="presentation"
                            style={{
                                width: '100%',
                                maxWidth: '100%', 
                                display: 'block', 
                                position: 'static',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Form Section Link */}
                    <Link to="/app" target="_blank" rel="noopener noreferrer nofollow" className="formSection__link__a">
                        <h2 size="4rem" width="330px" align="left" color="grey-8" mr="1.2rem" ml="-4rem" position="relative" className="typography">Get a taste of the Deriv experience</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"><path fill="#FFF" d="M19.166 16.135 8.6 26.72a2.002 2.002 0 0 0 0 2.828c.78.781 2.043.781 2.823 0l11.98-12c.78-.78.78-2.047 0-2.828l-11.98-12a1.994 1.994 0 0 0-2.823 0 2.002 2.002 0 0 0 0 2.828l10.567 10.586z"/></svg>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormSection