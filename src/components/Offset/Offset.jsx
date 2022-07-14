import React from 'react'
import Accordion from '../Accordion/Accordion';

// Stylesheet
import './Offset.css';

function Offset() {
  return (
    <aside className='offset'>
        <div className='offset__container'>
            <Accordion />
        </div>
    </aside>
  )
}

export default Offset;