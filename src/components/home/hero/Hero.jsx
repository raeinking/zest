import React , {useState} from "react"
import Heading from "../../common/Heading"
import { useLocation } from "react-router-dom";
import "./hero.css"
import search from '../../images/search.jpg'
import zest from './zest.png'
import ips from './ips.png'


const options = ['Option 1', 'Option 2', 'Option 3']; // array of selectable options



const Hero = () => {
  const location = useLocation();
  const email = 'zest@zest-property.com'
  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('')
  const [saleType, setSaleType] = useState('')

  
  const paths = window.location.pathname;
  const search = window.location.search
  
  const queryParams = new URLSearchParams(search)

  const resident = queryParams.get("project")
  const type = queryParams.get("type")
  const meter = queryParams.get("meter")
  const cityParams = queryParams.get("city")
  const priceParams = queryParams.get("Price")
  const propertyParams = queryParams.get("Property")
  const saleTypeParams = queryParams.get("saleType")
  

  return (
    <>
    {paths == '/' ? 
      <section data-aos="fade-up" className='hero'>
          <h1 title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'>Zest Property</h1>
          <p>Find Your Next Home In Zest Property.</p>
          <div className="">
          <form className="alls" action="/properties">
            <div className="fromsearch">
            <div className="sdsd">
            <div className="buysell">
              <input id="radCreateMode"  type='radio' value='Buy' name="saleType" className='none' ></input>
              <label onClick={()=> setSaleType('buy')} for="radCreateMode" className={saleType == 'buy' ? 'selectType  selectet ' : 'selectType'}>Buy</label>
             
              <input id="red"  type='radio' value='Rent' name="saleType" className='none' ></input>
              <label onClick={()=> setSaleType('rent')} for="red" className={saleType == 'rent' ? 'selectType  selectet ' : 'selectType'}>Rent</label>    
            </div>
            <input type='submit' value='Search' className="searchbtn"></input>
            </div>
              <div className="allselect">
                <select defaultValue={resident} name="project" className="selectt search1 ">
                  <option value="">Projects Name</option>
                  <option value="North">North</option>
                  <option value="Sky View">Sky View</option>
                  <option value="venus">Venus</option>
                  <option value="Qaiwan">Qaiwan</option>
                  <option value="Nova">Nova</option>
                </select>
                <select defaultValue={propertyParams}  name="Property" className="selectt">
                  <option value=''>Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                </select>
                <select defaultValue={cityParams}  name="city" className="selectt">
                  <option value=''>City</option>
                  <option value="Erbil">Erbil</option>
                  <option value="Baghdad">Baghdad</option>
                  <option value="Kirkuk">Kirkuk</option>
                </select>
                <select defaultValue={type}  name="type" className="selectt">
                  <option value="">Rooms</option>
                  <option value="1 + 1">1 + 1</option>
                  <option value="1 + 2">1 + 2</option>
                  <option value="1 + 3">1 + 3</option>
                  <option value="1 + 4">1 + 4</option>
                  <option value="1 + 5">1 + 5</option>
                  <option value="1 + 6">1 + 6</option>
                </select>
                <select defaultValue={meter}  name="meter" className="selectt">
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
            </div>
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
          </div> */}
          <form className="alls" action="/ar/properties">
            <div className="fromsearch">
            <div className="sdsd">
            <div className="buysell">
              <input id="radCreateMode"  type='radio' value='للبيع' name="saleType" className='none' ></input>
              <label onClick={()=> setSaleType('للبيع')} for="radCreateMode" className={saleType == 'للبيع' ? 'selectType  selectet ' : 'selectType'}>للبيع</label>
             
              <input id="red"  type='radio' value='يجار' name="saleType" className='none' ></input>
              <label onClick={()=> setSaleType('يجار')} for="red" className={saleType == 'يجار' ? 'selectType  selectet ' : 'selectType'}>يجار</label>    
            </div>
            <input type='submit' value='بعث' className="searchbtn"></input>
            </div>
              <div className="allselect">
                <select defaultValue={resident} name="project" className="selectt search1 ">
                  <option value="">اسم المشروع</option>
                  <option value="نورث هولند">نورث هولند</option>
                  <option value="سكاي فيو">سكاي فيو</option>
                  <option value="فينوس تاوەر">فينوس تاوەر</option>
                  <option value="قیوان میرادور">قیوان میرادور</option>
                  <option value="نوفا تاوەر">نوفا تاوەر</option>
                </select>
                <select defaultValue={propertyParams}  name="Property" className="selectt">
                  <option value=''>نوع المشروع</option>
                  <option value="شقة">شقة</option>
                  <option value="بوت">بوت</option>
                </select>
                <select defaultValue={cityParams}  name="city" className="selectt">
                  <option value=''>الموقع</option>
                  <option value="اربيل">اربيل</option>
                  <option value="بغداد">بغداد</option>
                  <option value="کیرکوك">کیرکوك</option>
                </select>
                <select defaultValue={type}  name="type" className="selectt">
                  <option value="">عدد الغرف</option>
                  <option value="1 + 1">1 + 1</option>
                  <option value="1 + 2">1 + 2</option>
                  <option value="1 + 3">1 + 3</option>
                  <option value="1 + 4">1 + 4</option>
                  <option value="1 + 5">1 + 5</option>
                  <option value="1 + 6">1 + 6</option>
                </select>
                <select defaultValue={meter}  name="meter" className="selectt">
                  <option value=''>متر</option>
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
            </div>
          </form>
      </section>
      }
    </>
  )
}

export default Hero