import React, {useEffect, useState} from 'react'
import './style.css'
import azizi from './logoaiziz.png'
import zest from './logozest.png'
import onecontainer from './first.jpg'
import secondcontainer from './second.jpg'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Event() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')      


  const handleSubmit = async (e) => {
        e.preventDefault()
        
      fetch('https://node-email-sendersss.glitch.me/azizi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone
        })
      })
      alert('Email sent successfully')  
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])



  return (
    <div>
        <div className='heroevents'>
            <div className='leftevents' data-aos="fade-right">
                <img className='logozs' src={azizi} alt="" />
                <div className='linemidsles'></div>
                <img className='logozs' src={zest} alt="" />
            </div>
            <div className='rightevents' data-aos="fade-left">
                <h1>Your property in Dubai</h1>
                <h2>Zest Properties | Azizi Developments</h2>
                <h3>Divan Hotel 20/7/2023</h3>
                <div className='btneventheros' onClick={() => window.location.replace("#login")}>Reserve now</div>
            </div>
        </div>

        <section>
          <div className='containerones'>
            <div className='containerlefts' data-aos="fade-right">
                <h2>A chance to a fresh investment</h2>
                <p>We invite you to attend a special event for Zest Properties and Azizi Developments
to talk about the latest residential and investment projects in
Dubai, safe payment and investment tehniques</p>
                <div className='btneventfirsts'>More Details</div>
            </div>
            <div className='containerrights' data-aos="fade-left"> 
              <img className='firtimgevents' src={onecontainer} alt="" />
            </div>
            </div>
        </section>
        <section >
          <div className='containerone reverses'>
            <div className='containerlefts' data-aos="fade-right">
                <h2>Why invest in dubai</h2>
                <p>The safest city in the world with reliable and returning developers
High investment in addition to the high real estate prices due to
foreign investment in the country
Possibility of investment and ownership of any nationality in addition to many
Options that suit everyone</p>
                <div className='btneventfirsts'>im curious</div>
            </div>
            <div className='containerrights' data-aos="fade-left" >
              <img className='firtimgevents' src={secondcontainer} alt="" />
            </div>
            </div>
        </section>



        <div className='formcontainer' id='login' data-aos="slide-up" style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' , flexDirection: 'column' }}>
                        <h3>Fill the Form we will contact you in 10 minute</h3>
                    <form onSubmit={handleSubmit} className='from' style={{maxWidth: 450 , backgroundColor: 'white',borderRadius: 30, height: 450 , display: 'flex', flexDirection: 'column' , padding: 40, alignContent: 'space-around', justifyContent: 'space-between' }}>
                        <div>
                            <input value={name} onChange={ (e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Your Name...' required  style={{padding: 15 , marginTop: 5, height: 40 , marginBottom: 20 }}/>
                            <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Your Email...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }}/>
                            <input value={phone} onChange={ (e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder='Your Phone...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 10, marginBottom: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                <h5>to Contact our service please click this icon </h5>
                                <a target='_blank' href={"//api.whatsapp.com/send?phone=9647502552006&text=hello iam interested in Dubai projects "}>
                                    <img className='whatsapp' src={whatsapp} />
                                </a>
                            </div>
                        <button  type="submit">Send</button>
                    </form> 
                </div>

    </div>
  )
}

export default Event