import '../khlood/khlood.css'
import alweddb from '../../images/majidi1.jpg'
import alwedd1 from '../../images/alwedd3.jpg'
import alweddc from '../../images/majidi2.jpg'
import alweddh from '../../images/New_Catalogue-58.jpg'
import alweddicon from '../../images/majidilast.jpg'
import alweddh2 from '../../images/alwedh.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';



const Majedy = () => {
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
  const email = 'zest@zest-property.com'
  const [nname , setName] = useState('')
  const [newslatter , setNewslatter] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('مرحبا، أنا مهتم ب ' + "[ " + "مجدي فیو" + " ]")
  const [enbody , setEnbody] = useState(" i'm intrestied in " + "[ " + "Majidi View" + " ]")


  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
    {fword == 'ar' ? 
      <Helmet>
        <title>مجدي فیو - عقارات زيست</title>
        <meta name='description' content="ان مجمع الود السكني يتكون من 6 عمارات ذات 15 طابق لكل منها بنظام حماية كامل وخصوصية مناسبة لكل الشقق.. مواد عازلة للصوت وبلكونات مُطلة على مناظر خضراء" />
      </Helmet>
      : 
      <Helmet>
        <title>Majidi View - Zest Property</title>
        <meta name="description" content="al wedd residence is a welcoming compound for both people and investors. Al wedd offers a collection of options and features. We have a full security system for your family. green places to refresh the air. kids playgrounds, a car garage. and more " />
      </Helmet>
      }
      {paths == '/Majidi-View' ? 
      <>
    <section className='heroMajidi'>
        <h1>Majidi View</h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
        <button className="">Subscribe</button>
        </form>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 Building Details </h2>
        <div className='ulsklood'>
          <ul >
            <li>
              👷24 floors
            </li>
            <li>
              🏢 Total towers 11
            </li>
            <li>
              🏫 School
            </li>
            <li>
              🕌 Mosque
            </li>
            <li>
              🏪 Shop
            </li>
            <li>
              🏥 Hospital
            </li>
            <li>
              🏞 Park
            </li>
          </ul>
        </div>
        </div>
      </div>
     <div className='test revers'>
        <img src={alweddc}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 building details - C  
</h2>
          <ul className='ulsklood'>
            <li>
              👷24 floors
            </li>
            <li>
              🏢 total towers 11
            </li>
            <li>
              📐 gross area 730 m²
            </li>
            <li>
               📐  مساحة 180 متر
            </li>
            <li>
               🛏 3 bedrooms & hall
            </li>
          </ul>
        </div>
      </div>
    
      <div className='test'>
        <img src={alweddicon}  alt='klood' />
        <div className='paraghraf'>
            <h2>للحجز الاتصال على الأرقام التالية:</h2>
          <ul className='ulsklood'>
            <li>
              <a href='tel:+9647505622006'>
                ☎️ رقم 1 : 2006 562 750 964
              </a>
            </li>
            <li>
              <a href='tel:+9647505222006'>
                ☎️ رقم 2 : 2006 522 750 964
              </a>
            </li>
            <li>
              <a href='tel:+9647506322006'>
                ☎️ رقم 3 : 2006 632 770 964
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form className='formpage'>
            <input
              type='text'
              placeholder='Name*'
              onChange={e => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email Address*'
            />
            <input
              type='text'
              placeholder='Phone Number*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='رسالة*'
              defaultValue={"I'm interested " + "[ " + "Majidi View" + " ]"}
              onChange={e => setBody(e.target.value)}
            />
            <div className='flex gap-x-2'>
              <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${enbody}`}>
                <p
                  className='buttonss'
                  type='submit'
                >
                  Send Message
                </p>
            </a>
            </div>
          </form>
    </main>
      </>
    :
    <>
      <section className='heroMajidi'>
        <h1>مجدي فیو </h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني *' />
        <button className="">أرسل</button>
        </form>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 معلومات عن البلدة نموذج A + B </h2>
          <ul className='ulsklood'>
            <li>
              👷24 طابقا
            </li>
            <li>
              🛏 3 غرف  نوم 
            </li>
            <li>
              🏢 مجموع الشقق 60
            </li>
            <li>
            📐 مساحة البناء 650 متر
            </li>
            <li>
               🛏 4 غرف نوم وصالة
            </li>
            <li>
              📐 مساحة 200 متر
            </li>
          </ul>
        </div>
      </div>
      <div className='test revers'>
        <img src={alweddc}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 معلومات عن البلدة نموذج C </h2>
          <ul className='ulsklood'>
            <li>
              👷15 طابقا
            </li>
            <li>
              🛏 4 غرف  نوم 
            </li>
            <li>
              🏢 مجموع الشقق 60
            </li>
            <li>
            📐 مساحة البناء 730 متر
            </li>
            <li>
               📐  مساحة 180 متر
            </li>
            <li>
               🛏 3 غرف نوم وصالة
            </li>
          </ul>
        </div>
      </div>
     
      <div className='test'>
        <img src={alweddicon}  alt='klood' />
        <div className='paraghraf'>
                  <h2>للحجز الاتصال على الأرقام التالية:</h2>
          <ul className='ulsklood'>
            <li>
              <a href='tel:+9647505622006'>
                ☎️ رقم 1 : 2006 562 750 964
              </a>
            </li>
            <li>
              <a href='tel:+9647505222006'>
                ☎️ رقم 2 : 2006 522 750 964
              </a>
            </li>
            <li>
              <a href='tel:+9647506322006'>
                ☎️ رقم 3 : 2006 632 770 964
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form className='formpage'>
            <input
              type='text'
              placeholder='اسم*'
              onChange={e => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='البريد الإلكتروني*'
            />
            <input
              type='text'
              placeholder='الهاتف*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='رسالة*'
              defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجدي فیو" + " ]"}
              onChange={e => setBody(e.target.value)}
            />
            <div className='flex gap-x-2'>
              <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${body}`}>
                <p
                  className='buttonss'
                  type='submit'
                >
                  أرسل رسالة
                </p>
            </a>
            </div>
          </form>
    </main>
    </>
    }
    </>
  )
}

export default Majedy



  
