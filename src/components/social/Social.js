import React from 'react'
import "./Social.css"
import lokacion from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/Shape.png"
import tviter from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/tvit.png"
import path from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/002-url.png"
import bild from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/333.png"
export default function Social() {
  return (
    <div className='social-info-box'>
<div className="social-info-line">
  <img src={lokacion} alt="###" />
  <p>San Francisco </p>
</div>
<div className="social-info-line">
<img src={tviter} alt="###" />
  <p>Not Available </p>
</div>
<div className="social-info-line">
<img src={path} alt="###" />
  <p>https://githun.blog </p>
</div>
<div className="social-info-line">
<img src={bild} alt="###" />
  <p>@github </p>
</div>


    </div>
  )
}
