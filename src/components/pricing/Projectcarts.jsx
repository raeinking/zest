import React from 'react'
import { allprojects } from '../data/Data'

export default function Projectcarts() {
  return (
    <>
   <div className='grid'>
        <div className='gridbox'>
            {allprojects.map((items, index) => (
            <div className='projects' key={index} >
                <img src={items.Imas} alt={items.title} />
                <h3 >{items.title}</h3>
                <p>{items.loc}</p>
            </div>
            ))}
        </div>
  </div>
  </>  )
}
