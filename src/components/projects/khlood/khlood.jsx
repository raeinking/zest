import './khlood.css'
import khlood1 from '../../images/klood1.jpg'
import khlood2 from '../../images/khlood2.jpg'
import khlood3 from '../../images/khlood3.jpg'
import khlood4 from '../../images/khlood4.jpg'
import khlood5 from '../../images/khlood5.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import env from "react-dotenv";



const Khlood = () => {
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
  const [body , setBody] = useState('مرحبا، أنا مهتم ب ' + "[ " + "مجمع الخلود السكني" + " ]")
  const [enbody , setEnbody] = useState(" i'm intrestied in " + "[ " + "al khlood" + " ]")


  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
    {fword == 'ar' ? 
      <Helmet>
        <title>مجمع الخلود السكني - عقارات زيست</title>
        <meta name='description' content="مجمع الخلود السكني يوفر تجربة مميزة بالخدمات التي يقدمها للمستثمرين والساكنين في محافظة بغداد. يحوي المجمع على نظام حماية كامل, مساحات خضراء, مقاهي ومساحات للأطفال.. مع وجود مراكز تجارية." />
      </Helmet>
      : 
      <Helmet>
        <title>Al Khlood - Zest Property</title>
        <meta name="description" content="Al Khlood residence is a welcoming compound for both people and investors. Al Khlood offers a collection of options and features. We have a full security system for your family. green places to refresh the air. kids playgrounds, a car garage. and more " />
      </Helmet>
      }
      {paths == '/khlood' ? 
      <>
    <section className='heroalewd'>
        <h1>AL - KHLOOD</h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input  onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
        <button className="">Subscribe</button>
        </form>
      <div className='test'>
        <img src={khlood1}  alt='klood' />
        <div className='paraghraf'>
                  <h2>ِApartment Details</h2>
          <ul className='ulsklood'>
            <li>
              🏢 4 Towers 
            </li>
            <li>
              🚘 Car Garage
            </li>
            <li>
              🏕 Garden 
            </li>
            <li>
            👪🎠 Kids Playground
            </li>
            <li>
              ⛽️  Gas Station
            </li>
            <li>
              🚒  Firefighters Station
            </li>
          </ul>
        </div>
      </div>
      <div className='test revers'>
        <img src={khlood4}  alt='klood' />
        <div className='paraghraf'>
          <h2>🏢  Details of Apartment   ( 3 + 1 )</h2>
          <ul>
            <li>
📏 ( 193 m² ) Area
</li>
            <li>
🛏 3 Bed Romms 
        </li>
            <li>

🛋 1 Living Room 
    </li>
            <li>

📏 Price by Meter ( 1,100 ) Dollar            </li>
          </ul>
        </div>
      </div>
      <div className='test'>
        <img src={khlood2}  alt='klood' />
        <div className='paraghraf'>
                            <h2>For More Details, Please Call:

</h2>
          <ul className='ulsklood'>
            <li>
              <a href='tel:+9647706212006'>
                ☎️ Customer service 1 : 964 770 621 2006
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
              defaultValue={"I'm interested " + "[ " + "klood" + " ]"}
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
      src={'https://www.youtube.com/embed/Av9ZM_dpKuM'}
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
      <section className='heroalewd'>
        <h1>مجمع الخلود السكني </h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input  onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
        <button className="">Subscribe</button>
        </form>
      <div className='test'>
        <img src={khlood1}  alt='klood' />
        <div className='paraghraf'>
        <h2>معلومات الشقة</h2>
          <ul className='ulsklood'>
            <li>
              🏢 4ز عمارات 
            </li>
            <li>
              🚘 گراج
            </li>
            <li>
              🏕 حدیقة 
            </li>
            <li>
            👪🎠 حديقة اطفال
            </li>
            <li>
              ⛽️ محطة نفط
            </li>
            <li>
              🚒 محطة إطفاء
            </li>
          </ul>
        </div>
      </div>
      <div className='test revers'>
        <img src={khlood4}  alt='klood' />
        <div className='paraghraf'>
          <h2>🏢 معلومات عن الشقة نموذج ( ٣ - ١ )</h2>
          <ul>
            <li>
📏 ( ١٩٣ م²) المساحة
</li>
            <li>
🛏 ٣ غرف  نوم 
        </li>
            <li>

🛋 ١ صالة 
    </li>
            <li>

📏 سعر المتر ( ١,١٠٠ ) دولار            </li>
          </ul>
        </div>
      </div>
      <div className='test'>
        <img src={khlood2}  alt='klood' />
        <div className='paraghraf'>
                  <h2>للحجز الاتصال على الأرقام التالية:</h2>
          <ul className='ulsklood'>
            <li>
            <a href='tel:+9647706212006'>
              ☎️ رقم 1 : 2006 621 770 964
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
              defaultValue={"مرحبا، أنا مهتم ب"  + "[ " + "مجمع الخلود السكني" + " ]"}
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
      src={'https://www.youtube.com/embed/Av9ZM_dpKuM'}
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

export default Khlood



  
