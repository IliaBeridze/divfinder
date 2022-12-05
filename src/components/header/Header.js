import React from 'react'
import "./Header.css"
import Moon from "C:/Users/berid/OneDrive/Desktop/divfinder/src/components/icone/Path.png"
export default function Header() {
  return (
    <div className='header'>
      <div className="divfinder">devfinder</div>
      <div className="darck-mode">DARK  <img src={Moon} alt="" /></div>
    </div>
  )
}
