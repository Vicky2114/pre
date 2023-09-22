import React from 'react'
import NavBar from '../components/NavBar'
import "../assets/css/Home.css"

import sc from "../assets/images/sc.jpeg"
import Slider from '../components/Slider'
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="utils">
        <i className="fas fa-bell"></i>
        <i className="fas fa-calendar-days"></i>
      </div>
      <div class="supImgContainer">
        <img src={sc} className="scImage" />
        <div className="supContent">
          <p>Previously, parties that need to show their court order to others may be asked to provide a certified true copy .</p>
          <p>Previously, parties that need to show their court order to others may be asked to provide a certified true copy .</p>
        </div>
      </div>
      <Slider/>
    </div>


  )
}

export default Home