import React, { useEffect, useState    } from 'react'
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

import type1 from './1t.png'
import type2 from './2t.png'
import type3 from './3t.png'
import type4 from './4t.png'

function Skyparkmosul() {
    const [currentPage, setCurrentPage] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);

 const image = 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  const boxes = [
    { id: 1, title: 'Adventure Zone', subtitle: 'Explore our trails', image: boxImage1, type: 'pdf', link: 'https://zest-property.com/sky-park-mosul.pdf' },
    { id: 2, title: 'Sky Lounge', subtitle: 'Relax & unwind', image: boxImage2, type: 'category', category: 'lounge' },
    { id: 3, title: 'Nature Walks', subtitle: 'Discover wildlife', image: boxImage3, type: 'link', link: 'https://maps.app.goo.gl/vStATYaMkDxuHZnr9' },
    { id: 4, title: 'Events', subtitle: 'Join our activities', image: boxImage4, type: 'link', link: 'https://zest-property.com/sky-park-services.pdf' },
    { id: 5, title: 'Dining', subtitle: 'Taste our cuisine', image: boxImage5, type: 'link', link: 'https://www.instagram.com/sky_park_mosul/' },
    { id: 6, title: 'Gallery', subtitle: 'See our moments', image: boxImage6, type: 'link' , link: 'https://www.facebook.com/sky.park.mosul.by.zest' },
  ];

    const categoryBoxes = {
    lounge: [
      { id: 3, title: 'VIP Section', image: type2 ,},
      { id: 1, title: 'Lounge Area 1', image: type1,type: 'pdf',link: 'https://zest-property.com/Sky-park-type1.pdf'  },
      { id: 4, title: 'Bar', image: type4, },
      { id: 2, title: 'Lounge Area 2', image: type3 },
    ],
    nature: [
      { id: 1, title: 'Forest Trail', image: boxImage5 },
      { id: 2, title: 'River Walk', image: boxImage5 },
      { id: 3, title: 'Wildlife Spotting', image: boxImage5 },
      { id: 4, title: 'Botanical Garden', image: boxImage5 },
      { id: 5, title: 'Photo Points', image: boxImage5 },
      { id: 6, title: 'Guided Tours', image: boxImage5 },
    ]
  };

    const handleBoxClick = (box) => {
    switch (box.type) {
      case 'pdf':
        window.open(box.link, '_blank');
        break;
      case 'category':
        setSelectedCategory(box.category);
        setCurrentPage('category');
        break;
      case 'link':
        window.location.href = box.link;
        break;
      default:
        break;
    }
  };


    const handleBackClick = () => {
    setCurrentPage('main');
    setSelectedCategory(null);
  };




  return (
    <div className='sky-park-container' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000000, overflow: 'scroll' }}>
      {/* Background Image */}
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="logo-container">
        <img src={logoImage} alt="ZEST logod" className="logod" />
      </div>

      <div className="boxx-grid">
        {currentPage === 'main' && boxes.map((box) => (
          <div key={box.id} className="boxx" onClick={() => handleBoxClick(box)}>
            <div className="boxx-image-container">
              <img src={box.image} alt={box.title} className="boxx-image" />
              <div className="boxx-image-overlay"></div>
            </div>
            {/* <div className="box-overlay">
              <h3>{box.title}</h3>
              <p>{box.subtitle}</p>
            </div> */}
          </div>
        ))}

{currentPage === 'category' && categoryBoxes[selectedCategory]?.map((box, index) => (
  <div
    key={box.id}
    className={`boxx ${selectedCategory === 'lounge' && index === 0 ? 'green-background' : ''}`}
    onClick={() => handleBoxClick(box)}
  >
    <div className="boxx-image-container">
      <img src={box.image} alt={box.title} className="boxx-image" />
      <div className="boxx-image-overlay"></div>
    </div>
  </div>
))}
      </div>
      
            {currentPage === 'category' && (
              <div className="category-header">
                <div className="back-button" onClick={handleBackClick}>
                  &larr; Back
                </div>
                {/* <h2>{selectedCategory === 'lounge' ? 'Sky Lounge' : 'Nature Walks'}</h2> */}
              </div>
            )}

      <div className="footers">
        <img src={logofooter} alt="ZEST logod" className="bottom-logos" />
      </div>
    </div>
  );
};

export default Skyparkmosul
;