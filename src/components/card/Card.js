import Logo from "../logo/Logo"
import InfoCard from "../infocard/InfoCard"
import Actives from "../actives/Actives"
import Social from "../social/Social"
import "./Card.css"
import React from 'react'

export default function Card() {
  return (
    <div className="card">
<Logo />
<div className="info-card-box">
<InfoCard />
<Actives />
<Social />
</div>

    </div>
  )
}
