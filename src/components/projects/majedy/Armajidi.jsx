import React, {useState} from 'react'

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'


import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

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
import { Helmet } from 'react-helmet';
import axios from 'axios'
import ArLists from '../../thinkgsthatnotchanged/ArLists';


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


function Armajidi() {

  const [brochureDownload , setBrochureDownload ] = useState(false)
  const [name , setName ] = useState('')
  const [phone , setPhone ] = useState('')
  const [email , setEmail ] = useState('')
  const [projectname, setProjectname] = useState('majidi view ar')








const config = {
  headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  },
};




let handleSubmit = async (e) => {
    e.preventDefault();
  await axios.post("https://node-email-sendersss.glitch.me/majidi", { email, name, phone, projectname }, config).then(alert('سوف نرسل لك'))
  };






      const containerStyle = {
      width: '100%',
      height: '250px'
    };
  return (
        <>
        <Helmet>
       <title>ماجدي فیو - عقارات زيست</title>
        <meta name='description' content="مشروع ماجدي فيو المميز وفي منطقة تجارية يضم على انواع شقق مختلفة ضمن الـ 11 عمارة التي تتكون من 24 طبقة لكل منها.. ومساحات خضراء" />
     </Helmet>
      <section>



             {brochureDownload ? <div className='absoluteForm'>
          <div className='brochurForm'>
            <div className='brochurLeft majdiimage'></div>
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
                  <a href={"//api.whatsapp.com/send?phone=9647502552006&text=مرحباً ، أنا مهتم بإطلالة Majidi ، هل يمكنك أن ترسل لي التفاصيل؟"}>
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
        









        <div className='imageofheader'><h1>ماجدي فیو</h1></div>

        <section className='mainmajidi'>
        <ArLists />


          <div className='content'>

            <div className='twothink'>
              <h3>ماجدي فیو</h3>
              <a className='BROCHURE' onClick={() => setBrochureDownload(true)}>تحميل بروشور</a>
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
                  <h5>یربیل - شارع کویة</h5>
                </div>
                <div className='borderandmargin'>
                  <h5>نوع المشروع</h5>
                  <h5>سكني</h5>
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
                مرحبًا بكم في مجيدي فيو، مجمع سكني فاخر يقع بالقرب من مجيدي مول الشهير، والذي تم بناؤه من قبل شركة هيوا هولدينغ.

صممت مجيدي فيو بنفس مصممي ومطوري مجيدي مول، حيث توفر تجربة سكنية استثنائية تجمع بين الهندسة المعمارية الحديثة والمرافق الفاخرة والراحة الفريدة.


                <br />
                <br />
                <br />
يتألف المشروع من 11 بناية، كل منها يتألف من 25 طابقًا من الشقق الرائعة ذات المناظر الخلابة للمناطق المحيطة. وبفضل مجموعة متنوعة من مخططات الطوابق، يوفر مجيدي فيو شققًا فسيحة وبتصميم أنيق يلبي كل احتياجاتك.

سواء كنت تبحث عن شقة بغرفة نوم واحدة مريحة أو وحدة واسعة بثلاث غرف نوم، ستجد كل ما تحتاجه في مجيدي فيو. وتتميز كل شقة بتجهيزات ومعدات عالية الجودة ولمسات ديكورية أنيقة تجعلها تجربة سكنية فاخرة حقًا.

  <br />
                <br />
                <br />
يوفر مجيدي فيو العديد من وسائل الرفاهية عالمية المستوى، بما في ذلك مركز للياقة البدنية مجهز بالكامل، وحمام سباحة، ومنطقة لعب الأطفال. يمكن للسكان أيضًا الاستمتاع بمجموعة متنوعة من الخيارات التجارية والتناول في مجيدي مول المجاور، مما يجعل من السهل الاستمتاع ببعض العلاجات التجارية أو تناول وجبة سريعة.

بفضل موقعها المتميز وتصميمها الاستثنائي والمرافق عالية الجودة، فإن مجيدي فيو هي المكان المثالي للعيش. لا تفوت الفرصة لامتلا



 </p>
            <div>
              <h3>المرافق والأمن</h3>
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
                    center={{lat: 36.2015944,lng: 44.0911409 , position: {lat: 36.2015944,lng:44.0911409} }}
                    zoom={18}
                  >
                  <MarkerF position={{lat: 36.2015944,lng: 44.0911409}} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>

              <div class="parents">
                <a href='alwedd' class="div4">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                  <h3>الود</h3>
                  <p>بغداد</p>
                  </div>
                </a>
                <a href='khlood' class="div5">
                <div className='imageklood'></div>
                  <div className='overlays'>
                  <h3>الخلود</h3>
                  <p>بغداد</p>
                  </div>
                </a>
                <a href='bianca' class="div6">
                  <div className='imagebianca'></div>
                  <div className='overlays'>
                  <h3>بيانكا</h3>
                  <p>الإمارات دبي</p>
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

export default Armajidi
