import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import { arteam } from "../../data/Data"
import "./team.css"

import { useLocation } from "react-router-dom";
import call from '../../images/call.jpg'


const Team = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/' ?
        <section className='team background'>
          <div className='container'>
            <Heading title='Our Featured Agents' subtitle='' />
            <div className='gridboxagent'>
              {team.map((val, index) => (
                <div className='box zoom' key={index}>
                  <div className='details'>
                    <div className='topagent'>
                      <img className='imgagentlist' src={val.cover} alt={val.name} />
                      <h4 className=''>{val.name}</h4>
                    </div>
                    <div className='bottomagent'>
                      <a className='leftagent' href={val.email}>
                        ✉️
                      </a>
                      <a className='rightagent' href={val.phone}>
                        <img className="call" src={call} alt='call'></img>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="agents">
              <button>See More Agents</button>
            </a>
          </div>
        </section>
        :
        <section data-aos='zoom-in-up' data-aos-duration='2000' className='team background'>
          <div className='container'>
            <Heading title='افضل الوكلاء' subtitle='' />
            <div className='gridboxagent'>
              {arteam.map((val, index) => (
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
            <a href="/ar/agents">
              <button className="ar">مشاهدة المزيد</button>
            </a>
          </div>
        </section>
      }
    </>
  )
}

export default Team
