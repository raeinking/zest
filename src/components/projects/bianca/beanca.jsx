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
  const [enbody , setEnbody] = useState(" i'm intrestied in " + "[ " + "bianca" + " ]")


  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
      <Helmet>
        <title>Bianca - Zest Property</title>
        <meta name="description" content="Looking for a luxurious villa in Dubai, Bianca? Our selection of stunning villas is sure to impress. From spacious layouts and gorgeous interiors to outdoor amenities like private pools and landscaped gardens, our villas have everything you need for an unforgettable stay in this glamorous city. Browse our collection now and find your dream villa in Dubai, Bianca." />
      </Helmet>
    <section className='herobianca'>
        <p>You will live in luxury in</p>
        <h1>Bianca</h1>
    </section>
    <main>
    <form className='formss' ref={form} onSubmit={sendEmail}>
        <input onChange={e => setNewslatter(e.target.value)} className='formsinput' type='text' name='email' placeholder='Email Address *' />
        <button className="">Subscribe</button>
        </form>
      <div className='test'>
        <img src={alweddb}  alt='klood' />
        <div className='paraghraf'>
        <h2> Bianca Prices Starts From </h2>
          <ol className='ulsklood'>
            <li>
              360,000$ 2 Bedrooms + Hall
            </li>
            <li>
                500,000$ 3 Bedrooms + Hall
            </li>
            <li>
                555,555$ 4 Bedrooms + Hall
            </li>
          </ol>
        </div>
      </div>
     <div className='test revers'>
        <img src={alweddh2}  alt='klood' />
               <div className='paraghraf'>
        <h2> Payment Plan For Bianca </h2>
          <ol className='ulsklood'>
            <li>
               10% in down payment, 1% in monthly payments (You get a 5% discount)
            </li>
            <li>
               20% in down payment, 1% in monthly payments (You get a 10% discount)
            </li>
            <li>
               30% in down payment (You get a 15% discount)
            </li>
            <li>
             Pay in cash to get a 40% discount 
            </li>
          </ol>
        </div>
      </div>
      <div className='test'>
        <img src={alweddicon}  alt='klood' />
        <div className='paraghraf'>
        <h2>for more details content us :</h2>
          <ul className='ulsklood'>
            <li>
            <a href='tel:+9647502552006 '>
            number 1 : 964 750 255 2006
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
              placeholder='Phone Number*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='message*'
              defaultValue={"I'm interested " + "[ " + "bianca" + " ]"}
              onChange={e => setEnbody(e.target.value)}
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



  
