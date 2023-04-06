import '../khlood/khlood.css'
import alweddb from '../../images/alwedb.jpg'
import alwedd1 from '../../images/alwedd3.jpg'
import alweddc from '../../images/alwed2.jpg'
import alweddh from '../../images/New_Catalogue-58.jpg'
import alweddicon from '../../images/alweddiacon.jpg'
import alweddh2 from '../../images/alwedh.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'


import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'


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
  
  const [brochureDownload , setBrochureDownload ] = useState(false)
  const [name , setName ] = useState('')
  const [phone , setPhone ] = useState('')
  const [email , setEmail ] = useState('')







const config = {
  headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  },
};




let handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post("https://node-email-sendersss.glitch.me/majidi", {email, name, phone} ,config).then(window.open('Brochure_Wedd.pdf'))
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
            <div className='brochurLeft alweddimage'></div>
            <div className='brochurRight'>
            <form style={{width:'100%',maxWidth:'1000px' , maxHeight:'1000px' , display: 'flex' , flexWrap: 'nowrap'}} onSubmit={handleSubmit}>
              <div className='closeButton' onClick={() => setBrochureDownload(false)}>X</div>

                <h2>Download Brochure</h2>
                <p>Please provide your details to download brochure</p>
                <label for='name'>Name</label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} name='name' placeholder='Your Name' required></input>
                <label for='email' >Email</label>
                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} name='email'  placeholder='Your Email' required></input>
                <label for='phone'>Phone Number</label>
                <input value={phone} type='text' onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='Your Phone Number' required></input>
                <div style={{display:'flex' , marginTop:10, marginBottom:10, alignItems:'center' ,width: '100%', justifyContent: 'space-between'}}>
                  <h5>to Contact our service please click this icon </h5>
                  <a href={"//api.whatsapp.com/send?phone=9647502552006&text=hello iam interested in alwedd view can you send me details"}>
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
        



        <div className='imageofheaderwedd'><h1>AL WEDD</h1></div>

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
              <h3>AL WEDD</h3>
              <a className='BROCHURE' onClick={()=> setBrochureDownload(true)}>DOWNLOAD BROCHURE</a>
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
                  <h5>Baghdad - Al Amria - Old Abu Ghraib Road</h5>
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
                <p>Al Wedd is a luxurious residential complex that redefines modern living. With 22 elegant buildings rising 15 floors high, this development offers an unrivaled living experience that is second to none.

Step into the world of Al Wedd and be greeted by the stunning architecture and contemporary design that is sure to leave you in awe. The spacious and well-lit apartments offer breathtaking views of the surrounding landscape, providing the perfect ambiance for a comfortable and sophisticated lifestyle.</p>
                  <br />
                  <br />
                <p>Al Wedd is a well-equipped development, featuring state-of-the-art facilities that cater to your every need. Enjoy a refreshing dip in the swimming pool, a challenging workout in the fully-equipped gym, or indulge in some relaxation time at the spa. With around-the-clock security and ample parking space, you can enjoy a secure and convenient living experience.

This development is located in a prime location, making it the perfect place to call home. Whether you are a young professional,</p>
                  <br />
                  <br />
                <p> a family, or a retiree, Al Wedd has something for everyone. The complex is designed to provide a luxurious and convenient lifestyle, ensuring that every resident enjoys the best of modern living.

Invest in Al Wedd today and experience the best of modern living. Don't miss out on this opportunity to live in a luxurious and convenient development that will take your breath away.</p>
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
                    center={{lat: 33.309369,lng: 44.2147845 , position: {lat: 33.309369,lng:44.2147845} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 33.309369,lng: 44.2147845}} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
              <div class="parents">
                <a href='khlood' class="div4">
                <div className='imageklood'></div>
                  <div className='overlays'>
                    <h3>Al Khlood</h3>
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



  






  {/* {fword == 'ar' ? 
    <Helmet>
      <title>مجمع الود السكني - عقارات زيست</title>
      <meta name='description' content="ان مجمع الود السكني يتكون من 6 عمارات ذات 15 طابق لكل منها بنظام حماية كامل وخصوصية مناسبة لكل الشقق.. مواد عازلة للصوت وبلكونات مُطلة على مناظر خضراء" />
    </Helmet>
    : 
    <Helmet>
      <title>Al Wedd - Zest Property</title>
      <meta name="description" content="al wedd residence is a welcoming compound for both people and investors. Al wedd offers a collection of options and features. We have a full security system for your family. green places to refresh the air. kids playgrounds, a car garage. and more " />
    </Helmet>
    }
    {paths == '/alwedd' ? 
    <>
  <section className='heroalwedd'>
      <h1>AL - WEDD</h1>
  </section>
  <main>
  <form className='formss' ref={form} onSubmit={sendEmail}>
      <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
      <button className="">Subscribe</button>
      </form>
    <div className='test'>
      <img src={alweddb}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏢 Building Details - A + B </h2>
        <ul className='ulsklood'>
          <li>
            👷15 floors

          </li>
          <li>
            🛏 3 bedroom 

          </li>
          <li>
            🏢 total apartments 60

          </li>
          <li>
          📐 gross area 650 m²

          </li>
          <li>
             🛏 4 bedrooms & hall 

          </li>
        </ul>
      </div>
    </div>
   <div className='test revers'>
      <img src={alweddc}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏢 building details - C  

</h2>
        <ul className='ulsklood'>
          <li>
            👷15 floors
          </li>
          <li>
            🛏 4 bedrooms
          </li>
          <li>
            🏢 total apartments 60


          </li>
          <li>
          📐 gross area 730 m²
          </li>
          <li>
             📐  مساحة 180 متر
          </li>
          <li>
             🛏 3 bedrooms & hall
          </li>
        </ul>
      </div>
    </div>
     <div className='test'>
      <img src={alweddh}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏠 details about villa </h2>
        <ul className='ulsklood'>
          <li>
            📐  area 300 m²
          </li>
          <li>
            🛏 5 bedrooms
          </li>
          <li>
            🛁 5 bathroom 
          </li>
          <li>
          🛋 1 hall
          </li>
          <li>
             🍽 1 kitchen
          </li>
        </ul>
      </div>
    </div>
   <div className='test revers'>
      <img src={alweddh2}  alt='klood' />
             <div className='paraghraf'>
      <h2>🏠 details about villa </h2>
        <ul className='ulsklood'>
          <li>
            📐  area 200 m²
          </li>
          <li>
            🛏 3 bedroom
          </li>
          <li>
            🛁 4 bathroom
          </li>
          <li>
          🛋 1 hall 
          </li>
          <li>
             🛋 1 living room
          </li>
        </ul>
      </div>
    </div>
    <div className='test'>
      <img src={alweddicon}  alt='klood' />
      <div className='paraghraf'>
                <h2>for more details content us :</h2>
        <ul className='ulsklood'>
          <li>
          <a href='tel:+9647705132006 '>
            ☎️ number 1 : 964 770 513 2006
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
            defaultValue={"I'm interested " + "[ " + "alwedd" + " ]"}
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
    src={'https://www.youtube.com/embed/KV2QCUpB0Zc'}
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
  
    <section className='heroalwedd'>
      <h1>مجمع الود السكني </h1>
  </section>
  <main>
  <form className='formss' ref={form} onSubmit={sendEmail}>
      <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني *' />
      <button className="">أرسل</button>
      </form>
    <div className='test'>
      <img src={alweddb}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏢 معلومات عن البلدة نموذج A + B </h2>
        <ul className='ulsklood'>
          <li>
            👷15 طابقا

          </li>
          <li>
            🛏 3 غرف  نوم 

          </li>
          <li>
            🏢 مجموع الشقق 60

          </li>
          <li>
          📐 مساحة البناء 650 متر

          </li>
          <li>
             🛏 4 غرف نوم وصالة

          </li>
          <li>
            📐 مساحة 200 متر

          </li>
        </ul>
      </div>
    </div>
    <div className='test revers'>
      <img src={alweddc}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏢 معلومات عن البلدة نموذج C 

</h2>
        <ul className='ulsklood'>
          <li>
            👷15 طابقا
          </li>
          <li>
            🛏 4 غرف  نوم 
          </li>
          <li>
            🏢 مجموع الشقق 60


          </li>
          <li>
          📐 مساحة البناء 730 متر


          </li>
          <li>
             📐  مساحة 180 متر


          </li>
          <li>
             🛏 3 غرف نوم وصالة

          </li>
        </ul>
      </div>
    </div>
    <div className='test'>
      <img src={alweddh}  alt='klood' />
      <div className='paraghraf'>
      <h2>🏠 معلومات عن المنزل</h2>
        <ul className='ulsklood'>
          <li>
            📐  مساحة 300 متر
          </li>
          <li>
            🛏 5 غرفة نوم
          </li>
          <li>
            🛁 5 حمام 
          </li>
          <li>
          🛋 1 صالة
          </li>
          <li>
             🍽 1 مطبخ
          </li>
        </ul>
      </div>
    </div>
    <div className='test revers'>
      <img src={alweddh2}  alt='klood' />
             <div className='paraghraf'>
      <h2>🏠 معلومات عن المنزل</h2>
        <ul className='ulsklood'>
          <li>
            📐  مساحة 200 متر
          </li>
          <li>
            🛏 3 غرفة نوم
          </li>
          <li>
            🛁 4 حمام
          </li>
          <li>
          🛋 1صالة
          </li>
          <li>
             🛋 1 غرفة جلوس
          </li>
        </ul>
      </div>
    </div>
    <div className='test'>
      <img src={alweddicon}  alt='klood' />
      <div className='paraghraf'>
                <h2>للحجز الاتصال على الأرقام التالية:</h2>
        <ul className='ulsklood'>
          <li>
            <a href='tel:+9647705132006'>
              ☎️ رقم 1 : 2006 513 770 964
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
            placeholder='البريد الإلكتروني*'
          />
          <input
            type='text'
            placeholder='الهاتف*'
            onChange={e => setPhone(e.target.value)}
          />
          <textarea
            type='text'
            placeholder='رسالة*'
            defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجمع الود السكني" + " ]"}
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
    src={'https://www.youtube.com/embed/KV2QCUpB0Zc'}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  ></iframe>
</div>
  </main>
  </>
  } */}