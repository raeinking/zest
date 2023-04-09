import React, { useState } from 'react';
import './form.css'
import axios from 'axios'
import whatsapp from '../images/whatsapp-svgrepo-com.svg'



export default function Form() {

  const [brochureDownload , setBrochureDownload ] = useState(true)
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
      await axios.post("https://node-email-sendersss.glitch.me/majidi", {email, name, phone} ,config).then(window.open('Brochure_20x20_4Folded.pdf'))
  };




  return (
    <>        
      <section data-aos='zoom-in-up'>
      <div  className=''>
          <div className='container'>
            <div className='brochurRight'>
            <form style={{width:'100%',maxWidth:'1000px' , maxHeight:'1000px' , display: 'flex' , flexWrap: 'nowrap'}} onSubmit={handleSubmit}>
                <h2>Request Meeting</h2>
                <p>Please provide your details to Request Meeting</p>
                <label for='name'>Name</label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} name='name' placeholder='Your Name' required></input>
                <label for='email' >Email</label>
                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} name='email'  placeholder='Your Email' required></input>
                <label for='phone'>Phone Number</label>
                <input value={phone} type='text' onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='Your Phone Number' required></input>
                <div style={{display:'flex' , marginTop:10, marginBottom:10, alignItems:'center' ,width: '100%', justifyContent: 'space-between'}}>
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
          </section>
    </>
  )
}
