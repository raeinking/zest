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
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'
import axios from 'axios'



import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import {BsFillLightningFill} from 'react-icons/bs'
import {BsBuildingGear} from 'react-icons/bs'
import {BiCctv} from 'react-icons/bi'
import {TbAirConditioning} from 'react-icons/tb'
import {FaChild ,FaConciergeBell,FaParking} from 'react-icons/fa'
import {MdSettingsBackupRestore ,MdOutlineElevator} from 'react-icons/md'
import {RiAlarmWarningFill} from 'react-icons/ri'
import {GiRingingAlarm , GiKidSlide } from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {IoChatbubblesOutline,IoRestaurantSharp} from 'react-icons/io5'
import {AiTwotoneShop} from 'react-icons/ai'
import {GiParkBench} from 'react-icons/gi'


const divStyle = {
    width: '100%',
    height: '400px',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    margin: '30px 0 60px 0'
}
const slideImages = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
  {
    url: image5,
  },
];
const buttonStyle = {
    width: "30px",
    hight: "30px",
    border: '0px',
    backgroundColor: 'rgba(42, 42, 42, 0.41)',
    borderRadius: '4px',
    padding:'10px'


    // zIndex:200
};

const properties = {
  prevArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg>,
  nextArrow: <svg style={buttonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg>
}





const Alwedd = () => {
  
  const [brochureDownload , setBrochureDownload ] = useState(false)
  const [name , setName ] = useState('')
  const [phone , setPhone ] = useState('')
  const [email , setEmail ] = useState('')







const config = {
  headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  },
};




let handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post("https://node-email-sendersss.glitch.me/majidi", {email, name, phone} ,config).then(window.open('bianca.pdf'))
  };




  const containerStyle = {
  width: '100%',
  height: '250px'
};

  return (
    <>
      <Helmet>
        <title>مشروع بيانكا - عقارات زيست </title>
        <meta name="description" content="هل تبحث عن فيلا فاخرة في دبي بيانكا؟ تتميز مجموعتنا من الفلل الرائعة بالمساحات الواسعة والتصاميم الداخلية الفاخرة، بالإضافة إلى وسائل الراحة في الهواء الطلق مثل حمامات السباحة الخاصة والحدائق المزينة. تحتوي فللنا على كل ما تحتاجه لقضاء إقامة لا تُنسى في هذه المدينة الفاخرة. تصفح مجموعتنا الآن واعثر على فيلا الأحلام الخاصة بك في دبي، بيانكا." />
      </Helmet>
      <section>
      

      
             {brochureDownload ? <div className='absoluteForm'>
          <div className='brochurForm'>
            <div className='brochurLeft biancaimage'></div>
            <div className='brochurRight arfrom'>
            <form className='arfrom' style={{width:'100%',maxWidth:'1000px' , maxHeight:'1000px' , display: 'flex' , flexWrap: 'nowrap'}} onSubmit={handleSubmit}>
              <div className='closeButton' onClick={() => setBrochureDownload(false)}>X</div>

                <h2>تحميل البروشور</h2>
                <p>يرجى ادخال التفاصيل لتحميل البروشور</p>
                <label for='name'>أسم</label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} name='name' placeholder='الإسم' required></input>
                <label for='email' >برید ألکترونی</label>
                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} name='email'  placeholder='البريد الالكتروني' required></input>
                <label for='phone'>رقم الهاتف</label>
                <input value={phone} type='text' onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='رقم الهاتف' required></input>
                <div style={{display:'flex' , marginTop:10, marginBottom:10, alignItems:'center' ,width: '100%', justifyContent: 'space-between'}}>
                  <h5>تواصل معنا مباشرة عبر واتساب </h5>
                  <a href={"//api.whatsapp.com/send?phone=9647502552006&text=مرحباً ، أنا مهتم بإطلالة bianca ، هل يمكنك أن ترسل لي التفاصيل؟"}>
                    <img className='whatsapp' src={whatsapp} />
                  </a>
                </div>
                <input className='btnsubmit' value='تحميل' type='submit'></input>
            </form>
            </div>
          </div>   
        </div>
        :
        ''}
        



        <div className='imageofheaderbianca'><h1>مشروع بيانكا</h1></div>

        <section className='mainmajidi'>
          <div className='navleft'>
            <div>
              <h6>تطوير العقارات</h6>
              <div className='navp'>
                <a href='/ar/Majidi-View'>ماجدي فیو</a>
                <a href='/ar/bianca'>بيانكا</a>
                <a href='/ar/alwedd'>الود </a>
                <a href='/ar/khlood'>الخلود </a>
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='twothink'>
              <h3>بيانكا</h3>
              <a className='BROCHURE' onClick={() => setBrochureDownload(true)}>تحمیل بروشور</a>
            </div>
            <div className="">
              <Slide {...properties} autoplay={true} transitionDuration={500} canSwipe={true} infinite={true} arrows={true} pauseOnHover={true} duration={2000} >
                {/* <div className='slideimage'> */}
                  {slideImages.map((slideImage, index)=> (
                     <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                      </div>
                  ))} 
                {/* </div> */}
                </Slide>
            </div> 
                      {/* <div key={index} className="tset" style={{'backgroundImage': `url(${slideImage.img})`}}></div> */}
            <div className='margin'>
              <h2>ملخص</h2>
              <div className='overview'>
                <div className='borderandmargin'>
                  <h5>موقع</h5>
                  <h5>دبي - طريق الميدان - بالقرب من جسر الميدان</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>نوع المشروع</h5>
                  <h5>فيلا</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>يتوقع الانتهاء</h5>
                  <h5>مارس 2025</h5>
                </div>
              </div>
            </div> 
            <div className='dis'>
              <h3>وصف</h3>
              <p className='pdis'>
                <p>بيانكا هو مجمع فيلات رائع يعيد تعريف الحياة الفاخرة. مع وجود العديد من الفيلات المصممة بشكل جميل ، يوفر هذا التطوير تجربة سكنية لا مثيل لها ستبهرك بالتأكيد.

ادخل إلى عالم بيانكا وستستقبلك الهندسة المعمارية الرائعة والتصميم الحديث الذي سيجعلك مندهشًا. تم تصميم كل فيلا بشكل مثالي وتوفر مساحة معيشة واسعة ومضيئة مثالية للعائلات والمحترفين الشباب أو المتقاعدين.</p>
                  <br />
                  <br />
                <p>يتميز المجمع بمرافق حديثة تلبي كل احتياجاتك. سواء كنت ترغب في الاسترخاء في السبا أو الاستمتاع بسباحة منعشة في المسبح أو القيام بتمارين رياضية في الصالة الرياضية ، فإن بيانكا لديها كل شيء. بفضل نظام الأمن على مدار الساعة ومساحات وفيرة لوقوف السيارات ، يمكنك الاستمتاع بتجربة سكنية آمنة ومريحة.

</p>
                  <br />
                  <br />
                <p>يقع بيانكا في موقع متميز في مدينة دبي ، وهي واحدة من أكثر الوجهات التي يبحث عنها الناس في العالم. تقع الحدائق الخضراء والمتنزهات ومراكز التسوق الفاخرة ومعالم الثقافية في مدينة دبي على بعد دقائق قليلة فقط من بيانكا ، مما يجعلها مكانًا مثاليًا للعيش.

استثمر في بيانكا اليوم واستمتع بأفضل ما في الحياة الفاخرة. لا تفوت هذه الفرصة للعيش في مجمع فيلات جميل سيأسرك. مع مزيجها المثالي من الفخامة والراحة والهدوء ، فإن بيانكا هو المكان المثالي للعيش.



</p>
              </p>
            <div>
              <h3>المرافق والمرافق</h3>
              <div className='iconsss'>
              <div className='icon1'>
                <div>
                  <div className='row'>
                    <div className='iconss'><BsFillLightningFill /></div>
                    <p>أمن على مدار 24 ساعة</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><MdSettingsBackupRestore /></div>
                    <p>نظام الطاقة الاحتياطية</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><BsBuildingGear /></div>
                    <p>نظام إدارة المباني</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><BiCctv /></div>
                    <p>مراقبة الدوائر التلفزيونية المغلقة</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><TbAirConditioning /></div>
                    <p>تكييف الهواء المركزي</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><FaChild /></div>
                    <p>مركز رعاية الأطفال النهاري</p>
                  </div>
                </div>
              </div>
              <div className='icon2'>
                <div>
                  <div className='row'>
                    <div className='iconss'><FaConciergeBell /></div>
                    <p>خدمة الكونسيرج</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><MdOutlineElevator /></div>
                    <p>مصاعد</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><RiAlarmWarningFill /></div>
                    <p>نظام إضاءة الطوارئ</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><GiRingingAlarm /></div>
                    <p>نظام إنذار الحريق ومكافحته</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><CgGym /></div>
                    <p>صالة للألعاب الرياضية</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><GiKidSlide /></div>
                    <p>منطقة لعب الاطفال</p>
                  </div>
                </div>
              </div>
              <div className='icon3'>
                <div>
                  <div className='row'>
                    <div className='iconss'><GiParkBench /></div>
                    <p>منطقة جلوس خارجية</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><FaParking/></div>
                    <p>وقوف السيارات للسكان</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><IoRestaurantSharp/></div>
                    <p>مطاعم ومقاهي</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><AiTwotoneShop/></div>
                    <p>بيع بالتجزئة</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='iconss'><IoChatbubblesOutline /></div>
                    <p>مساحات مجتمعية مظللة</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            <div>
              <h3>موقع</h3>
              <div className='map'>
                <LoadScript googleMapsApiKey="AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{lat: 25.0953761,lng: 55.3531664 , position: {lat: 25.0953761,lng:55.3531664} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 25.0953761,lng: 55.3531664}} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
              <div class="parents">
                <a href='ar/alwedd' class="div4">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                    <h3>الود </h3>
                    <p>بغداد</p>
                  </div>
                </a>
                <a href='ar/majidi-view' class="div5">
                <div className='imagemajidi'></div>
                  <div className='overlays'>
                  <h3>ماجدي فیو</h3>
                  <p>یربیل</p>
                  </div>
                </a>
                <a href='ar/khlood' class="div6">
                  <div className='imageklood'></div>
                  <div className='overlays'>
                  <h3>الخلود </h3>
                  <p>بغداد</p>
                  </div>
                </a>
              </div>
            <div>
              {/* <h3>Construction Updates</h3>
              <div className='imageproperty'>
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
                <img src={image} />
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Alwedd



  

  {/* <section className='herobianca'>
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
  </main> */}