import '../khlood/khlood.css'
import alweddb from '../../images/Bianca-park.jpg'
import alwedd1 from '../../images/Bianca-water.jpg'
import alweddc from '../../images/Bianca-water.jpg'
import alweddh from '../../images/Bianca-night.jpg'
import alweddicon from '../../images/Biancaicon.jpg'
import alweddh2 from '../../images/Bianca-garden.jpg'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';



const Alwedd = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_server_id, process.env.REACT_APP_template_id, form.current, process.env.REACT_APP_public_id)
        .then((result) => {
        alert('thank you for subscribe')
    })}

  const email = 'zest@zest-property.com'
  const [newslatter , setNewslatter] = useState('')
  const [nname , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [enbody , setEnbody] = useState('مرحبا، أنا مهتم ب ' + "[ " + "مشروع بيانكا" + " ]")


  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
      <Helmet>
        <title>مشروع بيانكا - عقارات زيست </title>
        <meta name="description" content="هل تبحث عن فيلا فاخرة في دبي بيانكا؟ تتميز مجموعتنا من الفلل الرائعة بالمساحات الواسعة والتصاميم الداخلية الفاخرة، بالإضافة إلى وسائل الراحة في الهواء الطلق مثل حمامات السباحة الخاصة والحدائق المزينة. تحتوي فللنا على كل ما تحتاجه لقضاء إقامة لا تُنسى في هذه المدينة الفاخرة. تصفح مجموعتنا الآن واعثر على فيلا الأحلام الخاصة بك في دبي، بيانكا." />
      </Helmet>
    <section className='herobianca'>
        <p>سوف تعيش في رفاهية في</p>
        <h1>مشروع بيانكا</h1>
    </section>
    <main>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2> أسعار بيانكا تبدأ من </h2>
          <ol className='ulsklood'>
            <li>
              ٣٦٠،٠٠٠$ غرفتين نوم وصاله 
            </li>
            <li>
                ٥٠٠،٠٠٠$  ثلاث غرف نوم وصاله 
            </li>
            <li>
                ٥٥٥،٥٥٥$ اربع غرف نوم وصالة 
            </li>
          </ol>
        </div>
      </div>
     <div className='test revers'>
        <img src={alweddh2}  alt='klood' />
        <div className='paraghraf'>
        <h2> خطة الدفع لبيانكا </h2>
          <ol className='ulsklood'>
            <li>
               مقدمة ١٠٪ شهريا ١٪ تحصل على خصم (٥٪)
            </li>
            <li>
               مقدمة ٢٠٪ شهريا ١٪ تحصل على خصم (١٠٪)
            </li>
            <li>
               مقدمة ٣٠٪ تحصل على خصم (١٥٪)
            </li>
            <li>
            دفع كاش خصم ٪٤٠
            </li>
          </ol>
        </div>
      </div>
      <div className='test'>
        <img src={alweddicon}  alt='klood' />
        <div className='paraghraf'>
        <h2>للحجز الاتصال على الأرقام التالية :</h2>
          <ul className='ulsklood'>
            <li>
                <a href='tel:+9647502552006 '>
                    رقم 1 : 2006 255 750 964
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
              placeholder='الهاتف*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='رسالة*'
              defaultValue={'مرحبا، أنا مهتم ب ' + "[ " + "مشروع بيانكا" + " ]"}
              onChange={e => setEnbody(e.target.value)}
            />
            <div className='flex gap-x-2'>
              <a href={`mailto:zest@zest-property.com?subject=${nname + ': ' + phone}&body=${enbody}`}>
                <p
                  className='buttonss'
                  type='submit'
                >
                  أرسل رسالة
                </p>
            </a>
            </div>
          </form>
            <a className='buttonsss' href='bianca.pdf'>Bianca PDF</a>
          <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={'https://www.youtube.com/embed/Ea1-rdvC4Jw'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  </div>
    </main>
    </>
  )
}

export default Alwedd



  
