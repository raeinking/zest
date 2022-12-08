import React from "react"
import { projects } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
   <div className='grid'>
        <div className='gridbox'>
            {projects.map((items, index) => (
            <div className='projects' key={index} >
                <img src={items.Imas} alt={items.title} />
                <h3 >{items.title}</h3>
                <p>{items.loc}</p>
            </div>
            ))}
        </div>
  </div>
  </>
  )
}

export default PriceCard
