import React from 'react'
// import { projects } from '../../data/Data'
import image from '../../images/Biancaicon.jpg'
import image1 from '../../images/majidi1.jpg'
import image2 from '../../images/alweddiacon.jpg'
import image3 from '../../images/klood1.jpg'

    
function Projectname() {
  return (
    <div className='grid'>
        <div className='gridboxs'>
            <div className='div1'>
                <img src={image} />
                <div className='overlay'>
                  <h3>Bianca</h3>
                  <p>UAE Dubai</p>
                </div>
            </div>
            <div className='div2'>
                <img src={image1} />
                <div className='overlay1'>
                  <h3>Majidi</h3>
                  <p>Iraq Erbil</p>
                </div>
            </div>
            <div className='div3'>
                <img src={image2} />
                <div className='overlay2'>
                  <h3>Al Wed</h3>
                  <p>Iraq Mosul</p>
                </div>
            </div>
            <div className='div4'>
                <img src={image3} />
                <div className='overlay3'>
                  <h3>AL Klood</h3>
                  <p>Iraq Mosul</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Projectname