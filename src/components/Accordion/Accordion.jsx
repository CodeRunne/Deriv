import React from 'react'
import { Link } from 'react-router-dom';
// import MediaBox from '../MediaBox/MediaBox';

// Stylesheet
import './Accordion.css';

function Accordion() {
  return (
    <div className='accordion'>
        {/* Accordion Header */}
        <div role="button" aria-expanded="false" className='accordion__header'>
            {/* Accordion Header Title */}
            <p className="text-3">Trade</p>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAyNGgyNFYwSDB6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNS40MzcgMTQuNjcxYTEuNSAxLjUgMCAxIDEtMS44NzQtMi4zNDJsNy41LTZhMS41IDEuNSAwIDAgMSAxLjg3NCAwbDcuNSA2YTEuNSAxLjUgMCAwIDEtMS44NzQgMi4zNDJMMTIgOS40MjFsLTYuNTYzIDUuMjV6Ii8+PC9nPjwvc3ZnPg" alt="ChevronThick" height="32" width="32" />
        </div>

        {/* Accordion Content */}
        <div className='accordion__content'>
            {/* Accordion Content */}
            <div className="accordion__content__container">
                {/* Accordion Content Title */}
                <p color="grey-5" className='text-3'>Trade 
                Types</p>

                {/* Accordion Content Boxes */}
                <div className="accordion__content__box">
                    {/* Accordion Content Box Link */}
                    <Link to="/trade-types/cfds" aria-label="CFDs" disabled={false} className='localized__link' style={{
                        textDecoration: 'none',
                        width: '100%',
                        maxWidth: '33.6rem',
                        position: 'relative'
                    }}>
                        {/* Accordion Content Box Media 
                        // <MediaBox 
                        //     customClasses="accordion__content__box"
                        //     image='image'
                        //     contents={ {name: 'CFDs', text: 'Trade with leverage and tight spreads for better returns on successful trades.'} }
                        />*/} 
                        {/* Accordion Content Box Item */}
                        <div className="accordion__content__box__item" direction="row">
                            {/* Accordion Content Box Item SVG Container */}
                            <div className="accordion__content__box__item__image">
                                {/* Accordion Content Box Item SVG */}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzMzNjU4QSIgZD0iTTI2IDBhNiA2IDAgMCAxIDYgNnYyMGE2IDYgMCAwIDEtNiA2SDZhNiA2IDAgMCAxLTYtNlY2YTYgNiAwIDAgMSA2LTZoMjB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjUgMThhNC41IDQuNSAwIDEgMSAwIDkgNC41IDQuNSAwIDAgMSAwLTl6bTAgMmEyLjUgMi41IDAgMCAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNXpNOS41IDVhNC41IDQuNSAwIDEgMSAwIDkgNC41IDQuNSAwIDAgMSAwLTl6bTAgMmEyLjUgMi41IDAgMCAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNXptMTQuNzkzLS43MDdhMSAxIDAgMCAxIDEuNDk3IDEuMzJsLS4wODMuMDk0LTE4IDE4YTEgMSAwIDAgMS0xLjQ5Ny0xLjMybC4wODMtLjA5NCAxOC0xOHoiLz48L2c+PC9zdmc+" alt="" width="32" height="32" />
                            </div>

                            {/* Accordion Content Box Item Content */}
                            <div className="accordion__content__box__item__content">
                                <span size="var(--text-size-s)">CFDs</span>
                                <p color="grey-5" className='text-3'>Trade with leverage and tight spreads for better returns on successful trades</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Accordion Content Boxes */}
                <div className="accordion__content__box">
                    {/* Accordion Content Box Link */}
                    <Link to="/trade-types/multipliers" aria-label="CFDs" disabled={false} className='localized__link' style={{
                        textDecoration: 'none',
                        width: '100%',
                        maxWidth: '33.6rem',
                        position: 'relative'
                    }}>
                        {/* Accordion Content Box Item */}
                        <div className="accordion__content__box__item" direction="row">
                            {/* Accordion Content Box Item SVG Container */}
                            <div className="accordion__content__box__item__image">
                                {/* Accordion Content Box Item SVG */}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMzM2NThBIiBkPSJNMjYgMGE2IDYgMCAwIDEgNiA2djIwYTYgNiAwIDAgMS02IDZINmE2IDYgMCAwIDEtNi02VjZhNiA2IDAgMCAxIDYtNmgyMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03LjI5MyA3LjI5M2ExIDEgMCAwIDEgMS40MTQgMEwxNiAxNC41ODVsNy4yOTMtNy4yOTJhMSAxIDAgMCAxIDEuNDk3IDEuMzJsLS4wODMuMDk0TDE3LjQxNSAxNmw3LjI5MiA3LjI5My4wODMuMDk0YTEgMSAwIDAgMS0xLjQ5NyAxLjMyTDE2IDE3LjQxNWwtNy4yOTMgNy4yOTJhMSAxIDAgMCAxLTEuNDk3LTEuMzJsLjA4My0uMDk0TDE0LjU4NSAxNiA3LjI5MyA4LjcwN2wtLjA4My0uMDk0YTEgMSAwIDAgMSAuMDgzLTEuMzJ6Ii8+PC9nPjwvc3ZnPg==" alt="" width="32" height="32" />
                            </div>

                            {/* Accordion Content Box Item Content */}
                            <div className="accordion__content__box__item__content">
                                <span size="var(--text-size-s)">Multipliers</span>
                                <p color="grey-5" className='text-3'>Combine the upside of CFDs with the simplicity of options.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                
                {/* Divider */}
                <hr className="divider" width="100%" height="1px" color="grey-8"></hr>
                
                {/* Accordion Content Title */}
                <p className='text-3' size="14px" color="grey-5">Trading Platform</p>

                {/* Accordion Content Boxes */}
                <div className="accordion__content__box">
                    {/* Accordion Content Box Link */}
                    <Link to="/dmt5" aria-label="DMT5" disabled={false} className='localized__link' style={{
                        textDecoration: 'none',
                        width: '100%',
                        maxWidth: '33.6rem',
                        position: 'relative'
                    }}>
                        {/* Accordion Content Box Item */}
                        <div className="accordion__content__box__item" direction="row">
                            {/* Accordion Content Box Item SVG Container */}
                            <div className="accordion__content__box__item__image">
                                {/* Accordion Content Box Item SVG */}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiM4NUFDQjAiIGZpbGwtcnVsZT0ibm9uemVybyIgcng9IjYiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOC41NzUgMTAuNzQ1bC0yLjI4LTQuNTY1YS4zMy4zMyAwIDAwLS41OSAwbC0yLjI2NSA0LjUzTDE2IDE1Ljg4bDIuNTc1LTUuMTM1em0tNS42OSAzLjI4NWwxLjQ3IDIuOTctLjIyLjQzLTEgMkgxMC4xOWwxLjU5LTMuMTc1IDEuMTA1LTIuMjF2LS4wMTV6bTAtMi4ybC0yIDQtMi4zMDUgNC42MWg1LjE1TDE1IDE3Ljg1NWwuNDU1LS44NTUtMi41NjUtNS4xODUtLjAwNS4wMTV6bTUuODYgOS41NmwyLjI5IDQuNjFoNC42MzVhLjMzLjMzIDAgMDAuMjk1LS41TDIzLjkgMjEuMzloLTUuMTU1em0uMzgtNy4zMzVsMS4wOTUgMi4xODUgMS41OSAzLjE3NWgtMi45NEwxNy42NiAxN2wxLjQ2NS0yLjkzNXYtLjAxem0wLTIuMTk1TDE2LjU2IDE3bDEuNjk1IDMuNDJoNS4xNUwyMS4xIDE1Ljc5NWwtMi0zLjk0NS4wMjUuMDF6bS01Ljg3IDkuNTNIOC4xbC0yLjA2NSA0LjEzNWEuMzMuMzMgMCAwMC4yOTUuNWg0LjYybDIuMzA1LTQuNjM1em0zLjc3NS45OUwxOC4zNCAyNWgtNC42OWwxLjMyLTIuNjM1aDIuMDZ2LjAxNXptLjYxNS0xLjAxNUgxNC4zNkwxMi4wNTUgMjZoNy44OGwtMi4yOS00LjYxdi0uMDI1eiIvPjxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48cGF0aCBkPSJNMCAwaDMydjMySDB6Ii8+PC9nPjwvc3ZnPg==" alt="" width="32" height="32" />
                            </div>

                            {/* Accordion Content Box Item Content */}
                            <div className="accordion__content__box__item__content">
                                <span size="var(--text-size-s)">Deriv MT5</span>
                                <p color="grey-5" className='text-3'>Trade on Deriv MT5, the all-in-one CFD trading platform.</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Accordion Content Boxes */}
                <div className="accordion__content__box">
                    {/* Accordion Content Box Link */}
                    <Link to="/dtrader" aria-label="DTrader" disabled={false} className='localized__link' style={{
                        textDecoration: 'none',
                        width: '100%',
                        maxWidth: '33.6rem',
                        position: 'relative'
                    }}>
                        {/* Accordion Content Box Item */}
                        <div className="accordion__content__box__item" direction="row">
                            {/* Accordion Content Box Item SVG Container */}
                            <div className="accordion__content__box__item__image">
                                {/* Accordion Content Box Item SVG */}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkY0NDRGIiBkPSJNNS45ODIgMEgyNS45MmE1Ljk4MiA1Ljk4MiAwIDAxNS45ODEgNS45ODJWMjUuOTJhNS45ODIgNS45ODIgMCAwMS01Ljk4MSA1Ljk4MUg1Ljk4QTUuOTgyIDUuOTgyIDAgMDEwIDI1LjkyMVY1Ljk4QTUuOTgyIDUuOTgyIDAgMDE1Ljk4Mi4wMDIiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNy44MjYgNS45ODJMNi43NiA5LjMxMmw1LjMyNCA2LjU1LTUuMzM0IDYuNDkuODU4IDMuNTY5IDguMjY0LTEwLjA1eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNS4zOTMgNS45ODJIOS40NWwyLjQ4NCAzLjA1aDMuNDQ4YTYuOTc5IDYuOTc5IDAgMDE2LjgzOSA2Ljk4IDYuOTggNi45OCAwIDAxLTYuODM5IDYuOTc4aC0zLjczNGwtMi40MSAyLjkzaDYuMTQ0YzUuNDQ5LS4wNiA5LjgyLTQuNTIgOS43Ny05Ljk2OS4wNS01LjQ0NS00LjMxNS05LjkwMy05Ljc2LTkuOTciLz48L2c+PC9zdmc+" alt="" width="32" height="32" />
                            </div>

                            {/* Accordion Content Box Item Content */}
                            <div className="accordion__content__box__item__content">
                                <span size="var(--text-size-s)">DTrader</span>
                                <p color="grey-5" className='text-3'>A whole new trading experience on a powerful yet easy to use platform.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion