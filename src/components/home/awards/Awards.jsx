import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import { arawards } from "../../data/Data"
import "./awards.css"
import { useLocation } from "react-router-dom";

const Awards = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/' ? 
      <section  className='awards padding'>
        <div className='container'>
          <Heading title='Over +35,000 Happy Users around Iraq thanks to Zest Properties Staff' subtitle='Our achievements' />
          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <img className="flep" src={val.icon} alt='awards'></img>
                </div>
                <h2>{val.num}</h2>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      :
      <section className='awards padding'>
        <div className='container'>
          <p className="ar">جوائزنا</p>
          <h4 className='ar'>اكثر من 35,000+ مستخدم سعيد بخدمتنا</h4>
          <div className='content grid4 mtop'>
            {arawards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <img className="ar" src={val.icon} alt='awards'></img>
                </div>
                <h4 className="ar">{val.num}</h4>
                <p className="ar">{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      }
    </>
  )
}

export default Awards
