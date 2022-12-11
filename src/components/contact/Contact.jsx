import React, { useRef } from 'react';
import img from "../images/immio.jpg"
import Back from "../common/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_4qv8gfl', 'template_cjprz24', form.current, 'SPlm2dvo1WXPhBUGV').then(alert('Message Send successfully'))
  };
  const location = useLocation();
  const paths = window.location.pathname;

  return (
    <>
      {paths == '/contact' ? 
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
      :
      <section className='contact mb'>
        <Back name='اتصل بنا' title='احصل على المساعدة والدعم الودود' cover={img} />
        <div className='container'>
          <form ref={form} onSubmit={sendEmail} className='shadow'>
            <h4>املأ النموذج</h4> <br />
            <div>
              <input className="cinput" type='text' placeholder='اسم *' name="user_name" required={true} />
              <input className="cinput"  type='email' placeholder='البريد الإلكتروني *' name="user_email" required={true}/>
            </div>
            <input className="cinput" name='from_phone'  type='text' placeholder='رقم *' required={true} />
            <textarea cols='30' rows='10' name="message" placeholder='رسالة...'></textarea>
            <input className='submit' type="submit" value="إرسال" />
          </form>
        </div>
      </section>}
    </>
  )
}

export default Contact
