import React from "react"
import Heading from "../../common/Heading"
import { useLocation } from "react-router-dom";
import "./hero.css"
import search from '../../images/search.jpg'
import Snowfall from 'react-snowfall'


const Hero = () => {
  const location = useLocation();
  const paths = window.location.pathname;

  return (
    <>
    {paths == '/' ? 
      <section className='hero'>
      <div className="snow">
    <Snowfall />
  </div>
          <h1 title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'>Zest Property</h1>
          <p>Find Your Next Home In Zest Property.</p>
          <form className='flexsearch'>
            {/* <div className='box'>
              <input className="inputs" type='text' placeholder='name' />
            </div> */}
            <div className='box'>
              <select className="inputs" name="city" id="city">
                <option selected disabled value="city">City</option>
                <option value="Erbil">Erbil</option>
                {/* <option value="Sulaymaniyah">Sulaymaniyah</option> */}
                <option value="Baghdad">Baghdad</option>
                <option value="Kirkuk">Kirkuk</option>
              </select>
            </div>
            {/* <div className='box'>
              <select className="inputs" name="property-type" id="property-type">
                <option selected disabled value="Property Type">Property Type</option>
                <option value="Commercial land">Commercial land</option>
                <option value="Medical Center">Medical Center</option>
                <option value="Palace">Palace</option>
                <option value="Residential land">Residential land</option>
                <option value="Restaurant land">Restaurant</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Building">Building</option>
                <option value="Villa">Villa</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Hotel">Hotel</option>
                <option value="Shop">Shop</option>
                <option value="Factory">Factory</option>
                <option value="Farm">Farm</option>
                <option value="School">School</option>
                <option value="Market">Market</option>
                <option value="Gallery">Gallery</option>
                <option value="Office">Office</option>
                <option value="Store">Store</option>
                <option value="Store">Compound</option>
                <option value="Duplex">Duplex</option>
                <option value="Full floor">Full floor</option>
              </select>
            </div> */}
            <div className='box'>
              <select className="inputs" name="purpose" id="purpose">
                <option selected disabled value="Project">Project</option>
                {/* <option value="Pavilion">Pavilion</option> */}
                <option value="Lalav Sky View">Lalav Sky View</option>
                <option value="Lalav vinus towers">Lalav vinus towers</option>
                <option value="Lalav nova towers">Lalav nova towers</option>

              </select>
            </div>
            <div className='box'>
              <select className="inputs" name="projectinput" id="projectinput">
                <option selected disabled value="Erbil">Purpose</option>
                <option value="Erbil">Buy</option>
                <option value="Sulaymaniyah">Rent</option>
              </select>
            </div>
            {/* <div className=' advance'>
              <a href="#">Advance Filter</a>
            </div> */}
            <a href="properties" className='btn1'>
                <img className="search" src={search}></img>
            </a>
          </form>
      </section>
      :       
      <section className='hero'>
      <div className="snow">
    <Snowfall />
  </div>,
          <h1 className="ar">شركة زيست</h1>
          <p className="ar">فرصة لعرض احدث واجدد العقارات القريبة منك</p>
          <form className='flexsearch'>
            <div className='box'>
              <select className="inputs" name="city" id="city">
                <option selected disabled value="city">المحافظة</option>
                <option value="Erbil">أربیل</option>
                <option value="Baghdad">بغداد</option>
                <option value="Kirkuk">کركوک</option>
              </select>
            </div>
            {/* <div className='box'>
              <select className="inputs" name="property-type" id="property-type">
                <option selected disabled value="Property Type">Property Type</option>
                <option value="Commercial land">Commercial land</option>
                <option value="Medical Center">Medical Center</option>
                <option value="Palace">Palace</option>
                <option value="Residential land">Residential land</option>
                <option value="Restaurant land">Restaurant</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Building">Building</option>
                <option value="Villa">Villa</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Hotel">Hotel</option>
                <option value="Shop">Shop</option>
                <option value="Factory">Factory</option>
                <option value="Farm">Farm</option>
                <option value="School">School</option>
                <option value="Market">Market</option>
                <option value="Gallery">Gallery</option>
                <option value="Office">Office</option>
                <option value="Store">Store</option>
                <option value="Store">Compound</option>
                <option value="Duplex">Duplex</option>
                <option value="Full floor">Full floor</option>
              </select>
            </div> */}
            <div className='box'>
              <select className="inputs" name="قصد" id="قصد">
                <option className="ar" selected disabled value="مشروع">مشروع</option>
                {/* <option value="Pavilion">Pavilion</option> */}
                <option className="ar" value="لالاف سكاي فيو">لالاف سكاي فيو</option>
                <option className="ar" value="أبراج لالاف فينوس">أبراج لالاف فينوس</option>
                <option className="ar" value="أبراج لالاف نوفا">أبراج لالاف نوفا</option>
              </select>
            </div>
            <div className='box'>
              <select className="inputs" name="projectinput" id="projectinput">
                <option className="ar" selected disabled value="قصد">بعث عن</option>
                <option className="ar" value="للبيع">للبيع</option>
                <option className="ar" value="للإجار">للإجار</option>
              </select>
            </div>
            {/* <div className=' advance'>
              <a href="#">Advance Filter</a>
            </div> */}
            <a href="/ar/properties" className='btn1'>
                <img className="search" src={search}></img>
            </a>
          </form>
      </section>
      }
    </>
  )
}

export default Hero