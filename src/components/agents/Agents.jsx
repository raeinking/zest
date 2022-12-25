import React from 'react'
import Back from '../common/Back'
import img from "../images/agent.jpg"
import '../home/team/team.css'
import { allAgents } from '../data/Data'
import { arallAgents } from '../data/Data'
import Heading from '../common/Heading'
import { useLocation } from "react-router-dom";
import call from '../images/call.jpg'


 
export default function Agents() {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
    {paths == '/agents' ? 
    <section>
      <section className='blogs'>
          <Back title='Our Agents - We Will Help you find your home' subtitle='Find new & featured property located in your local city.' cover={img} />
      </section>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='' />
          <div className='gridbox'>
            {allAgents.map((val, index) => (
                <div className='box' key={index}>
                  {/* <button className='btn3'>{val.list} Listings</button> */}
                  <div className='details'>
                    <div className='img'>
                      <img src={val.cover} alt={val.name}/>
                      {/* <i className='fa-solid fa-circle-check'></i> */}
                    </div>
                    <label>{val.address}</label>
                    <h4 className='ar'>{val.name}</h4>
                    <div className='button flex'>
                    <a href={val.email}>
                      <button className='btn4'>
                        ✉️
                      </button>
                    </a>
                      <a href={val.phone}>
                        <button className='btnmsg'>
                          <img className="call" src={call} alt='call'></img>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </section>
    : 
    <section>
      <section className='blogs'>
          <Back title='مستعدون لكي نساعدك في خطوات الحصول على عقارك المميز' subtitle='ابحث عن عقار جديد ومميز يقع في مدينتك المحلية' cover={img} />
      </section>
      <section className='team background'>
        <div className='container'>
          <Heading title='افضل الوكلاء' subtitle='' />
          <div className='gridbox'>
            {arallAgents.map((val, index) => (
                <div className='box' key={index}>
                  <div className='details'>
                    <div className='img'>
                      <img src={val.cover} alt={val.name} />
                    </div>
                    <label className='ar'>{val.address}</label>
                    <h4 className='ar'>{val.name}</h4>
                    <div className='button flex'>
                    <a href={val.email}>
                      <button className='btn4'>
                        ✉️
                      </button>
                    </a>
                      <a href={val.phone}>
                        <button className='btnmsg'>
                          <img className="call" src={call} alt='call'></img>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </section>
    }
    </>
  )
}
