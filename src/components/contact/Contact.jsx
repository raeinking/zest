import React, { useState } from 'react';
import img from "../images/immio.jpg"
import Back from "../common/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";



const Contact = () => {
  const email = 'zest@zest-property.com'
  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('')

  const location = useLocation();
  const paths = window.location.pathname;

  return (
    <>
      {paths == '/contact' ? 
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form  className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input className="cinput" onChange={e => setName(e.target.value)} type='text' placeholder='Name *' name="user_name" required={true} />
            </div>
            <input className="cinput" onChange={e => setPhone(e.target.value)} name='from_phone'  type='text' placeholder='Number *' required={true} />
            <textarea cols='30' onChange={e => setBody(e.target.value)} rows='10' name="message" placeholder='Message...'></textarea>
            <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
              <input className='submit' value="Send" />
            </a>
          </form>
        </div>              

      </section>
      :
      <section className='contact mb'>
        <Back name='اتصل بنا' title='احصل على المساعدة' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>املئ النموذج</h4> <br />
            <div>
              <input className="cinput" type='text' placeholder='اسم *' name="user_name" required={true} />
            </div>
            <input className="cinput" name='from_phone'  type='text' placeholder='رقم *' required={true} />
            <textarea cols='30' rows='10' name="message" placeholder='رسالة...'></textarea>
            <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
              <input className='submit' value="إرسال" />
            </a>
          </form>
        </div>
      </section>}
    </>
  )
}

export default Contact
