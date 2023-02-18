import React , {useState} from "react"
import Heading from "../../common/Heading"
import { useLocation } from "react-router-dom";
import "./hero.css"
import search from '../../images/search.jpg'
import zest from './zest.png'
import ips from './ips.png'





const Hero = () => {
    const email = 'zest@zest-property.com'
  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('')


  const location = useLocation();
  const paths = window.location.pathname;

  return (
    <>
    {paths == '/' ? 
      <section data-aos="fade-up" className='hero'>
          <p>Find Your Next Home In.</p>
          <h1 title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'>Zest Property</h1>
          <div class="login-box">
          <h2>Contact us to easily find your new home</h2>
          <form>
            <div class="user-box">
              <input onChange={e => setName(e.target.value)} placeholder="Name " type="text" name="" required=""></input>
            </div>
            <div class="user-box">
              <input onChange={e => setPhone(e.target.value)} placeholder="Number" type="text" name="" required=""></input>
            </div>
            <div class="user-box">
              <input onChange={e => setBody(e.target.value)} placeholder="Email" type="text" name="" required=""></input>
            </div>
            <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>Submit</p>
            </a>
          </form>
          </div>
      </section>
      :       
      <section data-aos="fade-up" className='hero'>
      <div className="snow">
  </div>
          <p className="ar">فرصة لعرض احدث واجدد العقارات القريبة منك</p>
          <h1 className="ar">شركة زيست</h1>
          <div class="login-box">
          <h2>تواصل معنا لتسهيل عملية ايجاد عقارك الجديد</h2>
          <form>
            <div class="user-box">
              <input  onChange={e => setName(e.target.value)} placeholder="الأسم " type="text" name="" required=""></input>
            </div>
            <div class="user-box">
              <input  onChange={e => setPhone(e.target.value)} placeholder="رقم الهاتف" type="text" name="" required=""></input>
            </div>
            <div class="user-box">
              <input  onChange={e => setBody(e.target.value)} placeholder="الأيميل " type="text" name="" required=""></input>
            </div>
            <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p className="ar">إرسال</p>
            </a>
          </form>
          </div>
      </section>
      }
    </>
  )
}

export default Hero