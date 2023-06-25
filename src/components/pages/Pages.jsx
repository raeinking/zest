import React, { useEffect, useState } from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Projects from "../pricing/Projetctsprice"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import pageDis from "../page_dis/PageDis"
import Agents from "../agents/Agents"
import List from '../list/List'
import PropertyDetails from "../PageDis/PropertyDetails"
import khlood from "../projects/khlood/Khlood"
import alwedd from "../projects/city/baghdad/Alwedd"
import Majedy from "../projects/majedy/Majedy"
import pagenotfoud from "../pagenotfoud"
import beanca from '../projects/bianca/beanca'
import arbianca from '../projects/bianca/arbianca'
import Arkhlood from "../projects/khlood/Arkhlood"
import Armajidi from "../projects/majedy/Armajidi"
import Araled from "../projects/alwedd/Araled"
import Projectss from "../projects/Projectss"
import Projectssar from "../projects/Projectssar"
import PrivacyPolicy from "../common/PrivacyPolicy"
import Erbil from "../projects/Projectlocatons/Erbil"
import Erbilar from "../projects/Projectlocatons/Erbilar"
import Baghdad from "../projects/Projectlocatons/Baghdad"
import Mosul from "../projects/Projectlocatons/Mosul"
import Mosular from "../projects/Projectlocatons/Mosular"
import Kirkuk from "../projects/Projectlocatons/Kirkuk"
import Kirkukar from "../projects/Projectlocatons/Kirkukar"
import Dubai from "../projects/Projectlocatons/Dubai"
import Dubaiar from "../projects/Projectlocatons/Dubaiar"
import Kloodprivercy from "../../Kloodprivercy"
import Bay2 from "../projects/bay2/Bay2"
import Arbay2 from "../projects/bay2/Arbay2"
import Azizi from "../projects/aziziriver/Azizi"
import Arazizi from "../projects/aziziriver/Arazizi"
import Lagoon from "../projects/lagoon/Lagoon"
import Arlagoon from "../projects/lagoon/Arlagoon"
import Skyland from "../projects/skyland/Skyland"
import Arskyland from "../projects/skyland/Arskyland"
import Lalav from "../projects/lalav/Lalav"
import Arlalav from "../projects/lalav/Arlalav"
import Qaywan from "../projects/qaywan/Qaywan"
import Arqaywan from "../projects/qaywan/Arqaywan"
import Northholland from "../projects/northholland/Northholland"
import NorthhollandAr from "../projects/northholland/NorthhollandAr"
import Empire from "../projects/empire/Empire"
import EmpireAr from "../projects/empire/EmpireAr"
import Mansour from "../projects/almansour/Mansour"
import MansourAr from "../projects/almansour/MansourAr"
import BaghdadAr from "../projects/Projectlocatons/BaghdadAr"
import mailimage from "../images/mailimage.png"


const Pages = () => {
  const [showPopup , setShowPopup] = useState(false)

  const [email , setEmail] = useState('')

  useEffect(() => {
      const subscriber = localStorage.getItem('subscriber');
  
      if (subscriber === 'true' || window.location.pathname == '/projects/dubai') {
        // Do nothing
      } else {
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 10000);
  
        return () => {
          clearTimeout(timer);
        };
      };
  }, []);
  

  const handleSubmit = async (e) => {
    if (email === '') {

    } else {

      e.preventDefault()
      await localStorage.setItem('subscriber', true)
      
    fetch('https://node-email-sendersss.glitch.me/newsletterzest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
    setShowPopup(false)  
  }
}

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/properties' component={Blog} />
          <Route exact path='/agents' component={Agents} />
          <Route exact path='/properties/:id' component={PropertyDetails} />
          <Route exact path='/Majidi-View' component={Majedy} />
          <Route exact path='/alwedd' component={alwedd} />
          <Route exact path='/projects' component={Projectss} />
          <Route exact path='/khlood' component={khlood} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/ar' component={Home} />
          <Route exact path='/ar/properties' component={Blog} />
          <Route exact path='/ar/agents' component={Agents} />
          <Route exact path='/ar/contact' component={Contact} />
          <Route exact path='/ar/about' component={About} />
          <Route exact path='/ar/projects' component={Projectssar} />
          <Route exact path='/ar/bianca' component={arbianca} />
          <Route exact path='/ar/khlood' component={Arkhlood} />
          <Route exact path='/ar/alwedd' component={Araled} />
          <Route exact path='/ar/Majidi-View' component={Armajidi} />
          <Route exact path='/ar/properties/:id' component={PropertyDetails} />
          <Route exact path='/Privacy-Policy' component={PrivacyPolicy} />

          <Route exact path='/projects/erbil' component={Erbil} />
          <Route exact path='/projects/kirkuk' component={Kirkuk} />
          <Route exact path='/projects/baghdad' component={Baghdad} />
          <Route exact path='/projects/dubai' component={Dubai} />
          <Route exact path='/projects/mosul' component={Mosul} />


          <Route exact path='/ar/projects/erbil' component={Erbilar} />
          <Route exact path='/ar/projects/kirkuk' component={Kirkukar} />
          <Route exact path='/ar/projects/baghdad' component={BaghdadAr} />
          <Route exact path='/ar/projects/dubai' component={Dubaiar} />
          <Route exact path='/ar/projects/mosul' component={Mosular} />


          <Route exact path='/khlood/Privacy-Policy' component={Kloodprivercy} />

          <Route exact path='/bianca' component={beanca} />


          <Route exact path='/damac-bay2' component={Bay2} />
          <Route exact path='/ar/damac-bay2' component={Arbay2} />


          <Route exact path='/azizi-riviera' component={Azizi} />
          <Route exact path='/ar/azizi-riviera' component={Arazizi} />


          <Route exact path='/damac-lagoons' component={Lagoon} />
          <Route exact path='/ar/damac-lagoons' component={Arlagoon} />


          <Route exact path='/sky-land-kirkuk' component={Skyland} />
          <Route exact path='/ar/sky-land-kirkuk' component={Arskyland} />


          <Route exact path='/lalav-group' component={Lalav} />
          <Route exact path='/ar/lalav-group' component={Arlalav} />


          <Route exact path='/qaiwan-mirador' component={Qaywan} />
          <Route exact path='/ar/qaiwan-mirador' component={Arqaywan} />


          <Route exact path='/north-holland' component={Northholland} />
          <Route exact path='/ar/north-holland' component={NorthhollandAr} />


          <Route exact path='/empire-world' component={Empire} />
          <Route exact path='/ar/empire-world' component={EmpireAr} />


          <Route exact path='/almansour-city' component={Mansour} />
          <Route exact path='/ar/almansour-city' component={MansourAr} />




          <Route path='*' component={pagenotfoud} />
        </Switch>
        {showPopup && (
        <div className='absoluteForm popup'>
        <div className='brochurForm'>
            <div className='brochurLeft majdiimage popupimage'></div>
            <div className='brochurRight'>
                <form className='' style={{ width: '100%', maxWidth: '500px', maxHeight: '700px', display: 'flex', flexWrap: 'nowrap' }} onSubmit={handleSubmit} >
                  <div className='closeButton' onClick={() => setShowPopup(!showPopup)} >X</div>
                  <img src={mailimage} style={{ zIndex: 900000 , maxHeight: '30%',objectFit: 'contain'}}/>
                    <p style={{width: '100%',textAlign: 'center'}}>Subscribe to not see this again</p>
                    <h2 style={{width: '100%',textAlign: 'center'}}>Subscribe with us to get the latest real estate news</h2>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='Your Email' required></input>
                    <input className='btnsubmit' value='Send Your Email' type='submit'></input>
                </form>
            </div>
        </div>
    </div>
      )}
        <Footer />
      </Router>
    </>
  )
}

export default Pages
