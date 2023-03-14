import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"

import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Projecta from "./project/Project"
import {Helmet} from "react-helmet";
import { useLocation } from "react-router-dom";




const Home = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
    {fword == 'ar' ? 
      <Helmet>
        <title>  عقارات زیست - إقليم كردستان والعراق  </title>
        <meta name='description' content="عقارات زيست انطلقت منذ عام 2006 لتضمن تجربة فريدة للمستثمرين في العراق وكردستان العراق" />
      </Helmet>
      : 
      <Helmet>
        <title>Zest-Property - Property For Sale</title>
        <meta name="description" content="Zest property is a real estate company that started at 2006 to ensure a special experience for the investors in iraq and kurdistan" />
      </Helmet>
      }
      <Hero />
      {/* <Featured /> */}
      <Recent />
      <Awards />
      <Projecta />
      <Team />
    </>
  )
}

export default Home
