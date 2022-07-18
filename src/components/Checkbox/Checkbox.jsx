import React from 'react'
import { Link } from 'react-router-dom';

// Stylesheet
import './Checkbox.css';

function Checkbox({ formid, handleChange=f=>f, handleBlur=f=>f, ...otherInputProps }) {
  return (
    <label className="form-check-group">
        <div className="form-check-box">
            <input 
                type="checkbox"
                { ...otherInputProps } 
                aria-label={`form ${otherInputProps.name.toLowerCase()}`} 
                id={formid} 
                onChange={ handleChange } 
                onBlur={ handleBlur }
                className="form-check" 
                required 
            />

            <div className="form-check-svg">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
        </div>

        <span className="agreement-label">
            <span>I agree to the</span> <Link to="/terms-and-conditions/#clients" target="_blank" size="14px" rel="noopener noreferrer" color="red">terms and conditions</Link>
        </span>
    </label>
  )
}

export default Checkbox