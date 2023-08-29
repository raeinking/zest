// import './khlood.css'
import high1 from '../../images/klood1.jpg'
import high2 from '../../images/khlood2.jpg'
import high3 from '../../images/khlood3.jpg'
import high4 from '../../images/khlood4.jpg'
import high5 from '../../images/khlood5.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import env from "react-dotenv";
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'
import axios from 'axios'



import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { BsFillLightningFill } from 'react-icons/bs'
import { BsBuildingGear } from 'react-icons/bs'
import { BiCctv } from 'react-icons/bi'
import { TbAirConditioning } from 'react-icons/tb'
import { FaChild, FaConciergeBell, FaParking } from 'react-icons/fa'
import { MdSettingsBackupRestore, MdOutlineElevator } from 'react-icons/md'
import { RiAlarmWarningFill } from 'react-icons/ri'
import { GiRingingAlarm, GiKidSlide } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'
import { IoChatbubblesOutline, IoRestaurantSharp } from 'react-icons/io5'
import { AiTwotoneShop } from 'react-icons/ai'
import { GiParkBench } from 'react-icons/gi'
import Lists from '../../thinkgsthatnotchanged/Lists'


const divStyle = {
  width: '100%',
  height: '400px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  margin: '30px 0 60px 0'
}
const slideImages = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },

];
const buttonStyle = {
  width: "30px",
  hight: "30px",
  border: '0px',
  backgroundColor: 'rgba(42, 42, 42, 0.41)',
  borderRadius: '4px',
  padding: '10px'


  // zIndex:200
};

const properties = {
  prevArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg>,
  nextArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg>
}


const Highclass = () => {


  const [brochureDownload, setBrochureDownload] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectname, setProjectname] = useState('highclass')








  const config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
  };




  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://node-email-sendersss.glitch.me/majidi", { email, name, phone, projectname }, config).then(window.open('HighClass_Brochure.pdf'))
  };




  const containerStyle = {
    width: '100%',
    height: '250px'
  };
  return (

    <>
      <section>





        {brochureDownload ? <div className='absoluteForm'>
          <div className='brochurForm'>
            <div className='brochurLeft khloodimage'></div>
            <div className='brochurRight'>
              <form style={{ width: '100%', maxWidth: '1000px', maxHeight: '1000px', display: 'flex', flexWrap: 'nowrap' }} onSubmit={handleSubmit}>
                <div className='closeButton' onClick={() => setBrochureDownload(false)}>X</div>

                <h2>Download Brochure</h2>
                <p>Please provide your details to download brochure</p>
                <label for='name'>Name</label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} name='name' placeholder='Your Name' required></input>
                <label for='email' >Email</label>
                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Your Email' required></input>
                <label for='phone'>Phone Number</label>
                <input value={phone} type='text' onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='Your Phone Number' required></input>
                <div style={{ display: 'flex', marginTop: 10, marginBottom: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                  <h5>to Contact our service please click this icon </h5>
                  <a href={"//api.whatsapp.com/send?phone=9647502552006&text=hello iam interested in highclass view can you send me details"}>
                    <img className='whatsapp' src={whatsapp} />
                  </a>
                </div>
                <input className='btnsubmit' type='submit'></input>
              </form>
            </div>
          </div>
        </div>
          :
          ''}














        <div className='imageofheaderhigh'><h1>High Class</h1></div>

        <section className='mainmajidi'>
          <div className='navleft'>
            <div>
              <h6>PROPERTY DEVELOPMENT</h6>
              <div className='navp'>
                <Lists/>
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='twothink'>
              <h3>High Classs</h3>
              <a className='BROCHURE' onClick={() => setBrochureDownload(true)}>DOWNLOAD BROCHURE</a>
            </div>
            <div className="">
              <Slide {...properties} autoplay={true} transitionDuration={500} canSwipe={true} infinite={true} arrows={true} pauseOnHover={true} duration={2000} >
                {/* <div className='slideimage'> */}
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    </div>
                  </div>
                ))}
                {/* </div> */}
              </Slide>
            </div>
            {/* <div key={index} className="tset" style={{'backgroundImage': `url(${slideImage.img})`}}></div> */}
            <div className='margin'>
              <h2>Overview</h2>
              <div className='overview'>
                <div className='borderandmargin'>
                  <h5>LOCATION</h5>
                  <h5>Baghdad - Saydiah - Near Al-Jadrieah Bridge</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>PROJECT TYPE</h5>
                  <h5>Residential</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>EXPECTED COMPLETION</h5>
                  <h5>March 2025</h5>
                </div>
              </div>
            </div>

            <div className='dis'>
              <h3>Description</h3>
              <p className='pdis'>
                <p>Introducing "HIGH CLASS Residency" in Baghdad's Saydiah district, near Al-Jadrieah Bridge. This upscale development comprises seven buildings, with Type A boasting 14 floors and Type B soaring to 20.</p>
                <br />
                <br />
                <p>The first 4 floors host a premium shopping area, while 4 floors below ground offer secure parking. These luxurious units redefine modern living with high-end finishes and abundant natural light.</p>
                <br />
                <br />
                <p>Enjoy the rooftop pool, landscaped gardens, and a fitness center. "HIGH CLASS Residency" is the epitome of sophisticated urban living, combining convenience and elegance effortlessly.</p>
              </p>
              <div>
                <h3>Facilities & Amenities</h3>
                <div className='iconsss'>
                  <div className='icon1'>
                    <div>
                      <div className='row'>
                        <div className='iconss'><BsFillLightningFill /></div>
                        <p>24-hour security</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><MdSettingsBackupRestore /></div>
                        <p>Backup power system</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><BsBuildingGear /></div>
                        <p>Building management system</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><BiCctv /></div>
                        <p>CCTV surveillance</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><TbAirConditioning /></div>
                        <p>Central air conditioning</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><FaChild /></div>
                        <p>Child day care center</p>
                      </div>
                    </div>
                  </div>
                  <div className='icon2'>
                    <div>
                      <div className='row'>
                        <div className='iconss'><FaConciergeBell /></div>
                        <p>Concierge service</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><MdOutlineElevator /></div>
                        <p>Elevators</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><RiAlarmWarningFill /></div>
                        <p>Emergency lighting system</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><GiRingingAlarm /></div>
                        <p>Fire alarm & fire fighting system</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><CgGym /></div>
                        <p>Gymnasium</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><GiKidSlide /></div>
                        <p>Kids play area</p>
                      </div>
                    </div>
                  </div>
                  <div className='icon3'>
                    <div>
                      <div className='row'>
                        <div className='iconss'><GiParkBench /></div>
                        <p>Outdoor sitting area</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><FaParking /></div>
                        <p>Residents parking</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><IoRestaurantSharp /></div>
                        <p>Restaurants & coffee shops</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><AiTwotoneShop /></div>
                        <p>Retail</p>
                      </div>
                    </div>
                    <div>
                      <div className='row'>
                        <div className='iconss'><IoChatbubblesOutline /></div>
                        <p>Shaded community spaces</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Location</h3>
              <div className='map'>
                <LoadScript googleMapsApiKey="AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: 33.263247, lng: 44.344671, position: { lat: 33.263247, lng: 44.344671 } }}
                    zoom={18}
                  >
                    <MarkerF position={{ lat: 33.263247, lng: 44.344671 }} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
            {/* <div class="parents">
                <a href='alwedd' class="div4">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                    <h3>Al Wed</h3>
                    <p>Baghdad</p>
                  </div>
                < /a>
                <a href='majidi-view' class="div5">
                <div className='imagemajidi'></div>
                  <div className='overlays'>
                  <h3>Majidi View</h3>
                  <p>Erbil</p>
                  </div>
                </a>
                <a href='bianca' class="div6">
                  <div className='imagebianca'></div>
                  <div className='overlays'>
                  <h3>Bianca</h3>
                  <p>UAE Dubai</p>
                  </div>
                </a>
              </div> */}
            <div>
              {/* <h3>Construction Updates</h3>
              <div className='imageproperty'>
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
              </div> */}
            </div>
          </div>
        </section>


      </section>
    </>
  )
}

export default Highclass
