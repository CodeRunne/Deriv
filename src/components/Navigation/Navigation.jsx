import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Image
import LogoImg from '../../assets/static/images/logos/logo.png';

// Components
import CustomButton from '../CustomButton/CustomButton';
import NavigationLinks from './NavigationLinks';

// Stylesheet
import './Navigation.css';

function Navigation() {
  const [navColor, setNavColor] = useState(false);
  const [navOptionButton, setNavOptionButton] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  function changeNavColor() {
    let Y = window.scrollY;

    // Store window width
    setScreenWidth(window.screenWidth);

    if(window.scrollY >= 40) setNavColor(true);
    else setNavColor(false);

    if(Y >= 120) setNavOptionButton(true);
    else if(Y <= 30) setNavOptionButton(false);
  }

  console.log(screenWidth, navOptionButton)

  window.addEventListener("scroll", changeNavColor);

  return (
    <nav className={`${ navColor ? "navigation navigation-bg" : "navigation" }`}>
        {/* Navigation Wrapper */}
        <div className="navigation__wrapper">
            {/* Navigation Logo Container */}
            <div className="navigation__logo__container">
                {/* Navigation Hamburger */}                    
                <CustomButton btn_no_bg>
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-3-4h24v24H-3z"/><g fill="#FFF" fillRule="nonzero"><path d="M1 9h16a1 1 0 000-2H1a1 1 0 100 2zM1 2h16a1 1 0 000-2H1a1 1 0 100 2zM1 16h16a1 1 0 000-2H1a1 1 0 000 2z"/></g></g></svg>
                </CustomButton>

                {/* Navigation Logo */}
                <Link to="/" className="navigation__logo__imageLink" aria-current="page" aria-label="Home">
                    <figure>
                        <img src={ LogoImg } role="presentation" alt="deriv logo"/>
                    </figure>
                </Link>

                {/* Navigation Sepetator Line */}
                <div className="navigation__logo__seperator__line"></div>

                {/* Navigation Logo Subs */}
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTciPjxwYXRoIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzkzLjM4OWMxLjA5IDAgMi4wMTIuMjUyIDIuNzY1Ljc1Ni43NTQuNTA1IDEuMzAyIDEuMjQ4IDEuNjQ1IDIuMjMxbC4zMDQuODQzLTQuMjM5IDEuNTEzYy4wMTMtLjA2NC4wMi0uMTQ3LjAyLS4yNSAwLS4xMDItLjAzOS0uMjcyLS4xMTUtLjUxYTEuNTQgMS41NCAwIDAwLS4zMDQtLjU2Ni43OS43OSAwIDAwLS42MDgtLjI3Yy0uNjk3IDAtMS4yNi41MDgtMS42OTEgMS41MjItLjI5Mi43MDctLjUyIDEuNjMyLS42ODUgMi43NzVhMjguODggMjguODggMCAwMC0uMTUyIDEuMDQgMTAuODIxIDEwLjgyMSAwIDAwLS4xMTQgMS4zODdjMCAuNjAzLjA4NiAxLjA4OC4yNTcgMS40NTQuMTcxLjM2Ni40NzIuNTQ5LjkwMy41NDkuMzQyIDAgLjY5My0uMTg0IDEuMDU0LS41NTIuMzYyLS4zNjguNTgtLjc5Mi42NTYtMS4yN2wuMDc2LS41MDRoLTEuNTRMNi4xNCA3LjI5aDUuODM1bC0uMjQ4IDEuNDhjLS4zNDIgMi4yNTUtMS4wMiA0LjA2Mi0yLjAzMyA1LjQyLTEuMjA0IDEuNjE1LTIuNzg4IDIuNDIyLTQuNzUxIDIuNDIyLTEuNzYyIDAtMy4wNi0uNjMzLTMuODk3LTEuOUMuMzQ4IDEzLjY2IDAgMTIuMjUyIDAgMTAuNDg2YTEyLjIwMyAxMi4yMDMgMCAwMS4xMzMtMS44MDVjLjMxNy0yLjM0MiAxLjA1Mi00LjI1NSAyLjIwNS01Ljc0QzMuNjU1IDEuMjQgNS4zNC4zOSA3LjM5My4zOXptMTA3Ljg5NCAwYzEuMDg5IDAgMi4wMS4yNTIgMi43NjUuNzU2Ljc1My41MDUgMS4zMDIgMS4yNDggMS42NDQgMi4yMzFsLjMwNC44NDMtNC4yMzggMS41MTNhMS4zOSAxLjM5IDAgMDAuMDE5LS4yNWMwLS4xMDItLjAzOC0uMjcyLS4xMTQtLjUxYTEuNTU1IDEuNTU1IDAgMDAtLjMwNC0uNTY2Ljc5NC43OTQgMCAwMC0uNjA5LS4yN2MtLjY5NyAwLTEuMjYuNTA4LTEuNjkxIDEuNTIyLS4yOTIuNzA3LS41MiAxLjYzMi0uNjg0IDIuNzc1YTI2LjczIDI2LjczIDAgMDAtLjE1MiAxLjA0IDEwLjgyMSAxMC44MjEgMCAwMC0uMTE0IDEuMzg3YzAgLjYwMy4wODUgMS4wODguMjU2IDEuNDU0LjE3MS4zNjYuNDcyLjU0OS45MDMuNTQ5LjM0MiAwIC42OTQtLjE4NCAxLjA1NS0uNTUyLjM2LS4zNjguNTgtLjc5Mi42NTYtMS4yN2wuMDc1LS41MDRoLTEuNTM5bC41MTMtMy4yNDhoNS44MzVsLS4yNDcgMS40OGMtLjM0MiAyLjI1NS0xLjAyIDQuMDYyLTIuMDM0IDUuNDItMS4yMDQgMS42MTUtMi43ODcgMi40MjItNC43NTEgMi40MjItMS43NjIgMC0zLjA2LS42MzMtMy44OTYtMS45LS42OTctMS4wNS0xLjA0Ni0yLjQ1OC0xLjA0Ni00LjIyNGExMi4xNzggMTIuMTc4IDAgMDEuMTMzLTEuODA1Yy4zMTctMi4zNDIgMS4wNTItNC4yNTUgMi4yMDUtNS43NEMxMTEuNTQ5IDEuMjQgMTEzLjIzNC4zOSAxMTUuMjg3LjM5ek0yMi45NC42NThsLS41NyAzLjc0OGgtMy42MTJsLS4zNDIgMi4wNzZoMy4xOTNsLS41NyAzLjc0OGgtMy4yMTJsLS4zNiAyLjMyNWgzLjU3MmwtLjU5IDMuNzQ4aC03LjY3N0wxNS4yNDIuNjU4aDcuNjk4em0xMC41MSAwbC0uNTkgMy43NDhoLTIuMzk0bC0xLjkgMTEuODk3aC00LjIybDEuOS0xMS44OTctMi4yOS0uMDAyLjYxNy0zLjc0Nmg4Ljg3N3ptMTUuNjIyIDBsLS41OSAzLjc0OGgtMi4zOTRsLTEuOSAxMS44OTdoLTQuMjJsMS45LTExLjg5Ny0yLjI5LS4wMDIuNjE4LTMuNzQ2aDguODc2em02LjIxNSAwYzEuOTg5IDAgMy40MjcuMzY1IDQuMzE0IDEuMDk0Ljc3My42NCAxLjE2IDEuNTc0IDEuMTYgMi44MDMgMCAuMzg0LS4wMzkuOC0uMTE1IDEuMjQ4LS4xNC44MTktLjM5OSAxLjUzNi0uNzc5IDIuMTVhNC4wNCA0LjA0IDAgMDEtMS43ODcgMS42MTJsLS40MzcuMTkyIDIuMDUzIDYuNTQ3SDU1LjIxbC0uNTktMi41OTVjLS4wNjMtLjMyLS4yMTUtMS4xNC0uNDU2LTIuNDYtLjA1LS4zMzMtLjEzMy0uNzg5LS4yNDctMS4zNjVhNzIuNTUgNzIuNTUgMCAwMC0uMTcgMS4zNjRjLS4xMTUuODA4LS4yNDIgMS42MzQtLjM4IDIuNDgtLjA2NS40MzYtLjE2Ljk5My0uMjg2IDEuNjcyLS4wMzguMjE4LS4wOTUuNTItLjE3MS45MDRoLTQuMThMNTEuMjIuNjU4aDQuMDY3em0xNi41NzIgMGwuODc1IDE1LjY0NmgtNC4yOTZ2LTEuOThoLTIuODMybC0uNjg0IDEuOThoLTQuMjc2TDY2Ljc2Ni42NThoNS4wOTN6bTguODE5IDBjMS45NzYgMCAzLjQ3OC42NTkgNC41MDQgMS45NzcuOSAxLjE1MiAxLjM1IDIuNjUgMS4zNSA0LjQ5MiAwIC40MjItLjAzMi44OS0uMDk1IDEuNDAyLS4zMDUgMi4zMTYtMS4wOTcgNC4xNDYtMi4zNzYgNS40OS0xLjQ0NSAxLjUyMy0zLjM5NiAyLjI4NC01Ljg1NCAyLjI4NGgtMy43MjVMNzYuOTM0LjY1OGgzLjc0NHptMTMuNDU2IDBsLTIuNTI4IDE1LjY0NWgtNC4xODFMODkuOTMzLjY1OGg0LjJ6bTYuMzY2IDBsLjg5NCA0LjMxNi45NSA1LjE4LjE1Mi0xLjkyYy4xMTQtMS4zOTMuMjIxLTIuNTU3LjMyMy0zLjQ5LjA2My0uNjAxLjE3MS0xLjQ3Ny4zMjMtMi42MjguMDM4LS4zNTguMTAyLS44NDQuMTktMS40NThoMy45OTFsLTIuNDUxIDE1LjY0NWgtMy45MTZhMTIuNzMgMTIuNzMgMCAwMS0uMTctLjc2OGMtLjMxNy0xLjQzNS0uNTItMi4zODQtLjYwOS0yLjg0NS0uMTktLjk0OC0uMzk5LTIuMTItLjYyNy0zLjUxN2wtLjMwNC0xLjk0MmMtLjA3Ni43ODItLjEzMyAxLjQwNC0uMTcxIDEuODY1YTc1LjY1MyA3NS42NTMgMCAwMS0uMzYxIDMuMTkgOTMuODIgOTMuODIgMCAwMS0uNDE4IDIuNjUzIDMzLjY0IDMzLjY0IDAgMDEtLjI0NyAxLjM2NGgtMy45NTRMOTYuNTQ3LjY1OGgzLjk1M3ptLTE5Ljg2IDMuOTJoLS4xMTRsLTEuMjU1IDcuOTc3aC4xMzNjLjczNSAwIDEuMzU2LS40MiAxLjg2My0xLjI2Mi40MTgtLjY4OC43MS0xLjU0My44NzQtMi41NjMuMDc2LS40NDcuMTE0LS45MjUuMTE0LTEuNDM1IDAtLjgwMy0uMTA4LTEuNDI4LS4zMjMtMS44NzUtLjI3OS0uNTYtLjcxLS44NDEtMS4yOTItLjg0MXptLTExLjk3NC0uMTM0bC0yLjAxNCA2LjU5M2gxLjc4NmwuMjI4LTYuNTkzem0tMTMuNDU1LS40OGgtLjM2MmwtLjYwOCAzLjkwMWguNDU2Yy40NTcgMCAuODYyLS4yMjMgMS4yMTctLjY2OS4zMTYtLjM5NS41Mi0uODYuNjA4LTEuMzk2LjAyNS0uMTc4LjAzOC0uMzA2LjAzOC0uMzgzIDAtLjQ0Ni0uMTMtLjgtLjM5LTEuMDZhMS4zIDEuMyAwIDAwLS45Ni0uMzkzeiIvPjwvc3ZnPg==" alt="get trading" className="navigation__logo__subs"/>
            </div>

            {/* Navigation Items */}
            <ul className='navigation__items'>
                {/* Navigation Links */}
                { 
                    ['Trades', 'About', 'Markets', 'Resources'].map((link, id) => <NavigationLinks key={ `${link}_${id}` } link={ link } />
                )}
                
            </ul>

            {/* Navigation Options */}
            <div className={`${navOptionButton ? "navigation__options show" : "navigation__options"}`}>
                {/* Site Language Dropdown */}
                {/*<Dropdown />
                <h1>Dropdown</h1>*/}

                {/* Site Login Button */}
                <CustomButton btn_border>
                    Log in
                </CustomButton>
                
                {/* Site Redister Button */}
                <CustomButton btn_bg >
                    Create free demo account
                </CustomButton>
            </div>

            {/* Offset */}
            {/* <Offset /> */}
        </div>
    </nav>
  )
}

export default Navigation