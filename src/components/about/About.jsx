import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/immio.jpg"
import msg from "../images/msg.jpg"
import vision from "../images/vision.jpg"
import "./about.css"
import { useLocation } from "react-router-dom";


const About = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/about' ? 
      <section className='about'>
        <Back name='About Us' title='Who are we - who are we?' cover={img} />
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <Heading title='About Our Agency Story' subtitle='Check out our company story and business process' />
            <p>.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='aboutimg'>
            <img src={img} alt='About Us' />
          </div>
        </div>
      </section>
      : 
      <>
        <section className='about'>
          <Back name='عنا' title='من نحن؟' cover={img} />
          <div className='aboutmain'>
            <div className='aboutcontent'>
              <h2 title='' subtitle='' >شركة زيست للعقارات الفاخرة مفهوم جديد في عالم الاستثمار</h2>
              <p>احدى شركات  كروب وهي شركة رائدة في مجال العقارات والاستثمارات وإدارة المشاريع والهندسة منذ عام</p>
              <p>لدينا مجموعة من الخبرات والعقول وبرامج العمل في المشاريع التي عملنا عليها لأكثر من خمسة عشر سنة متواصلة من العمل بين دبي ومحافظات العراق.</p>
              <p>ولأننا نسعى للوصول إلى آفاق جديدة لخدمة المجتمع فقد قمنا بافتتاح سلسلة من الفروع في عدة محافظات منها أربيل وكركوك وبغداد لإدارة الوساطة العقارية.</p>
            </div>
            <div className='aboutimg'>
              <img src={img} alt='من نحن؟' />
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='aboutmain'>
            <div className='aboutcontent'>
              <h2>الرؤية</h2>
              <p>العقارات هي روح الاقتصاد في العالم ولنجاح اي عملية عقارية تحتاج لإتخاذ قرار صحيح والى مزيج من الخبرات في مجال الهندسة والاقتصاد والإدارة ثم التسويق الصحيح</p>
            </div>
            <div className='aboutimg'>
              <img src={vision} alt='من نحن؟' />
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='aboutmain'>
            <div className='aboutcontent'>
              <h2>الرسالة</h2>
              <p>السير لحياة افضل ووضع جميع خبراتنا في مجال العقارات والاستثمارات لخدمة العملاء</p>
            </div>
            <div className='aboutimg'>
              <img src={msg} alt='من نحن؟' />
            </div>
          </div>
        </section>
      </>
      }
    </>
  )
}

export default About
