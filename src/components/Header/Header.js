import React from 'react'
import '../Header/Header.css'
import logo from '../assets/images/logo-300x121.png'
import call from '../assets/images/call.png'

const Header = () => {
  return (
    <div>
        <nav class="d-flex  navbar navbar-expand-lg navbar-light bg-white">
<div>
  <a class="navbar-brand" href="#">
    <img src={logo} style={{height:'66px', width:'166px'}} alt=""/>
  </a>
</div>
    
  
    <div class="collapse d-flex navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav fw-bold mt-5 mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">E-Commerce</a>
            <a class="dropdown-item" href="#">Mobile App Development</a>
            <a class="dropdown-item" href="#">Software Development</a>
            <a class="dropdown-item" href="#">SEO Services</a>
            <a class="dropdown-item" href="#">Social Media Marketing</a>
            <a class="dropdown-item" href="#">Website Development</a>
            <a class="dropdown-item" href="#">Graphics Designing</a>
            <a class="dropdown-item" href="#">IT Consulting</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Digital Marketing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Business & Consulting
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li>
           <a href=""> <img src={call} style={{height:'25px',width:'25px', marginTop:'10px', marginLeft:'-30px'}} alt="" srcset="" /> </a>
        </li>
      </ul>
      
    </div>
  </nav>
    </div>
  )
}

export default Header