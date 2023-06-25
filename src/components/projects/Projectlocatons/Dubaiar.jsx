import React, {useState} from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'


import Lists from '../../thinkgsthatnotchanged/Lists'


function Dubaiar() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')      


    const handleSubmit = async (e) => {
          e.preventDefault()
          
        fetch('https://node-email-sendersss.glitch.me/dubai', {
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
    return (
        <div>
            <Helmet>
                <title>استكشف أفضل المشاريع في دبي - عقارات زێست </title>
                <meta name="description" content="استكشف محفظتنا من المشاريع الاستثنائية في دبي، بما في ذلك مشاريع تجارية وسكنية والبنية التحتية والأعمال العامة. فريقنا مخصص لرفع مستوى أفق المدينة ووضع معايير جديدة للابتكار والتصميم. من النقاط البارزة على المستوى العالمي إلى المشاريع المتطورة، نحن في مقدمة تشكيل مستقبل دبي. استعرض محفظتنا واتصل بنا اليوم للمزيد من المعلومات." />
            </Helmet>
            <section>
                <div className='imageofheaderdubai'><h1>مشاريع دبي</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        <div class="parentserbil">
                            <a href='/ar/damac-bay2' class="div1P">
                                <div className='projectdamac2'></div>
                                <div className='overlays'>
                                    <p>داماك باي 2</p>
                                </div>
                            </a>
                            <a href='/ar/damac-lagoons' class="div2P">
                                <div className='projectdamac'></div>
                                <div className='overlays'>
                                    <p>داماك لاجونز</p>
                                </div>
                            </a>
                            <a href='/ar/azizi-riviera' class="div3P">
                                <div className='projectazizi'></div>
                                <div className='overlays'>
                                    <p>عزيزي ريفيرا</p>
                                </div>
                            </a>
                            <a href='/ar/bianca' class="div4P">
                                <div className='imagebianca'></div>
                                <div className='overlays'>
                                    <p>بیانکا</p>
                                </div>
                            </a>
                        </div>
                      <div className='formcontainer' style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' , flexDirection: 'column' }}>
                        <h3>املأ النموذج وسنتصل بك في غضون 10 دقائق</h3>
                    <form onSubmit={handleSubmit} className='from' style={{maxWidth: 450, direction: 'rtl' , backgroundColor: 'white',borderRadius: 30, height: 450 , display: 'flex', flexDirection: 'column' , padding: 40, alignContent: 'space-around', justifyContent: 'space-between' }}>
                        <div>
                            <input value={name} onChange={ (e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='اسمك...' required  style={{padding: 15 , marginTop: 5, height: 40 , marginBottom: 20 }}/>
                            <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='بريدك الالكتروني...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }}/>
                            <input value={phone} onChange={ (e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder='هاتفك...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 10, marginBottom: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                <h5>للاتصال بخدمتنا الرجاء النقر فوق هذا الرمز </h5>
                                <a target='_blank' href={"//api.whatsapp.com/send?phone=9647502552006&text=مرحبا انا مهتم بمشاريع دبي "}>
                                    <img className='whatsapp' src={whatsapp} />
                                </a>
                            </div>
                        <button  type="submit">أرسل</button>
                    </form> 
                </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Dubaiar