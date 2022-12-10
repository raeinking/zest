import React, { useRef } from 'react';
import img from "../images/immio.jpg"
import Back from "../common/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      emailjs.sendForm('service_4qv8gfl', 'template_cjprz24', form.current, 'SPlm2dvo1WXPhBUGV').then(alert('Message Send successfully'))
  };


  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form ref={form} onSubmit={sendEmail} className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input className="cinput" type='text' placeholder='Name *' name="user_name" required={true} />
              <input className="cinput"  type='email' placeholder='Email *' name="user_email" required={true}/>
            </div>
            <input className="cinput" name='from_phone'  type='text' placeholder='Number *' required={true} />
            <textarea cols='30' rows='10' name="message" placeholder='Message...'></textarea>
            <input className='submit' type="submit" value="Send" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
