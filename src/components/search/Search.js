import "./Search.css"
import React from 'react'
import lupa from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/lup.png"
export default function Search() {
  return (
    <div className="search">
      <div className="search-icone">
      <img src={lupa} alt="##" />

<input className="search-input" type="text" placeholder="Search GitHub username" />
      </div>


      <button className="search-btn">Search</button>
    </div>
  )
}
