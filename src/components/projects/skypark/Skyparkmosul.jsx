import React, { useEffect, useRef } from 'react'
import './skypark.css'
import backgroundImage from './asdgasd.png'
import logoImage from './skyparklogo.png'
import logofooter from './zestlogo.png'
import boxImage1 from './1i.png'
import boxImage2 from './2i.png'
import boxImage3 from './3i.png'
import boxImage6 from './4i.png'
import boxImage5 from './5i.png'
import boxImage4 from './6i.png'

function Skyparkmosul() {
 const image = 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
   const boxes = [
    { id: 1, title: 'Adventure Zone', subtitle: 'Explore our trails', image: boxImage1 },
    { id: 2, title: 'Sky Lounge', subtitle: 'Relax & unwind', image: boxImage2 },
    { id: 3, title: 'Nature Walks', subtitle: 'Discover wildlife', image: boxImage3 },
    { id: 4, title: 'Events', subtitle: 'Join our activities', image: boxImage4 },
    { id: 5, title: 'Dining', subtitle: 'Taste our cuisine', image: boxImage5 },
    { id: 6, title: 'Gallery', subtitle: 'See our moments', image: boxImage6 },
  ];

  return (
    <div className='sky-park-container' style={{position: 'absolute', top: 0, left: 0  , right:0, bottom: 0 , zIndex: 10000000 ,  overflow:'scroll'}}>
      {/* Background Image */}
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${backgroundImage})`}}
      ></div>
      
      {/* <header className="header"> */}
        <div className="logo-container">
          <img src={logoImage} alt="ZEST Logo" className="logo" />
        </div>
      
      <div className="box-grid">
        {boxes.map((box) => (
          <div key={box.id} className="box">
            <div className="box-image-container">
              <img 
                src={box.image} 
                alt={box.title} 
                className="box-image"
              />
              <div className="box-image-overlay"></div>
            </div>
            {/* <div className="box-overlay">
              <h3>{box.title}</h3>
              <p>{box.subtitle}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="footers">
        <img src={logofooter} alt="ZEST Logo" className="bottom-logos" />
      </div>

    </div>
  );
};
export default Skyparkmosul
;