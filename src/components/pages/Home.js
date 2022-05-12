import React from 'react'
import '../pages/Home.css'
import banner from '../assets/images/1-Home-Page-Banner-772-x-774.png'
import banner2 from '../assets/images/banner2.gif'

const Home = () => {
  return (
    <div className='d-flex'>
        <span className='text-wrapper'>
            <img src={banner2} alt="" srcset="" />
            <h1>Top Digital Marketing Company</h1>
            <h5>We bet you don’t spend much time on the 1st page of Google – so why should your website?</h5>
        </span>
        <span className='image-wrapper'>
            <img src={banner} alt="" srcset="" />
        </span>
    </div>
  )
}

export default Home