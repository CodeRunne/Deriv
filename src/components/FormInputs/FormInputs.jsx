import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './FormInputs.css';

function FormInputs({ label, error, formid, handleChange=f=>f, handleBlur=f=>f, ...otherInputProps }) {
  return (
    <div className='form-group' role="group">
          {
            otherInputProps.type === "checkbox" ?
              <div className="form-check-group">
                <div className="form-check-box">
                  <input 
                    { ...otherInputProps } 
                    aria-label={`form ${otherInputProps.name.toLowerCase()}`} 
                    id={formid} 
                    onChange={ handleChange } className="form-check" 
                    required 
                  />

                  <div className="form-check-svg">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>

                <span className="agreement-label">
                  <span>I agree to the</span> <Link to="/terms-and-conditions/#clients" target="_blank" size="14px" rel="noopener noreferrer" color="red">terms and conditions</Link>
                </span>
              </div>
            :
              <>
                <div className={` ${ error ?  "form-group-inputs has_error" : "form-group-inputs" }`}>
                  <input 
                    {...otherInputProps} 
                    aria-label={` form-${label.toLowerCase()} `} 
                    aria-placeholder={otherInputProps.placeholder || ''} 
                    onChange={ handleChange } 
                    onBlur={ handleBlur } 
                    id={formid} 
                    className="form-input"
                    required 
                  />
                  <label htmlFor={ otherInputProps.formid } className="form-label">{ label }</label>
                </div>  
                { error && <p className="form-error">{ error }</p> }
              </>
          }

    </div>
  )
}

export default FormInputs;