import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/immio.jpg"
import "./about.css"
import { useLocation } from "react-router-dom";


const About = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/about' ? 
      <section className='about'>
        <Back name='About Us' title='Who are we - who are we?' cover={img} />
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and business process' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='aboutimg'>
            <img src={img} alt='' />
          </div>
        </div>
      </section>
      : 
      <section className='about'>
        <Back name='معلومات عنا' title='من نحن - من نحن؟' cover={img} />
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <Heading title='قصة وكالتنا' subtitle='تحقق من قصة شركتنا وعملية العمل' />
            <p>تحقق من قصة شركتنا وعملية العمل.تحقق من قصة شركتنا وعملية العمل تحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العمل</p>
            <p>تحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العملتحقق من قصة شركتنا وعملية العمل.</p>
            <button className='btn2'>المزيد عنا</button>
          </div>
          <div className='aboutimg'>
            <img src={img} alt='' />
          </div>
        </div>
      </section>
      }
    </>
  )
}

export default About
