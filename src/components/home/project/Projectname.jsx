import React from 'react'
// import { projects } from '../../data/Data'
import image from '../../images/Biancaicon.jpg'
import image1 from '../../images/majidi1.jpg'
import image2 from '../../images/alweddiacon.jpg'
import image3 from '../../images/klood1.jpg'
import { useLocation } from 'react-router-dom'

    
function Projectname() {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/' ? 
      <div className='grid'>
        <div data-aos='zoom-in-up' data-aos-duration='1000' className='gridboxs'>
            <a href='/Bianca' className='home1'>
                <img src={image} />
                <div className='overlay'>
                  <h3>Bianca</h3>
                  <p>UAE Dubai</p>
                </div>
            </a>
            <a href='/Majidi-view' data-aos='zoom-in-up' data-aos-duration='1500' className='home2'>
                <img src={image1} />
                <div className='overlay1'>
                  <h3>Majidi View</h3>
                  <p>Iraq Erbil</p>
                </div>
            </a>
            <a href='/alwedd' data-aos='zoom-in-up' data-aos-duration='1500' className='home3'>
                <img src={image2} />
                <div className='overlay2'>
                  <h3>Al Wed</h3>
                  <p>Baghdad</p>
                </div>
            </a>
            <a href='/khlood' data-aos='zoom-in-up' data-aos-duration='2000' className='home4'>
                <img src={image3} />
                <div className='overlay3'>
                  <h3>AL Khlood</h3>
                  <p>Baghdad</p>
                </div>
            </a>
        </div>
      </div>
      :
      <div className='grid'>
        <div data-aos='zoom-in-up' data-aos-duration='1000' className='gridboxs'>
            <a href='/Bianca' className='home1'>
                <img src={image} />
                <div className='overlay'>
                  <h3>بيانكا</h3>
                  <p>الإمارات دبي</p>
                </div>
            </a>
            <a href='/Majidi-view' data-aos='zoom-in-up' data-aos-duration='1500' className='home2'>
                <img src={image1} />
                <div className='overlay1'>
                  <h3>ماجدي</h3>
                  <p>اربيل</p>
                </div>
            </a>
            <a href='/alwedd' data-aos='zoom-in-up' data-aos-duration='1500' className='home3'>
                <img src={image2} />
                <div className='overlay2'>
                  <h3>الوید</h3>
                  <p>بغداد</p>
                </div>
            </a>
            <a href='/khlood' data-aos='zoom-in-up' data-aos-duration='2000' className='home4'>
                <img src={image3} />
                <div className='overlay3'>
                  <h3>الخلود</h3>
                  <p>بغداد</p>
                </div>
            </a>
        </div>
      </div>
      }
    </>
  )
}

export default Projectname