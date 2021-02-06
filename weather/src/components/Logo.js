import React from 'react'
import WeatherLogo from '../images/61nuuPxUvaL.png'
import '../styles/Logo.css'

function Logo() {
    return (
        <div className="logoHolder">
            <img src={WeatherLogo}  />
            <h1>Weather</h1>
        </div>
    )
}

export default Logo
