import React from 'react'
// import { Link } from 'react-router-dom'

// Stylesheet
import './FormNavigation.css';

function FormNavigation({ helperClass="" }) {
  return (
    <nav className={`navigation ${helperClass} `}>
        {/* Navigation Logo */}
        <a href="/" className="navigation__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="27" viewBox="0 0 160 27">
                <defs>
                    <linearGradient id="fspki0leya" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6544"></stop>
                    <stop offset="100%" stopColor="#FF4449"></stop>
                    </linearGradient>
                </defs>
                <g fill="none">
                    <path fill="url(#fspki0leya)" d="M6.13 0v.03L16.314 13.5 0 26.97V27h16.474c4.807 0 8.979-3.373 10.06-8.136l1.363-6.008c.707-3.116-.021-6.39-1.98-8.894C23.96 1.46 20.985 0 17.84 0H6.13z"></path>
                    <path fill="#B51A31" d="M16.308 13.527L9.144 27 0 27z"></path>
                    <path fill="#FFF" d="M139.883 0l3.62 18.88L153.67 0h6.254L144.58 27h-5.123l-5.977-27h6.402zM49.931 0c8.279 0 13.01 5.782 11.702 13.327l-.013.076C60.31 20.95 53.57 26.81 45.282 26.81H35L39.647 0h10.284zm57.22 0c3.352 0 5.784.959 7.203 2.72 1.21 1.492 1.64 3.6 1.197 6.127l-.013.077c-.742 4.326-3.51 7.046-7.082 8.311l4.778 9.574h-6.78l-6.31-13.793h4.364c2.826 0 4.712-1.541 5.103-3.791l.014-.076c.438-2.523-1.07-3.825-3.895-3.825h-5.754l-3.727 21.485h-5.8L95.096 0h12.054zm21.62 0l-4.647 26.809h-5.802L122.972 0h5.8zm-39.4 0l-.912 5.247H74.336l-.945 5.438h9.118l-.91 5.247h-9.117l-.976 5.625h14.313l-.91 5.247H64.834L69.481 0h19.89zM49.008 5.324h-4.481l-2.804 16.161h4.484c4.744 0 8.51-3.255 9.334-8.005l.013-.077c.824-4.747-1.799-8.08-6.546-8.08z"></path>
                </g>
            </svg>
        </a>

        {/* Navigation Subheader */}
        <p className="navigation__subheader">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="17" viewBox="0 0 120 16">
                <path fill="#999" fillRule="evenodd" d="M7.393 0c1.09 0 2.012.249 2.765.746.754.498 1.302 1.231 1.645 2.2l.304.832L7.868 5.27c.013-.063.02-.145.02-.247 0-.1-.039-.268-.115-.502-.076-.233-.177-.42-.304-.559-.164-.177-.367-.265-.608-.265-.697 0-1.26.5-1.691 1.5-.292.697-.52 1.61-.685 2.737-.076.468-.126.81-.152 1.025-.076.558-.114 1.014-.114 1.368 0 .596.086 1.074.257 1.435.171.36.472.541.903.541.342 0 .693-.182 1.054-.545.362-.362.58-.78.656-1.252l.076-.497h-1.54l.514-3.204h5.835l-.248 1.46c-.342 2.225-1.02 4.007-2.033 5.346C8.489 15.204 6.905 16 4.942 16c-1.762 0-3.06-.625-3.897-1.875C.348 13.09 0 11.702 0 9.96c0-.252.01-.526.028-.823.02-.297.054-.615.105-.956.317-2.31 1.052-4.197 2.205-5.662C3.655.84 5.34 0 7.393 0zm107.894 0c1.089 0 2.01.249 2.765.746.753.498 1.302 1.231 1.644 2.2l.304.832-4.238 1.492c.012-.063.019-.145.019-.247 0-.1-.038-.268-.114-.502-.076-.233-.178-.42-.304-.559-.165-.177-.368-.265-.609-.265-.697 0-1.26.5-1.691 1.5-.292.697-.52 1.61-.684 2.737-.076.468-.127.81-.152 1.025-.076.558-.114 1.014-.114 1.368 0 .596.085 1.074.256 1.435.171.36.472.541.903.541.342 0 .694-.182 1.055-.545.36-.362.58-.78.656-1.252l.075-.497h-1.539l.513-3.204h5.835l-.247 1.46c-.342 2.225-1.02 4.007-2.034 5.346C116.382 15.204 114.8 16 112.835 16c-1.762 0-3.06-.625-3.896-1.875-.697-1.035-1.046-2.423-1.046-4.166 0-.252.01-.526.029-.823.019-.297.054-.615.104-.956.317-2.31 1.052-4.197 2.205-5.662C111.549.84 113.234 0 115.287 0zM22.94.265l-.57 3.697h-3.612l-.342 2.047h3.193l-.57 3.697h-3.212L17.467 12h3.572l-.59 3.697h-7.677L15.242.265h7.698zm10.51 0l-.59 3.697h-2.394l-1.9 11.735h-4.22l1.9-11.735-2.29-.001.617-3.696h8.877zm15.622 0l-.59 3.697h-2.394l-1.9 11.735h-4.22l1.9-11.735-2.29-.001.618-3.696h8.876zm6.215 0c1.989 0 3.427.36 4.314 1.08.773.63 1.16 1.552 1.16 2.764 0 .379-.039.789-.115 1.23-.14.809-.399 1.516-.779 2.121-.444.72-1.04 1.25-1.787 1.59l-.437.19 2.053 6.457H55.21l-.59-2.56c-.063-.315-.215-1.124-.456-2.426-.05-.329-.133-.777-.247-1.346-.076.569-.133 1.017-.17 1.346-.115.796-.242 1.611-.38 2.445-.065.43-.16.98-.286 1.65-.038.215-.095.512-.171.89H48.73L51.22.267h4.067zm16.572 0l.875 15.432h-4.296v-1.953h-2.832l-.684 1.953h-4.276L66.766.265h5.093zm8.819 0c1.976 0 3.478.65 4.504 1.95.9 1.137 1.35 2.614 1.35 4.431 0 .416-.032.878-.095 1.382-.305 2.285-1.097 4.09-2.376 5.415-1.445 1.503-3.396 2.254-5.854 2.254h-3.725L76.934.265h3.744zm13.456 0l-2.528 15.432h-4.181L89.933.265h4.2zm6.366 0l.894 4.257.95 5.108.152-1.892c.114-1.374.221-2.522.323-3.443.063-.593.171-1.457.323-2.592.038-.353.102-.832.19-1.438h3.991l-2.451 15.432h-3.916c-.076-.304-.133-.556-.17-.759-.317-1.415-.52-2.35-.609-2.805-.19-.935-.399-2.092-.627-3.47l-.304-1.914c-.076.77-.133 1.384-.171 1.839-.127 1.301-.247 2.35-.361 3.146-.114.797-.254 1.669-.418 2.617-.051.328-.133.777-.247 1.346h-3.954L96.547.265h3.953zM80.64 4.133h-.114L79.27 12h.133c.735 0 1.356-.415 1.863-1.245.418-.68.71-1.522.874-2.529.076-.44.114-.911.114-1.415 0-.792-.108-1.408-.323-1.849-.279-.553-.71-.83-1.292-.83zM68.666 4l-2.014 6.502h1.786L68.666 4zm-13.455-.474h-.362l-.608 3.848h.456c.457 0 .862-.22 1.217-.66.316-.39.52-.849.608-1.377.025-.176.038-.302.038-.377 0-.44-.13-.79-.39-1.047-.26-.258-.58-.387-.96-.387z"></path>
            </svg>
        </p>
    </nav>
  )
}

export default FormNavigation