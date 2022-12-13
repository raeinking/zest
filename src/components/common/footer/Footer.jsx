import React from "react"
import { footer } from "../../data/Data"
import { arfooter } from "../../data/Data"
import "./footer.css"
import image from './logowhite.jpg'
import { useLocation } from "react-router-dom";


const Footer = () => {
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
          <div className='box'>
            <div className='logo'>
              <img src={image} alt='' />
              <h1>عقارات زيست</h1>
              <p>تلقي تحديث منا أدخل بريدك الإلكتروني</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="btn1">اشترك</button>
              </div>
            </div>
          </div>

          {arfooter.map((val) => (
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
        <span>© 2022 عقارات زيست. تصميم ريان جعفر.</span>
      </div>
    </section>
      :
      <section>
      {/* <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>Zest property for real estate.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={image} alt='' />
              <h1>Zest Property</h1>
              <p>Receive Update from Us enter your email</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="btn1">Subscribe</button>
              </div>
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
        <span>© 2021 Zest Property. Designd By Rayan Jafar.</span>
      </div>
    </section>
      }
    </>
  )
}

export default Footer
