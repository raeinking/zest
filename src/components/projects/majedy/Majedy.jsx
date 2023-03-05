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


const allprojects = [
  {
    Imas: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    Imas: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    Imas: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    Imas: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  }
]
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
                <p>Majidi View</p>
                <p>Bianca</p>
                <p>alwedd</p>
                <p>alkhlood</p>
              </div>
            </div>
          </div>

          <div className='content'>

            <div className='twothink'>
              <h3>MAJIDI VIEW</h3>
              <a className='BROCHURE' href='https://google.com'>GET BROCHURE</a>
            </div>

            <div >
              <Slide {...properties} autoplay={true} transitionDuration={400} canSwipe={true} infinite={true} arrows={true} pauseOnHover={true} duration={400} >
                <div className='slideimage'>
                  {allprojects.map((slideImage, index)=> (
                      <div key={index} className="tset" style={{'backgroundImage': `url(${slideImage.Imas})`}}></div>
                  ))} 
                </div>
                </Slide>
            </div> 

            <div className='margin'>
              <h2>Overview</h2>
              <div className='overview'>
                <div className='borderandmargin'>
                  <h5>LOCATION</h5>
                  <h5>Dubai Production City, Dubai</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>PROJECT TYPE</h5>
                  <h5>Residential</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>EXPECTED COMPLETION</h5>
                  <h5>March 2021</h5>
                </div>
              </div>
            </div> 

            <div className='dis'>
              <h3>Description</h3>
              <p className='pdis'>
                Taking shape at the heart of Dubai's growth corridor, Dubai Production City, Midtown, is minutes away from Al Maktoum International Airport and close to the Jebel Ali Port. The signature township offers residents with an appetite for an active lifestyle with world-class amenities. The residential complex comprises buildings ranging from six to sixteen floors, each with a choice of studio, one, two, and three-bedroom apartments.
                <br />
                <br />
                <br />
                The 5.5 million sq. ft. development is divided into four districts with a cluster of buildings within each complex. The contemporary residences at Midtown are designed around urban living experiences. For instance, the landscaped piazza stretches a kilometer in length. It hosts lively community parks, open lawns for family and community gatherings, children's play areas, and quaint nooks ideal for relaxing. The podium-like multi-utility retail boulevard is another integrated zone featuring fashion boutiques, book shops, convenience stores, pharmacies, supermarkets, restaurants, and cafes – all at close quarters.
                <br />
                <br />
                <br />
                There is so much to do at Midtown, with stimulating sports courts, relaxing family and lap pools, an inspiring jogging track, and a dedicated daycare facility – add to the experience of living in a vibrant community. The interiors are as exciting as the outdoors. Each apartment is crafted to perfection, enriching the lives of the ones who will call it home. With two (Afnan & Dania) out of the four districts ready for occupancy and work for the remaining two (Noor & Mesk) in full-swing, Midtown is here to redefine community living.
              </p>
            <div>
              <h3>Facilities & Amenities</h3>
              <div className='iconsss'>
              <div className='icon1'>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>24-hour security</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Backup power system</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Building management system</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>CCTV surveillance</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Central air conditioning</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Child day care center</p>
                  </div>
                </div>
              </div>
              <div className='icon2'>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Concierge service</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Elevators</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Emergency lighting system</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Fire alarm & fire fighting system</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Gymnasium</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Kids play area</p>
                  </div>
                </div>
              </div>
              <div className='icon3'>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Landscaped open plaza</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Outdoor sitting area</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Residents parking</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Restaurants & coffee shops</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
                    <p>Retail</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'></div>
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
                    zoom={12}
                  >
                  <MarkerF position={{lat: 36.202406902533625,lng: 44.08651131810995}} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>

              <div class="parents">
                <div class="div4">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                  <h3>Al Wed</h3>
                  <p>Baghdad</p>
                  </div>
                </div>
                <div class="div5">
                <div className='imageklood'></div>
                  <div className='overlays'>
                  <h3>Al Khlood</h3>
                  <p>Baghdad</p>
                  </div>
                </div>
                <div class="div6">
                  <div className='imagebianca'></div>
                  <div className='overlays'>
                  <h3>Bianca</h3>
                  <p>UAE Dubai</p>
                  </div>
                </div>
              </div>
            <div>
              <h3>Construction Updates</h3>
              <div className='imageproperty'>
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
              </div>
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