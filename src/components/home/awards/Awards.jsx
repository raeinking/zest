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
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />
          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      :
      <section className='awards padding'>
        <div className='container'>
          <Heading title='أكثر من 1،24،000+ مستخدم سعيد كون معنا ما زالوا يحبون خدماتنا' subtitle='جوائزنا' />
          <div className='content grid4 mtop'>
            {arawards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
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
