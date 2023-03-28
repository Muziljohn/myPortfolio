import React from 'react'
import "./navbar.css"
export default function navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">
               Syed Muzil Hassan  
            </div>
            <span>Toogle</span>
        </div>
        <div className="n-right">
            <div className="n-list">

            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
            </ul>
            </div>
            <button className='n-button'>Contact Us</button>
        </div>
      
    </div>
  )
}
