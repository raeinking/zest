import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='' />
          <div className='gridbox'>
            {team.map((val, index) => (
                <div className='box' key={index}>
                  {/* <button className='btn3'>{val.list} Kirkuk</button> */}
                  <div className='details'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      {/* <i className='fa-solid fa-circle-check'></i> */}
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                    {/* <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul> */}
                    <div className='button flex'>
                      <a href={val.email}>
                        <button className="btnmsg">
                          <i className='fa fa-envelope'></i>
                        </button>
                      </a>
                      <a href={val.phone}>
                        <button className='btn4'>
                          <i className='fa fa-phone-alt'></i>
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
    </>
  )
}

export default Team
