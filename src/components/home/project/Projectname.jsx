import React from 'react'
import { projects } from '../../data/Data'
    
function Projectname() {
  return (
    <div className='grid'>
        <div className='gridbox'>
            {projects.map((items, index) => (
            <div onClick={event =>  window.location.href=`${items.urls}`} className='projects' key={index} >
                <img src={items.Imas} alt={items.title} />
                <h3 >{items.title}</h3>
                <p>{items.loc}</p>
            </div>
            ))}
        </div>
  </div>
  )
}

export default Projectname