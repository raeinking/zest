import React, { useState, useRef } from 'react';
import Lists from '../../thinkgsthatnotchanged/Lists'
import '../khlood/khlood.css'

import whatsapp from '../../images/whatsapp-svgrepo-com.svg'


import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from './AziziRiveria1.jpg'
import image2 from './AziziRiveria2.jpg'
import image3 from './AziziRiveria3.jpg'
import image4 from './AziziRiveria4.jpg'

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
import axios from 'axios'
import { Helmet } from 'react-helmet';
import ArLists from '../../thinkgsthatnotchanged/ArLists';


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
function Azizi() {
    const [brochureDownload, setBrochureDownload] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [projectname, setProjectname] = useState('river en')







    const config = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
    };




    let handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://node-email-sendersss.glitch.me/majidi", { email, name, phone, projectname }, config).then(alert('we will send you'))
    };



    const containerStyle = {
        width: '100%',
        height: '250px'
    };

    return (
        <section>
            <Helmet>
                <title>Experience Luxury Living at Azizi River - Zest Property</title>
                <meta name="description" content="Discover the epitome of modern living at Azizi River, where luxury meets comfort. Our stunning residential development is designed to exceed your expectations, with premium amenities, spacious layouts, and breathtaking views of the surrounding area. As a resident of Azizi River, you'll enjoy a lifestyle of convenience and sophistication. Explore our available units and make your dream home a reality." />
            </Helmet>

            {brochureDownload ? <div className='absoluteForm'>
                <div className='brochurForm'>
                    <div className='brochurLeft majdiimage'></div>
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
                                <a href={"//api.whatsapp.com/send?phone=9647502552006&text=hello iam interested in majidi view can you send me details"}>
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







            <div className='imageofheaderazizi'><h1>Azizi Riviera</h1></div>

            <section className='mainmajidi'>
                <Lists />

                <div className='content'>

                    <div className='twothink'>
                        <h3>Azizi Riviera</h3>
                        <a className='BROCHURE' onClick={() => setBrochureDownload(true)}>DOWNLOAD BROCHURE</a>
                    </div>
                    <div className="">
                        <Slide {...properties} autoplay={true} transitionDuration={500} canSwipe={true} infinite={true} arrows={true} pauseOnHover={true} duration={2000} >
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                    <div className='margin'>
                        <h2>Overview</h2>
                        <div className='overview'>
                            <div className='borderandmargin'>
                                <h5>LOCATION</h5>
                                <h5> Mohammad Bin Rashid Al Maktoum City (MBR), Azizi Riviera 10</h5>
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
                            Azizi Riviera is a prestigious residential project situated in Meydan One, Nad Al Sheba 1, Dubai, United Arab Emirates. Developed by Azizi Developments, it offers a luxurious and modern lifestyle in the heart of Meydan City (MBR City).

                            <br />
                            <br />
                            <br />
                            This project features spacious studio apartments designed to offer ample living space and comfortable living. Located in a prime location, Azizi Riviera 31 provides easy access to key destinations in Dubai, including business hubs, entertainment options, and leisure amenities. The project boasts state-of-the-art facilities, including a swimming pool, fitness center, landscaped gardens, and round-the-clock security, ensuring residents enjoy a convenient and secure living experience.

                            <br />
                            <br />
                            <br />
                            Pulse Line Real Estate is delighted to offer these premium studio apartments in Azizi Riviera, presenting an excellent opportunity for investors and homebuyers looking for a sophisticated living experience in one of Dubai's prime locations.




                            <br />
                            <br />
                            <br />
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
                                    center={{ lat: 25.1734161, lng: 55.3051223, position: { lat: 25.1734161, lng: 55.3051223 } }}
                                    zoom={18}
                                >
                                    <MarkerF position={{ lat: 25.1734161, lng: 55.3051223 }} />
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
    )
}

export default Azizi