import '../khlood/khlood.css'
import alweddb from '../../images/alwedb.jpg'
import alwedd1 from '../../images/alwedd3.jpg'
import alweddc from '../../images/alwed2.jpg'
import alweddh from '../../images/New_Catalogue-58.jpg'
import alweddicon from '../../images/alweddiacon.jpg'
import alweddh2 from '../../images/alwedh.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';



const Alwedd = () => {
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
  const [newslatter , setNewslatter] = useState('')
  const [nname , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('مرحبا، أنا مهتم ب ' + "[ " + "مجمع الود السكني" + " ]")
  const [enbody , setEnbody] = useState(" i'm intrestied in " + "[ " + "al wedd" + " ]")


  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
    {fword == 'ar' ? 
      <Helmet>
        <title>مجمع الود السكني - عقارات زيست</title>
        <meta name='description' content="ان مجمع الود السكني يتكون من 6 عمارات ذات 15 طابق لكل منها بنظام حماية كامل وخصوصية مناسبة لكل الشقق.. مواد عازلة للصوت وبلكونات مُطلة على مناظر خضراء" />
      </Helmet>
      : 
      <Helmet>
        <title>Al Wedd - Zest Property</title>
        <meta name="description" content="al wedd residence is a welcoming compound for both people and investors. Al wedd offers a collection of options and features. We have a full security system for your family. green places to refresh the air. kids playgrounds, a car garage. and more " />
      </Helmet>
      }
      {paths == '/alwedd' ? 
      <>
    <section className='heroalwedd'>
        <h1>AL - WEDD</h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
        <button className="">Subscribe</button>
        </form>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 Building Details - A + B </h2>
          <ul className='ulsklood'>
            <li>
              👷15 floors

            </li>
            <li>
              🛏 3 bedroom 

            </li>
            <li>
              🏢 total apartments 60
 
            </li>
            <li>
            📐 gross area 650 m²

            </li>
            <li>
               🛏 4 bedrooms & hall 

            </li>
          </ul>
        </div>
      </div>
     <div className='test revers'>
        <img src={alweddc}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 building details - C  
 
</h2>
          <ul className='ulsklood'>
            <li>
              👷15 floors
            </li>
            <li>
              🛏 4 bedrooms
            </li>
            <li>
              🏢 total apartments 60

 
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
        <img src={alweddh}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏠 details about villa </h2>
          <ul className='ulsklood'>
            <li>
              📐  area 300 m²
            </li>
            <li>
              🛏 5 bedrooms
            </li>
            <li>
              🛁 5 bathroom 
            </li>
            <li>
            🛋 1 hall
            </li>
            <li>
               🍽 1 kitchen
            </li>
          </ul>
        </div>
      </div>
     <div className='test revers'>
        <img src={alweddh2}  alt='klood' />
               <div className='paraghraf'>
        <h2>🏠 details about villa </h2>
          <ul className='ulsklood'>
            <li>
              📐  area 200 m²
            </li>
            <li>
              🛏 3 bedroom
            </li>
            <li>
              🛁 4 bathroom
            </li>
            <li>
            🛋 1 hall 
            </li>
            <li>
               🛋 1 living room
            </li>
          </ul>
        </div>
      </div>
      <div className='test'>
        <img src={alweddicon}  alt='klood' />
        <div className='paraghraf'>
                  <h2>for more details content us :</h2>
          <ul className='ulsklood'>
            <li>
            <a href='tel:+9647705132006 '>
              ☎️ number 1 : 964 770 513 2006
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
              defaultValue={"I'm interested " + "[ " + "alwedd" + " ]"}
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
          <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={'https://www.youtube.com/embed/KV2QCUpB0Zc'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  </div>
    </main>
      </>
    :
    <>
    
      <section className='heroalwedd'>
        <h1>مجمع الود السكني </h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='البريد الإلكتروني *' />
        <button className="">أرسل</button>
        </form>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏢 معلومات عن البلدة نموذج A + B </h2>
          <ul className='ulsklood'>
            <li>
              👷15 طابقا

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
        <h2>🏢 معلومات عن البلدة نموذج C 
 
</h2>
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
        <img src={alweddh}  alt='klood' />
        <div className='paraghraf'>
        <h2>🏠 معلومات عن المنزل</h2>
          <ul className='ulsklood'>
            <li>
              📐  مساحة 300 متر
            </li>
            <li>
              🛏 5 غرفة نوم
            </li>
            <li>
              🛁 5 حمام 
            </li>
            <li>
            🛋 1 صالة
            </li>
            <li>
               🍽 1 مطبخ
            </li>
          </ul>
        </div>
      </div>
      <div className='test revers'>
        <img src={alweddh2}  alt='klood' />
               <div className='paraghraf'>
        <h2>🏠 معلومات عن المنزل</h2>
          <ul className='ulsklood'>
            <li>
              📐  مساحة 200 متر
            </li>
            <li>
              🛏 3 غرفة نوم
            </li>
            <li>
              🛁 4 حمام
            </li>
            <li>
            🛋 1صالة
            </li>
            <li>
               🛋 1 غرفة جلوس
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
              <a href='tel:+9647705132006'>
                ☎️ رقم 1 : 2006 513 770 964
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
              defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجمع الود السكني" + " ]"}
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
          <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={'https://www.youtube.com/embed/KV2QCUpB0Zc'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  </div>
    </main>
    </>
    }
    </>
  )
}

export default Alwedd



  
