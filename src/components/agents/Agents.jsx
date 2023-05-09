import React from 'react'
import Back from '../common/Back'
import img from "../images/agent.jpg"
import '../home/team/team.css'
import { allAgents } from '../data/Data'
import { arallAgents } from '../data/Data'
import Heading from '../common/Heading'
import { useLocation } from "react-router-dom";
import call from '../images/call.jpg'
import { Helmet } from "react-helmet"




export default function Agents() {
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
      {fword == 'ar' ?
        <Helmet>
          <title>المستشارون - شركة زيست للعقارات الفاخرة</title>
          <meta name='description' content="افضل المستشارون في العراق سيساعجوم في ايجاد منزل او شقة مثالية للعيش او الإستصمار فيها على مدى طويل" />
        </Helmet>
        :
        <Helmet>
          <title>Agents - Zest Property</title>
          <meta name="description" content="You can find many different types of properties through zest's company and through many different ways of payment like cash and installments " />
        </Helmet>
      }
      {paths == '/agents' ?
        <section>
          <section className='blogs'>
            <Back title='Our Agents - We Will Help you find your home' subtitle='Find new & featured property located in your local city.' cover={img} />
          </section>
          <section className='team background'>
            <div className='container'>
              <Heading title='Our Featured Agents' subtitle='' />
              <div className='gridboxagent'>
                {allAgents.map((val, index) => (
                  <div className='box zoom' key={index}>
                    <div className='details'>
                      <div className='topagent'>
                        <img className='imgagentlist' src={val.cover} alt={val.name} />
                        <h4 className=''>{val.name}</h4>
                      </div>
                      <div className='bottomagent'>
                        <a className='leftagent' href={val.email}>
                          {/* <button className='leftagent'> */}
                          ✉️
                          {/* </button> */}
                        </a>
                        <a className='rightagent' href={val.phone}>
                          {/* <button className='rightagent'> */}
                          <img className="call" src={call} alt='call'></img>
                          {/* </button> */}
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
              <div className='gridboxagent'>
                {arallAgents.map((val, index) => (
                  <div className='box zoom' key={index}>
                    <div className='details'>
                      <div className='topagent'>
                        <img className='imgagentlist' src={val.cover} alt={val.name} />
                        <h4 className=''>{val.name}</h4>
                      </div>
                      <div className='bottomagent'>
                        <a className='leftagent' href={val.email}>
                          {/* <button className='leftagent'> */}
                          ✉️
                          {/* </button> */}
                        </a>
                        <a className='rightagent' href={val.phone}>
                          {/* <button className='rightagent'> */}
                          <img className="call" src={call} alt='call'></img>
                          {/* </button> */}
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
