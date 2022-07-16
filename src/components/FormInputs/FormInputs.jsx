import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './FormInputs.css';

function FormInputs({ label, error, formid, togglePasswordType=f=>f, togglePassword, handleChange=f=>f, deleteValue, deleteInputValue=f=>f, handleBlur=f=>f, ...otherInputProps }) {
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
                    aria-label={`form-${label.toLowerCase()}`} 
                    aria-placeholder={otherInputProps.placeholder || ''} 
                    onChange={ handleChange } 
                    onBlur={ handleBlur } 
                    id={formid} 
                    className="form-input"
                    required 
                  />
                  <label htmlFor={ otherInputProps.formid } className={`form-label ${ error ? 'raised-label' : '' }`}>{ label }</label>
                  
                  { togglePassword && <p onClick={ togglePasswordType } className={`form-input-button ${ otherInputProps.type === "password" ? 'icon-hidden' : 'icon-visible' }`}></p> }

                  { 
                    deleteValue && <p className={`form-input-delete-button ${error ? 'show' : 'hide'}`} onClick={ deleteInputValue }>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0ZGNDQ0RiIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjRkY0NDRGIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNMCAwaDMydjMySDB6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4LjEyMSAxNmw0LjQ0IDQuNDRhMS41IDEuNSAwIDAxLTIuMTIyIDIuMTJMMTYgMTguMTIybC00LjQ0IDQuNDRhMS41IDEuNSAwIDAxLTIuMTItMi4xMjJMMTMuODc4IDE2bC00LjQ0LTQuNDRhMS41IDEuNSAwIDAxMi4xMjItMi4xMkwxNiAxMy44NzhsNC40NC00LjQ0YTEuNSAxLjUgMCAwMTIuMTIgMi4xMjJMMTguMTIyIDE2eiIvPjwvZz48L3N2Zz4=" alt="error icon" className="input__StyledError-sc-1w0rmz-2 hMTMzZ"/>
                      </p> 
                    }

                  {}
                </div>  
                { error && <p className="form-error">{ error }</p> }
              </>
          }

    </div>
  )
}

export default FormInputs;