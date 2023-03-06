import '../khlood/khlood.css'
import alweddb from '../../images/majidi1.jpg'
import alwedd1 from '../../images/alwedd3.jpg'
import alweddc from '../../images/majidi2.jpg'
import alweddh from '../../images/New_Catalogue-58.jpg'
import alweddicon from '../../images/majidilast.jpg'
import alweddh2 from '../../images/alwedh.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import image from '../../images/Biancaicon.jpg'
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import pdf from './Brochure_20x20_4Folded.pdf'
import image1 from './img404.jpg'
import image2 from './img405.jpg'
import image3 from './img406.jpg'
import image4 from './img456.jpg'

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


const Majedy = () => {

  const containerStyle = {
      width: '100%',
      height: '250px'
    };

  return (
    
    <>
      <section>
        <div className='imageofheader'><h1>MAJIDI VIEW</h1></div>

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
              <h3>MAJIDI VIEW</h3>
              <a className='BROCHURE' target={'_blank'} href='Brochure_20x20_4Folded.pdf'>GET BROCHURE</a>
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
                  <h5>Erbil Koya Rd, Hewa City, Irbil, Iraq</h5>
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
                Welcome to Majidi View, a luxurious residential complex built by HEWA Holding, located in close proximity to the renowned Majidi Mall.

Developed by the same designers and developers of Majidi Mall, Majidi View offers an exceptional living experience, combining modern architecture, premium amenities, and unparalleled convenience.
                <br />
                <br />
                <br />
The project comprises of 11 buildings, each boasting 25 floors of stunning apartments with breathtaking views of the surrounding area. With a range of floor plans to choose from, Majidi View offers spacious and elegantly designed apartments that cater to your every need.

Whether you're looking for a cozy one-bedroom apartment or a spacious three-bedroom unit, you'll find everything you need at Majidi View. Each apartment comes with high-quality fixtures and fittings, top-of-the-line appliances, and stylish finishes that make for a truly luxurious living experience.                <br />
                <br />
                <br />
Majidi View offers a range of world-class amenities, including a fully-equipped fitness center, swimming pool, and children's play area. Residents can also enjoy a variety of retail and dining options in the nearby Majidi Mall, making it easy to indulge in some retail therapy or grab a quick bite to eat.

With its prime location, exceptional design, and top-of-the-line amenities, Majidi View is the perfect place to call home. Don't miss out on the opportunity to own a piece of luxury in one of the most desirable locations in the city. Contact us today to schedule a viewing and experience the Majidi View difference for yourself!              </p>
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
                    center={{lat: 36.2015944,lng: 44.0911409 , position: {lat: 36.2015944,lng:44.0911409} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 36.2015944,lng: 44.0911409}} />
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
                <a href='khlood' class="div5">
                <div className='imageklood'></div>
                  <div className='overlays'>
                  <h3>Al Khlood</h3>
                  <p>Baghdad</p>
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

export default Majedy





























// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (newslatter == '') { 
//     } else {
//         emailjs.sendForm(process.env.REACT_APP_server_id, process.env.REACT_APP_template_id, form.current, process.env.REACT_APP_public_id)
//         .then((result) => {
//             alert('thank you for subscribe')
//         }, (error) => {
//             alert('sorry we have a problem please try again letter 😔')
//         });
//     }
//   }
//   const email = 'zest@zest-property.com'
//   const [nname , setName] = useState('')
//   const [newslatter , setNewslatter] = useState('')
//   const [phone , setPhone] = useState('')
//   const [body , setBody] = useState('مرحبا، أنا مهتم ب ' + "[ " + "مجدي فیو" + " ]")
//   const [enbody , setEnbody] = useState(" i'm intrestied in " + "[ " + "Majidi View" + " ]")


//   const location = useLocation();
//   const paths = window.location.pathname;
//   const fword = paths[1] + paths[2]

//   return (
//     <>
//     {fword == 'ar' ? 
//       <Helmet>
//         <title>ماجدي فیو - عقارات زيست</title>
//         <meta name='description' content="مشروع ماجدي فيو المميز وفي منطقة تجارية يضم على انواع شقق مختلفة ضمن الـ 11 عمارة التي تتكون من 24 طبقة لكل منها.. ومساحات خضراء" />
//       </Helmet>
//       : 
//       <Helmet>
//         <title>Majidi View - Zest Property</title>
//         <meta name="description" content="Majidi view is a vip complex that consists of 11 towers and 24 floors for each tower, green areas for fresh air and clean spaces to sit in with a family and your loved ones" />
//       </Helmet>
//       }
//       {paths == '/Majidi-View' ? 
//       <>
//     <section className='heroMajidi'>
//         <h1>Majidi View</h1>
//     </section>
//     <main>
//     <form className='formss' ref={form} onSubmit={sendEmail}>
//         <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
//         <button className="">Subscribe</button>
//         </form>
//       <div className='test'>
//         <img src={alweddb}  alt='klood' />
//         <div className='paraghraf'>
//         <h2>🏢 Building Details </h2>
//         <div className='ulsklood'>
//           <ul >
//             <li>
//               👷24 floors
//             </li>
//             <li>
//               🏢 Total towers 11
//             </li>
//             <li>
//               🏫 School
//             </li>
//             <li>
//               🕌 Mosque
//             </li>
//             <li>
//               🏪 Shop
//             </li>
//             <li>
//               🏥 Hospital
//             </li>
//             <li>
//               🏞 Park
//             </li>
//           </ul>
//         </div>
//         </div>
//       </div>
//      <div className='test revers'>
//         <img src={alweddc}  alt='klood' />
//         <div className='paraghraf'>
//         <h2>🏢 apartment details   
// </h2>
//           <ul className='ulsklood'>
//             <li>
//               <p className='pbold b'>2 + 1</p>
//             </li>
//             <li>
//               <p className='pbold '>83 , 103 , 108 , 147 </p> 
//             </li>
//             <li>
//               <p className='pbold b'>3 + 1</p>
//             </li>
//             <li>
//                <p className='pbold'> 150 , 182 , 185</p>
//             </li>
//             <li>
//                <p className='pbold b'>5 + 1</p>
//             </li>
//             <li>
//                 <p className='pbold'> 396 , 435 , 518</p>
//             </li>
//           </ul>
//         </div>
//       </div>
    
//       <div className='test'>
//         <img src={alweddicon}  alt='klood' />
//         <div className='paraghraf'>
//             <h2>for more details content us :</h2>
//           <ul className='ulsklood'>
//             <li>
//               <a href='tel:+9647505622006'>
//                 ☎️ number 1 : 964 750 562 2006
//               </a>
//             </li>
//             <li>
//               <a href='tel:+9647505222006'>
//                 ☎️ number 2 : 964 750 522 2006
//               </a>
//             </li>
//             <li>
//               <a href='tel:+9647506322006'>
//                 ☎️ number 3 : 964 750 632 2006
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <form className='formpage'>
//             <input
//               type='text'
//               placeholder='Name*'
//               onChange={e => setName(e.target.value)}
//             />
//             <input
//               type='text'
//               placeholder='Email Address*'
//             />
//             <input
//               type='text'
//               placeholder='Phone Number*'
//               onChange={e => setPhone(e.target.value)}
//             />
//             <textarea
//               type='text'
//               placeholder='رسالة*'
//               defaultValue={"I'm interested " + "[ " + "Majidi View" + " ]"}
//               onChange={e => setBody(e.target.value)}
//             />
//             <div className='flex gap-x-2'>
//               <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${enbody}`}>
//                 <p
//                   className='buttonss'
//                   type='submit'
//                 >
//                   Send Message
//                 </p>
//             </a>
//             </div>
//           </form>
//     </main>
//       </>
//     :
//     <>
//       <section className='heroMajidi'>
//         <h1>ماجدي فیو </h1>
//     </section>
//     <main>
//     <form className='formss' ref={form} onSubmit={sendEmail}>
//         <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني *' />
//         <button className="">أرسل</button>
//         </form>
//       <div className='test'>
//         <img src={alweddb}  alt='klood' />
//         <div className='paraghraf'>
//         <h2>🏢 معلومات العمارات </h2>
//           <div className='ulsklood'>
//           <ul >
//             <li>
//               👷24 طابق
//             </li>
//             <li>
//               🏢 عمارة 11
//             </li>
//             <li>
//               🏫 مدرسة
//             </li>
//             <li>
//               🕌 جامع
//             </li>
//             <li>
//               🏪 محلات تجارية
//             </li>
//             <li>
//               🏥 مستشفى
//             </li>
//             <li>
//               🏞 متنزه وحديقة
//             </li>
//           </ul>
//         </div>
//         </div>
//       </div>
//       <div className='test revers'>
//         <img src={alweddc}  alt='klood' />
//         <div className='paraghraf'>
//         <h2>🏢 معلومات الشقة  </h2>
//           <ul className='ulsklood'>
//            <li>
//               <p className='pbold b'>2 + 1</p>
//             </li>
//             <li>
//               <p className='pbold '>م83 , م103 , م108 , م147 </p> 
//             </li>
//             <li>
//               <p className='pbold b'>3 + 1</p>
//             </li>
//             <li>
//                <p className='pbold'> م150 , م182 , م185</p>
//             </li>
//             <li>
//                <p className='pbold b'>5 + 1</p>
//             </li>
//             <li>
//                 <p className='pbold'> م396 , م435 , م518</p>
//             </li>
//           </ul>
//         </div>
//       </div>
     
//       <div className='test'>
//         <img src={alweddicon}  alt='klood' />
//         <div className='paraghraf'>
//                   <h2>للحجز الاتصال على الأرقام التالية:</h2>
//           <ul className='ulsklood'>
//             <li>
//               <a href='tel:+9647505622006'>
//                 ☎️ رقم 1 : 2006 562 750 964
//               </a>
//             </li>
//             <li>
//               <a href='tel:+9647505222006'>
//                 ☎️ رقم 2 : 2006 522 750 964
//               </a>
//             </li>
//             <li>
//               <a href='tel:+9647506322006'>
//                 ☎️ رقم 3 : 2006 632 750 964
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <form className='formpage'>
//             <input
//               type='text'
//               placeholder='اسم*'
//               onChange={e => setName(e.target.value)}
//             />
//             <input
//               type='text'
//               placeholder='البريد الإلكتروني*'
//             />
//             <input
//               type='text'
//               placeholder='الهاتف*'
//               onChange={e => setPhone(e.target.value)}
//             />
//             <textarea
//               type='text'
//               placeholder='رسالة*'
//               defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجدي فیو" + " ]"}
//               onChange={e => setBody(e.target.value)}
//             />
//             <div className='flex gap-x-2'>
//               <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${body}`}>
//                 <p
//                   className='buttonss'
//                   type='submit'
//                 >
//                   أرسل رسالة
//                 </p>
//             </a>
//             </div>
//           </form>
//     </main>
//     </>
//     }