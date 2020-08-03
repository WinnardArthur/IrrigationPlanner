import React from 'react'
import './hero.css'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div className="imgContainer">
        <img src={require("../../images/farm.jpg")} alt="hero"/>
    </div>
   )

 }

export default Hero