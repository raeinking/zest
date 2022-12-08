import React from 'react'
import Back from '../common/Back'
import img from "../images/about.jpg"
import '../home/team/team.css'
import { allAgents } from '../data/Data'
import Heading from '../common/Heading'

 
export default function Agents() {
  return (
    <>

      <section className='blogs'>
          <Back title='Our Agents - We Will Help you fing your home' subtitle='Find new & featured property located in your local city.' cover={img} />
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
                      <img src={val.cover} alt='' />
                      {/* <i className='fa-solid fa-circle-check'></i> */}
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                    <div className='button flex'>
                    <a href={val.email}>
                      <button className='btnmsg'>
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
        </div>
      </section>
    </>
  )
}
