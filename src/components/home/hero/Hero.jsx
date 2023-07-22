import React, { useState } from "react"
import Heading from "../../common/Heading"
import { useLocation } from "react-router-dom";
import "./hero.css"



const options = ['Option 1', 'Option 2', 'Option 3']; // array of selectable options



const Hero = () => {
  const location = useLocation();
  const email = 'zest@zest-property.com'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [body, setBody] = useState('')
  const [saleType, setSaleType] = useState('')


  const paths = window.location.pathname;
  const search = window.location.search

  const queryParams = new URLSearchParams(search)

  const resident = queryParams.get("project")
  const type = queryParams.get("type")
  const meter = queryParams.get("meter")
  const cityParams = queryParams.get("city")
  const priceParams = queryParams.get("Price")
  const propertyParams = queryParams.get("Property")
  const saleTypeParams = queryParams.get("saleType")


  return (
    <>
      {paths == '/' ?
        <section className='hero'>
              <video className="herovedio" playsInline muted loop preload="auto" tabIndex="-1" role="application" autoPlay>
              <source src="fssd.mp4" type="video/mp4" />
              </video>
              <h1>Zest Property</h1>
              
            <p>Find Your Next Home In Zest Property.</p>

            {/* <h2 style={{zIndex: 99, color: 'white', fontWeight: 800}}>Azizi Event</h2>
            <a href='/azizi-event' className='btneventfirst marg'>More Details</a> */}

        </section>
        :
        <section className='hero'>
          <video className="herovedio" playsInline muted loop preload="auto" tabIndex="-1" role="application" autoPlay>
            <source src="fssd.mp4" type="video/mp4" />
          </video>
          <h1 className="ar">شركة زيست</h1>
          <p className="ar">فرصة لعرض احدث واجدد العقارات القريبة منك</p>
          {/* <h2 style={{zIndex: 99, color: 'white', fontWeight: 800}}>ايفينت عزيزي</h2> */}
            {/* <a href='/ar/azizi-event' className='btneventfirst marg'>لمزيد من التفاصيل</a> */}
        </section>
      }
    </>
  )
}

export default Hero