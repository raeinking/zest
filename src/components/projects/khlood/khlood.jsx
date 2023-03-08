import './khlood.css'
import khlood1 from '../../images/klood1.jpg'
import khlood2 from '../../images/khlood2.jpg'
import khlood3 from '../../images/khlood3.jpg'
import khlood4 from '../../images/khlood4.jpg'
import khlood5 from '../../images/khlood5.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import env from "react-dotenv";

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

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


const Khlood = () => {
 const containerStyle = {
      width: '100%',
      height: '250px'
    };
  return (
    
    <>
          <section>
        <div className='imageofheaderkhlood'><h1>AL KHLOOD</h1></div>

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
              <h3>AL KHLOOD</h3>
              <a className='BROCHURE' target={'_blank'} href='khlood.pdf'>DOWNLOAD BROCHURE</a>
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
                    center={{lat: 33.342183,lng: 44.3025468 , position: {lat: 33.342183,lng:44.3025468} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 33.342183,lng: 44.3025468}} />
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

export default Khlood



  

  {/* {fword == 'ar' ? 
    <Helmet>
      <title>مجمع الخلود السكني - عقارات زيست</title>
      <meta name='description' content="مجمع الخلود السكني يوفر تجربة مميزة بالخدمات التي يقدمها للمستثمرين والساكنين في محافظة بغداد. يحوي المجمع على نظام حماية كامل, مساحات خضراء, مقاهي ومساحات للأطفال.. مع وجود مراكز تجارية." />
    </Helmet>
    : 
    <Helmet>
      <title>Al Khlood - Zest Property</title>
      <meta name="description" content="Al Khlood residence is a welcoming compound for both people and investors. Al Khlood offers a collection of options and features. We have a full security system for your family. green places to refresh the air. kids playgrounds, a car garage. and more " />
    </Helmet>
    }
    {paths == '/khlood' ? 
    <>
  <section className='heroalewd'>
      <h1>AL - KHLOOD</h1>
  </section>
  <main>
  <form className='formss' ref={form} onSubmit={sendEmail}>
      <input  onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
      <button className="">Subscribe</button>
      </form>
    <div className='test'>
      <img src={khlood1}  alt='klood' />
      <div className='paraghraf'>
                <h2>ِApartment Details</h2>
        <ul className='ulsklood'>
          <li>
            🏢 4 Towers 
          </li>
          <li>
            🚘 Car Garage
          </li>
          <li>
            🏕 Garden 
          </li>
          <li>
          👪🎠 Kids Playground
          </li>
          <li>
            ⛽️  Gas Station
          </li>
          <li>
            🚒  Firefighters Station
          </li>
        </ul>
      </div>
    </div>
    <div className='test revers'>
      <img src={khlood4}  alt='klood' />
      <div className='paraghraf'>
        <h2>🏢  Details of Apartment   ( 3 + 1 )</h2>
        <ul>
          <li>
📏 ( 193 m² ) Area
</li>
          <li>
🛏 3 Bed Romms 
      </li>
          <li>

🛋 1 Living Room 
  </li>
          <li>

📏 Price by Meter ( 1,100 ) Dollar            </li>
        </ul>
      </div>
    </div>
    <div className='test'>
      <img src={khlood2}  alt='klood' />
      <div className='paraghraf'>
                          <h2>For More Details, Please Call:

</h2>
        <ul className='ulsklood'>
          <li>
            <a href='tel:+9647706212006'>
              ☎️ Customer service 1 : 964 770 621 2006
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
            placeholder='Email Address*'
          />
          <input
            type='text'
            placeholder='Phone Number*'
            onChange={e => setPhone(e.target.value)}
          />
          <textarea
            type='text'
            placeholder='رسالة*'
            defaultValue={"I'm interested " + "[ " + "klood" + " ]"}
            onChange={e => setBody(e.target.value)}
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
          <div className="video-responsive">
  <iframe
    width="853"
    height="480"
    src={'https://www.youtube.com/embed/Av9ZM_dpKuM'}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  ></iframe>
</div>
  </main>
    </>
  :
  <>
    <section className='heroalewd'>
      <h1>مجمع الخلود السكني </h1>
  </section>
  <main>
  <form className='formss' ref={form} onSubmit={sendEmail}>
      <input  onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
      <button className="">Subscribe</button>
      </form>
    <div className='test'>
      <img src={khlood1}  alt='klood' />
      <div className='paraghraf'>
      <h2>معلومات الشقة</h2>
        <ul className='ulsklood'>
          <li>
            🏢 4ز عمارات 
          </li>
          <li>
            🚘 گراج
          </li>
          <li>
            🏕 حدیقة 
          </li>
          <li>
          👪🎠 حديقة اطفال
          </li>
          <li>
            ⛽️ محطة نفط
          </li>
          <li>
            🚒 محطة إطفاء
          </li>
        </ul>
      </div>
    </div>
    <div className='test revers'>
      <img src={khlood4}  alt='klood' />
      <div className='paraghraf'>
        <h2>🏢 معلومات عن الشقة نموذج ( ٣ - ١ )</h2>
        <ul>
          <li>
📏 ( ١٩٣ م²) المساحة
</li>
          <li>
🛏 ٣ غرف  نوم 
      </li>
          <li>

🛋 ١ صالة 
  </li>
          <li>

📏 سعر المتر ( ١,١٠٠ ) دولار            </li>
        </ul>
      </div>
    </div>
    <div className='test'>
      <img src={khlood2}  alt='klood' />
      <div className='paraghraf'>
        <h2>للحجز الاتصال على الأرقام التالية:</h2>
        <ul className='ulsklood'>
          <li>
          <a href='tel:+9647706212006'>
            ☎️ رقم 1 : 2006 621 770 964
          </a>
          </li>
        </ul>
      </div>
    </div>
    <form className='formpage'>
          <input
            type='text'
            placeholder='اسم*'
            onChange={e => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='الهاتف*'
            onChange={e => setPhone(e.target.value)}
          />
          <textarea
            type='text'
            placeholder='رسالة*'
            defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجمع الخلود السكني" + " ]"}
            onChange={e => setBody(e.target.value)}
          />
          <div className='flex gap-x-2'>
            <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${body}`}>
              <p
                className='buttonss'
                type='submit'
              >
                أرسل رسالة
              </p>
          </a>
          </div>
        </form>
        <div className="video-responsive">
  <iframe
    width="853"
    height="480"
    src={'https://www.youtube.com/embed/Av9ZM_dpKuM'}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  ></iframe>
</div>
  </main>
  </>
  } */}