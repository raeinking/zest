import React , {useState} from "react"
import Heading from "../../common/Heading"
import { useLocation } from "react-router-dom";
import "./hero.css"
import search from '../../images/search.jpg'
import zest from './zest.png'
import ips from './ips.png'


const options = ['Option 1', 'Option 2', 'Option 3']; // array of selectable options



const Hero = () => {
    const email = 'zest@zest-property.com'
  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('')


  const location = useLocation();
  const paths = window.location.pathname;
  const search = window.location.search
  const queryParams = new URLSearchParams(search)
   const resident = queryParams.get("project")


  return (
    <>
    {paths == '/' ? 
      <section data-aos="fade-up" className='hero'>
          <h1 title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'>Zest Property</h1>
          <p>Find Your Next Home In Zest Property.</p>
          <div className="">
          <form action="/properties">
            <div className="all">
              <select name="project" className="selectt" 
              // onChange={(e) => searchItems(e.target.value)}
              >
                <option value="">Projects</option>
                <option value="North">North</option>
                <option value="Sky View">Sky View</option>
                <option value="venus">Venus</option>
                <option value="Qaiwan">Qaiwan</option>
                <option value="Nova">Nova</option>
              </select>
              <select name="type" className="selectt" 
              // onChange={(e) => searchItems(e.target.value)}
              >
                <option value="">Rooms</option>
                <option value="1 + 1">1 + 1</option>
                <option value="1 + 2">1 + 2</option>
                <option value="1 + 3">1 + 3</option>
                <option value="1 + 4">1 + 4</option>
                <option value="1 + 5">1 + 5</option>
                <option value="1 + 6">1 + 6</option>
              </select>
              <select name="meter" className="selectt" 
              // onChange={(e) => searchItems(e.target.value)}
              >
                <option value=''>Meter</option>
                <option value="67">67</option>
                <option value="72">72</option>
                <option value="76">76</option>
                <option value="78">78</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="90">90</option>
                <option value="105">105</option>
                <option value="115">115</option>
                <option value="120">120</option>
                <option value="140">140</option>
                <option value="201">201</option>
                <option value="210">210</option>
              </select>
            </div>
            <button>Search</button>
          </form>
    </div>
      </section>
      :       
      <section data-aos="fade-up" className='hero'>
      <div className="snow">
  </div>
          <h1 className="ar">شركة زيست</h1>
          <p className="ar">فرصة لعرض احدث واجدد العقارات القريبة منك</p>
            {/* <div className="herocontain" >
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
          </div> */}
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