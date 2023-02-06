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
      <section className='hero'>
          {/* <h1 title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'>Zest Property</h1>
          <p>Find Your Next Home In Zest Property.</p> */}
          <div className="herocontain" >
          <h3>Zest Property - Luxury Estate</h3>
            <h1>VISIT US!</h1>
            <h3 className="h3">International Property Show. Dubai 2023</h3>
            <h3 className="h3">Dubai World Trade Center. United. AE. Arab</h3>
            <div className="heroborder">
              <h3>12 - 14 February 2023</h3>
            </div>
            <div className="herologo">
              <img src={zest}  alt="zest"></img>
              <div className='zestborder'></div>
              <a href="https://www.internationalpropertyshow.ae/dubai"><img src={ips} alt="ips" ></img></a>
            </div>
          </div>
          {/* <div class="login-box">
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
          </div> */}
      </section>
      :       
      <section className='hero'>
      <div className="snow">
  </div>
          {/* <h1 className="ar">شركة زيست</h1>
          <p className="ar">فرصة لعرض احدث واجدد العقارات القريبة منك</p> */}
            <div className="herocontain" >
          <h3 className="h3 ar">زيست للعقارات الفاخرة</h3>
            <h2 className="ar">!زوروا جناحنا</h2>
            <h3 className="h3 ar">في معرض العقارات الدولي - دبي 2023</h3>
            <h3 className="h3 ar">برج التجارة العالمي، دبي، الامارات</h3>
            <div className="heroborder">
              <h3 className="h3e ar">12-14 شباط 2023</h3>
            </div>
            <div className="herologo">
              <img src={zest}  alt="zest"></img>
              <div className='zestborder'></div>
              <img src={ips} alt="ips"></img>
            </div>
          </div>
          {/* <div class="login-box">
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
          </div> */}
      </section>
      }
    </>
  )
}

export default Hero