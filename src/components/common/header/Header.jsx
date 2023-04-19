import React, { useState } from "react"
import "./header.css"
import { arnav } from "../../data/Data"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import image from './logobrown.jpg'
import { useLocation } from "react-router-dom";
import close from '../../images/close.jpg'


const Header = () => {
  const [navList, setNavList] = useState(false)
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
      {fword == 'ar' ?
        <header>
          <div className='container flex'>
            <div className='logo'>
              <a href="/ar">
                <img src={image} alt='zest property' />
              </a>
            </div>
            <div className='nav'>
              <ul className={navList ? "small" : "flex"}>
                {arnav.map((list, index) => (
                  <li key={index}>
                    <a className="ar" href={list.path}>{list.text}</a>
                  </li>
                ))}
                <a className="lang ar" href="/">إنجليزي</a>
              </ul>
            </div>
            <div className='toggle'>
              <button onClick={() => setNavList(!navList)}>{navList ? <img className="close" src={close} alt='closes'></img> : <p className="humberger">☰</p>}</button>
            </div>
          </div>
        </header>
        :
        <header>
          <div className='container flex'>
            <div className='logo'>
              <a href="/">
                <img src={image} alt='zest property' />
              </a>          </div>
            <div className='nav'>
              <ul className={navList ? "small" : "flex"}>
                {nav.map((list, index) => (
                  <li key={index}>
                    <a href={list.path}>{list.text}</a>
                  </li>
                ))}
                <a className="lang" href='/ar'>Arabic</a>
              </ul>
            </div>
            <div className='toggle'>
              <button onClick={() => setNavList(!navList)}>{navList ? <img className="close" src={close} alt='close'></img> : <p className="humberger">☰</p>}</button>
            </div>
          </div>
        </header>
      }
    </>
  )
}

export default Header
