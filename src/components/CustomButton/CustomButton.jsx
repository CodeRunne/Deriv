import React from 'react'
import PropTypes from 'prop-types';

// Functions
import TruncateString from '../../assets/js/TruncateString';

// Stylesheet
import './CustomButton.css';

function CustomButton({ children, type="button", btn_bg, btn_border, btn_no_bg, btn_ter, handleClick=f=>f, isDisabled, ids="", helperClass="" }) {
  // Custom Classes
  const customClasses = `${TruncateString(btn_bg, "secondary")} ${TruncateString(btn_border, "primary")} ${TruncateString(btn_no_bg, "trans")} ${TruncateString(btn_ter, "tertiary")}`;

  return (
    <button type={ type } className={`button ${customClasses} ${helperClass}`} onClick={ handleClick } aria-disabled={isDisabled} disabled={isDisabled} id={`${ids}`} >
        { children }
    </button>
  )
}

CustomButton.propTypes = {
  ids: PropTypes.string,
  btn_bg: PropTypes.bool,
  btn_border: PropTypes.bool,
  btn_no_bg: PropTypes.bool,
  handleClick: PropTypes.func
}

export default CustomButton