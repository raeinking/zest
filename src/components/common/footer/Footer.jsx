import React, { useRef, useState } from 'react';
import { footer } from "../../data/Data"
import { arfooter } from "../../data/Data"
import "./footer.css"
import image from './logowhite.jpg'
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import env from "react-dotenv";




const Footer = () => {
  const [email, setEmail] = useState('')

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
    alert('thank you we will send newsletters for you')  
    setEmail('')
  }
}


  const form = useRef();
  const [newslatter, setNewslatter] = useState('')

  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]
  return (
    <>
      {fword == 'ar' ?
        <section>
          <footer>
            <div className='container'>
              <img src={image} alt='zest property' />
              <div className='box'>
                <div className='logo'>
                  <div className="footerleft">
                    <h2 className="ar">شركة زيست</h2>
                    <div className="p">
                      <p className="ar">زودنا بأيميلك وكن اولويتنا في الحصول على افضل تحديثات تناسب احتياجاتك</p>
                    </div>
                  </div>
                  <form className='forms' ref={form} onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)} className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني*' />
                    <button className=" ar ">اشترك</button>
                  </form>
                </div>
              </div>

              {arfooter.map((val) => (
                <div className='box'>
                  <h3 className="ar">{val.title}</h3>
                  <ul>
                    {val.text.map((items) => (
                      <a target={'_blank'} href={items.link}>
                        <li className="ar"> {items.list} </li>
                      </a>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </footer>
          <div className='legal'>
            <span className="">© 2023 عقارات زيست. تصميم ريان جعفر.</span>
          </div>
        </section>
        :
        <section>
          <footer>
            <div className='container'>
              <img src={image} alt='zest property' />
              <div className='box'>
                <div className='logo'>
                  <div className="footerleft">
                    <h2>Zest Property</h2>
                    <p>Enter your email and you'll be our top priority!</p>
                  </div>
                  <form className='forms' onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
                    <button className="">Subscribe</button>
                  </form>
                </div>
              </div>
              {footer.map((val) => (
                <div className='box'>
                  <h3>{val.title}</h3>
                  <ul>
                    {val.text.map((items) => (
                      <a target={'_blank'} href={items.link}>
                        <li> {items.list} </li>
                      </a>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </footer>
          <div className='legal'>
            <span>© 2023 Zest Property. Designd By Rayan Jafar.</span>
          </div>
        </section>
      }
    </>
  )
}

export default Footer
