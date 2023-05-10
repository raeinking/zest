import React, { useState } from 'react';
import img from "../images/immio.jpg"
import Back from "../common/Back"
import "./contact.css"
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"




const Contact = () => {
  const email = 'zest@zest-property.com'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [body, setBody] = useState('')

  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]


  return (
    <>
      {fword == 'ar' ?
        <Helmet>
          <title>تواصل معنا - عقارات زيست</title>
          <meta name='description' content="تواصل معنا لتحصل على المساعدة المطلوبة ولجميع انواع الأسئلة التي يمكن ان تخطر لك قبل البدء بالإستثمار معنا" />
        </Helmet>
        :
        <Helmet>
          <title>Contact Us - Zest Property</title>
          <meta name="description" content="Feel free to contact us to get the help you need before investing on our company " />
        </Helmet>
      }
      {paths == '/contact' ?
        <section className='contact mb'>
          <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
          <div className='container'>
            <div className='dis'>
              <p><a href='tel:+9647507342006'>Phone Number: +964 750 734 2006</a></p>
              <p><a href='tel:+9647506662006'>Phone Number: +964 750 666 2006</a></p>
            </div>
            <form className='shadow'>
              <h4>Fillup The Form</h4> <br />
              <div>
                <input className="cinput" onChange={e => setName(e.target.value)} type='text' placeholder='Name *' name="user_name" required={true} />
              </div>
              <input className="cinput" onChange={e => setPhone(e.target.value)} name='from_phone' type='text' placeholder='Number *' required={true} />
              <textarea cols='30' onChange={e => setBody(e.target.value)} rows='10' name="message" placeholder='Message...'></textarea>
              <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
                <input className='submit' value="Send" />
              </a>
            </form>
          </div>
        </section>
        :
        <section className='contact mb'>
          <Back name='اتصل بنا' title='احصل على المساعدة' cover={img} />
          <div className='container'>
            <div className='dis'>
              <p><a href='tel:+9647507342006'>رقم موبایل: +964 750 734 2006</a></p>
              <p><a href='tel:+9647506662006'>رقم موبایل: +964 750 666 2006</a></p>
            </div>
            <form className='shadow'>
              <h4 className='ar'>املئ النموذج</h4> <br />
              <div>
                <input className="cinput ar" type='text' placeholder='اسم *' name="user_name" required={true} />
              </div>
              <input className="cinput ar" name='from_phone' type='text' placeholder='رقم *' required={true} />
              <textarea cols='30' rows='10' name="message" placeholder='رسالة...'></textarea>
              <a href={`mailto:${email}?subject=${name + ': ' + phone}&body=${body}`}>
                <input className='submit ar' value="إرسال" />
              </a>
            </form>
          </div>
        </section>}
    </>
  )
}

export default Contact
