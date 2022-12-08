import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import image from './logowhite.png'

const Footer = () => {
  return (
    <>
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
              <h2>Zest Property</h2>
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
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  )
}

export default Footer
