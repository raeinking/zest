import '../khlood/khlood.css'
import alweddb from '../../images/Bianca-park.jpg'
import alwedd1 from '../../images/Bianca-water.jpg'
import alweddc from '../../images/Bianca-water.jpg'
import alweddh from '../../images/Bianca-night.jpg'
import alweddicon from '../../images/Biancaicon.jpg'
import alweddh2 from '../../images/Bianca-garden.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';


import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './last.jpg'

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import {BsFillLightningFill} from 'react-icons/bs'
import {BsBuildingGear} from 'react-icons/bs'
import {BiCctv} from 'react-icons/bi'
import {TbAirConditioning} from 'react-icons/tb'
import {FaChild ,FaConciergeBell,FaParking} from 'react-icons/fa'
import {MdSettingsBackupRestore ,MdOutlineElevator} from 'react-icons/md'
import {RiAlarmWarningFill} from 'react-icons/ri'
import {GiRingingAlarm , GiKidSlide } from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {IoChatbubblesOutline,IoRestaurantSharp} from 'react-icons/io5'
import {AiTwotoneShop} from 'react-icons/ai'
import {GiParkBench} from 'react-icons/gi'


const divStyle = {
    width: '100%',
    height: '400px',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
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
  {
    url: image5,
  },
  {
    url: image6,
  },
  {
    url: image7,
  },
  
];
const buttonStyle = {
    width: "30px",
    hight: "30px",
    border: '0px',
    backgroundColor: 'rgba(42, 42, 42, 0.41)',
    borderRadius: '4px',
    padding:'10px'


    // zIndex:200
};

const properties = {
    prevArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg>,
    nextArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg>
}





const Alwedd = () => {
   const containerStyle = {
      width: '100%',
      height: '250px'
    };

  return (
    <>
                <section>
        <div className='imageofheaderkhlood'><h1>BIANCA</h1></div>

        <section className='mainmajidi'>
          <div className='navleft'>
            <div>
              <h6>PROPERTY DEVELOPMENT</h6>
              <div className='navp'>
                <a href='Majidi-View'>Majidi View</a>
                <a href='bianca'>Bianca</a>
                <a href='alwedd'>alwedd</a>
                <a href='khlood'>khlood</a>
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='twothink'>
              <h3>BIANCA</h3>
              <a className='BROCHURE' target={'_blank'} href='khlood.pdf'>GET BROCHURE</a>
            </div>
            <div className="">
              <Slide {...properties} autoplay={true} transitionDuration={500} canSwipe={true} infinite={true} arrows={true} pauseOnHover={true} duration={2000} >
                {/* <div className='slideimage'> */}
                  {slideImages.map((slideImage, index)=> (
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
                  <h5>Baghdad - Hai Al Adel - Opposite of Um Al qurra Mosque</h5>
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
                <p>Al Khlood is the perfect residential complex for those seeking a luxurious and convenient living experience. Located in a prime location, this exceptional development boasts four elegant buildings, each rising 20 floors high. Step into the world of Al Khlood and be mesmerized by the stunning architecture and contemporary design of the complex.</p>
                  <br />
                  <br />
                <p>The spacious and well-lit apartments offer breathtaking views of the surrounding cityscape, providing the perfect backdrop for a comfortable and sophisticated lifestyle. The complex is equipped with state-of-the-art facilities, including a fully-equipped gym, swimming pool, and children's play area, ensuring that every member of the family is catered to. The round-the-clock security system and ample parking space provide a secure and convenient living experience.</p>
                  <br />
                  <br />
                <p>Al Khlood is the epitome of luxury and convenience, providing a lifestyle that is second to none. Whether you are a family, a young professional, or a retiree, this development has something for everyone. Don't miss out on the opportunity to experience the best of modern living - invest in Al Khlood today!</p>
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
                    <div className='iconss'><FaParking/></div>
                    <p>Residents parking</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><IoRestaurantSharp/></div>
                    <p>Restaurants & coffee shops</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><AiTwotoneShop/></div>
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
                    center={{lat: 25.0953761,lng: 55.3531664 , position: {lat: 25.0953761,lng:55.3531664} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 25.0953761,lng: 55.3531664}} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
              <div class="parents">
                <a href='alwedd' class="div4">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                    <h3>Al Wed</h3>
                    <p>Baghdad</p>
                  </div>
                </a>
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
              </div>
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

export default Alwedd







  

{/* <Helmet>
  <title>Bianca - Zest Property</title>
  <meta name="description" content="Looking for a luxurious villa in Dubai, Bianca? Our selection of stunning villas is sure to impress. From spacious layouts and gorgeous interiors to outdoor amenities like private pools and landscaped gardens, our villas have everything you need for an unforgettable stay in this glamorous city. Browse our collection now and find your dream villa in Dubai, Bianca." />
</Helmet>
<section className='herobianca'>
  <p>You will live in luxury in</p>
  <h1>Bianca</h1>
</section>
<main>
<form className='formss' ref={form} onSubmit={sendEmail}>
  <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
  <button className="">Subscribe</button>
  </form>
<div className='test'>
  <img src={alweddb}  alt='klood' />
  <div className='paraghraf'>
  <h2> Bianca Prices Starts From </h2>
    <ol className='ulsklood'>
      <li>
        360,000$ 2 Bedrooms + Hall
      </li>
      <li>
          500,000$ 3 Bedrooms + Hall
      </li>
      <li>
          555,555$ 4 Bedrooms + Hall
      </li>
    </ol>
  </div>
</div>
<div className='test revers'>
  <img src={alweddh2}  alt='klood' />
         <div className='paraghraf'>
  <h2> Payment Plan For Bianca </h2>
    <ol className='ulsklood'>
      <li>
         10% in down payment, 1% in monthly payments (You get a 5% discount)
      </li>
      <li>
         20% in down payment, 1% in monthly payments (You get a 10% discount)
      </li>
      <li>
         30% in down payment (You get a 15% discount)
      </li>
      <li>
       Pay in cash to get a 40% discount 
      </li>
    </ol>
  </div>
</div>
<div className='test'>
  <img src={alweddicon}  alt='klood' />
  <div className='paraghraf'>
  <h2>for more details content us :</h2>
    <ul className='ulsklood'>
      <li>
      <a href='tel:+9647502552006 '>
      number 1 : 964 750 255 2006
      </a>
      </li>
    </ul>
  </div>
</div>
<form className='formpage'>
      <input
        type='text'
        placeholder='Name*'
        onChange={e => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Phone Number*'
        onChange={e => setPhone(e.target.value)}
      />
      <textarea
        type='text'
        placeholder='message*'
        defaultValue={"I'm interested " + "[ " + "bianca" + " ]"}
        onChange={e => setEnbody(e.target.value)}
      />
      <div className='flex gap-x-2'>
        <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${enbody}`}>
          <p
            className='buttonss'
            type='submit'
          >
            Send Message
          </p>
      </a>
      </div>
    </form>
      <a className='buttonsss' href='bianca.pdf'>Bianca PDF</a>
    <div className="video-responsive">
<iframe
width="853"
height="480"
src={'https://www.youtube.com/embed/Ea1-rdvC4Jw'}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
title="Embedded youtube"
></iframe>
</div>
</main> */}