import React, { useRef, useState } from 'react';
import { footer } from "../../data/Data"
import { arfooter } from "../../data/Data"
import "./footer.css"
import image from './logowhite.jpg'
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import env from "react-dotenv";




const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (newslatter == '') { 
    } else {
        emailjs.sendForm(process.env.REACT_APP_server_id, process.env.REACT_APP_template_id, form.current, process.env.REACT_APP_public_id)
        .then((result) => {
            alert('thank you for subscribe')
        }, (error) => {
            alert('sorry we have a problem please try again letter 😔')
        });
    }
  }
  const [newslatter , setNewslatter] = useState('')

  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]
  return (
    <>
    {fword == 'ar'?
    <section>
      {/* <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h4>Do You Have Questions ?</h4>
              <p>Zest property for real estate.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container'>
          <img src={image} alt='zest property' />
          <div className='box'>
            <div className='logo'>
              <div className="footerleft">
                <h2 className="ar">شركة زيست</h2>
                <div className="p">
                  <p className="ar">سجل ايميلك لتلقي اخر التحديثات</p>
                </div>
              </div>
              <form className='forms' ref={form} onSubmit={sendEmail}>
                <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني*' />
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
      {/* <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h2>Do You Have Questions ?</h2>
              <p>Zest property for real estate.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container'>
                <img src={image} alt='zest property' />
          <div className='box'>
            <div className='logo'>
              <div className="footerleft">
                <h2>Zest Property</h2>
                <p>Receive Update from Us enter your email</p>
              </div>
              <form className='forms' ref={form} onSubmit={sendEmail}>
                <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
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
