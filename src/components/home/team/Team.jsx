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
      <section data-aos='zoom-in-up' data-aos-duration='2000' className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='' />
          <div className='gridbox'>
            {team.map((val, index) => (
                <div className='box zoom' key={index}>
                  <div className='details'>
                    <div className='img'>
                      <img className="calls" src={val.cover} alt={val.name} />
                    </div>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                    <div className='button flex ddd'>
                      <a href={val.email}>
                        <button className="btn4">
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
        <a href="agents">
            <button>See More Agents</button>
          </a>
        </div>
      </section>
      : 
      <section data-aos='zoom-in-up' data-aos-duration='2000' className='team background'>
        <div className='container'>
          <Heading title='افضل الوكلاء' subtitle='' />
          <div className='gridbox'>
            {arteam.map((val, index) => (
                <div className='box zoom' key={index}>
                  {/* <button className='btn3'>{val.list} Kirkuk</button> */}
                  <div className='details'>
                    <div className='img'>
                      <img src={val.cover} alt={val.name} />
                      {/* <i className='fa-solid fa-circle-check'></i> */}
                    </div>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                    {/* <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul> */}
                    <div className='button flex'>
                      <a href={val.email}>
                        <button className="btn4">
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
