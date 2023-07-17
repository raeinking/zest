import React, {useEffect, useState} from 'react'
import './stylear.css'
import azizi from './logoaiziz.png'
import zest from './logozest.png'
import onecontainer from './first.jpg'
import secondcontainer from './second.jpg'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';





function Eventar() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')      


  const handleSubmit = async (e) => {
        e.preventDefault()
        
      fetch('https://node-email-sendersss.glitch.me/azizi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone
        })
      })
      alert('Email sent successfully')  
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])





  return (
    <div>
        <div className='heroevent'>
            <div className='leftevent' data-aos="fade-right">
                <img className='logoz' src={azizi} alt="" />
                <div className='linemidsle'></div>
                <img className='logoz' src={zest} alt="" />
            </div>
            <div className='rightevent' data-aos="fade-left">
                <h1>عقارك في دبي</h1>
                <h2>زيست العقارية | عزيزي للتطوير العقاري</h2>
                <h3>فندق دیڤان ٢٠٢٣-٧-٢٠</h3>
                <div className='btneventhero' onClick={() => window.location.replace("#login")}>أحجز مكانك الآن</div>
            </div>
        </div>

        <section>
          <div className='containerone'>
            <div className='containerleft' data-aos="fade-right">
                <h2>فرص استثمارية جديدة</h2>
                <p>ندعوكم لحضور ايفنت خاص لزيست العقارية وعزيزي للتطوير
                    العقاري للحديث عن اخر المشاريع السكنية والاستثمارية في
                    دبي وطرق الدفع والاستثمار الآمن</p>
                <div className='btneventfirst'>تفاصيل اكثر</div>
            </div>
            <div className='containerright' data-aos="fade-left">
              <img className='firtimgevent' src={onecontainer} alt="" />
            </div>
            </div>
        </section>
        <section >
          <div className='containerone reverse'>
            <div className='containerleft' data-aos="fade-right">
                <h2>لماذا الاستثمار في دبي</h2>
                <p>ندعوكم لحضور ايفنت خاص لزيست العقارية وعزيزي ندعوكم لحضور ايفنت خاص لزيست العقارية وعزيزي للتطوير العقاري للحديث عن اخر المشاريع السكنية والاستثمارية في دبي وطرق الدفع والاستثمار الآمن</p>
                <div className='btneventfirst'>تعرف على المزيد</div>
            </div>
            <div className='containerright' data-aos="fade-left">
              <img className='firtimgevent' src={secondcontainer} alt="" />
            </div>
            </div>
        </section>



        <div className='formcontainer' id='login' data-aos="slide-up" style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' , flexDirection: 'column' }}>
                        <h3>املأ النموذج وسنتصل بك في غضون 10 دقائق</h3>
                    <form onSubmit={handleSubmit} className='from' style={{maxWidth: 450, direction: 'rtl' , backgroundColor: 'white',borderRadius: 30, height: 450 , display: 'flex', flexDirection: 'column' , padding: 40, alignContent: 'space-around', justifyContent: 'space-between' }}>
                        <div>
                            <input value={name} onChange={ (e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='اسمك...' required  style={{padding: 15 , marginTop: 5, height: 40 , marginBottom: 20 }}/>
                            <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='بريدك الالكتروني...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }}/>
                            <input value={phone} onChange={ (e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder='هاتفك...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 10, marginBottom: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                <h5>للاتصال بخدمتنا الرجاء النقر فوق هذا الرمز </h5>
                                <a target='_blank' href={"//api.whatsapp.com/send?phone=9647502552006&text=مرحبا انا مهتم بمشاريع أزیزي "}>
                                    <img className='whatsapp' src={whatsapp} />
                                </a>
                            </div>
                        <button  type="submit">أرسل</button>
                    </form> 
                </div>

    </div>
  )
}

export default Eventar