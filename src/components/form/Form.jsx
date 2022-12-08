import React, { useRef } from 'react';
import './form.css'
import emailjs from '@emailjs/browser';


export default function Form() {

   const form = useRef();

    const sendEmail = (e) => {
      emailjs.sendForm('service_58wqhuh', 'template_7e83t3q', form.current, 'SPlm2dvo1WXPhBUGV').then(alert('Message Send successfully'))
  };

  return (
    <>
    <h4 className='h4'>fill the form and we will reach you quickly</h4>
    <form ref={form} onSubmit={sendEmail} className='formcrm'>
        <input type={'text'} name='to_name' placeholder='Name *' required={true}></input>
        <input type={'email'} name='to_email' placeholder='Email *' required={true}></input>
        <input type={'text'} name='to_number' placeholder='Number *' required={true}></input>
        <textarea name='to_message' value={"Hello, I am interested in this property {" + window.location.href + "} and would like to inquire about it. I look forward to hearing from you."} placeholder='Message *' required={true} rows="4" cols="50"></textarea>
        <input className='submit' type={'submit'}></input>
    </form>
    </>
  )
}
