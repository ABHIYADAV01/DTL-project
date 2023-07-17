import React from 'react'
import img2 from "../../assests/rvlogo2.png";
import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item" id="img2">
      <img id="size" src={img2} alt="rvlogo" />   
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" id="home" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Achievements</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Login</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}
