import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img1 from "../images/rastymahmood.jpg"
import img from "../images/zest.jpg"
import img2 from "../images/rsala.jpg"
import "./about.css"
import { useLocation } from "react-router-dom";


const About = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/about' ? 
      <>
      <section className='about'>
        <Back name='About Us' title='who are we?' cover={img} />
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <h2>Zest Property Story</h2>
            <p>Zest belongs to IZ-GROUP, IZ-GROUP is also the leading company when it comes to real estate, properties. investments, and project engineering and project management since 2006.</p>
            <p>We offer a wide knowledge of skills and experiences, with clever minds that invested 15 years of experience in business between Dubai, Baghdad, Erbil, And different Iraqi provinces.</p>
            <p>So as we seek a bright future to service our people, and society.. we have opened a series of branches in several governorates, including Erbil, Kirkuk and Baghdad, to manage real estate brokerage.</p>
          </div>
          <div className='aboutimg'>
            <img className="imageabout" src={img} alt='About Us' />
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <h2>Our vision</h2>
            <p>Real estates are the soul industry behind economy in the world. So for any operation to success in this field, we have to operate correct decisions. and mix all of our skills in engineering, economy, business management, and marketing towards a passionate direction.</p>
          </div>
          <div className='aboutimg'>
            <img className="imageabout" src={img1} alt='About Us' />
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='aboutmain'>
          <div className='aboutcontent'>
            <h2>Our Message</h2>
            <p>In order to achieve a better life style, we had to put our lives and experiences in Zest. And invest wisely to ensure the future of our clients.</p>
          </div>
          <div className='aboutimg'>
            <img className="imageabout" src={img2} alt='About Us' />
          </div>
        </div>
      </section>

      </>
      : 
      <>
        <section className='about'>
          <Back name='عنا' title='من نحن؟' cover={img} />
          <div className='aboutmain'>
            <div className='aboutcontent ar'>
              <h2 title='' subtitle='' >شركة زيست للعقارات الفاخرة مفهوم جديد في عالم الاستثمار</h2>
              <p>احدى شركات أ-ز كروب وهي شركة رائدة في مجال العقارات والاستثمارات وإدارة المشاريع والهندسة منذ عام ٢٠٠٦</p>
              <p>لدينا مجموعة من الخبرات والعقول وبرامج العمل في المشاريع التي عملنا عليها لأكثر من خمسة عشر سنة متواصلة من العمل بين دبي ومحافظات العراق.</p>
              <p>ولأننا نسعى للوصول إلى آفاق جديدة لخدمة المجتمع فقد قمنا بافتتاح سلسلة من الفروع في عدة محافظات منها أربيل وكركوك وبغداد لإدارة الوساطة العقارية.</p>
            </div>
            <div className='aboutimg'>
              <img className="imageabout" src={img} alt='من نحن؟' />
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='aboutmain'>
            <div className='aboutcontent'>
              <h2 className="ar">الرؤية</h2>
              <p className="ar">العقارات هي روح الاقتصاد في العالم ولنجاح اي عملية عقارية تحتاج لإتخاذ قرار صحيح والى مزيج من الخبرات في مجال الهندسة والاقتصاد والإدارة ثم التسويق الصحيح</p>
            </div>
            <div className='aboutimg'>
              <img className="imageabout" src={img1} alt='من نحن؟' />
            </div>
          </div>
        </section>
        <section className='about'>
          <div className='aboutmain'>
            <div className='aboutcontent'>
              <h2 className="ar">رسالتنا</h2>
              <p className="ar">السير لحياة افضل ووضع جميع خبراتنا في مجال العقارات والاستثمارات لخدمة العملاء</p>
            </div>
            <div className='aboutimg'>
              <img className="imageabout" src={img2} alt='من نحن؟' />
            </div>
          </div>
        </section>
      </>
      }
    </>
  )
}

export default About
