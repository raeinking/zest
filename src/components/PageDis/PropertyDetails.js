import React from 'react';
import './discription.css'

// import houseData
import { housesData } from '../data/Data';
import { listAll } from '../data/Data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';

const PropertyDetails = (val) => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  
  const noRefresh = function(e) {
    e.preventDefault()
  } 

  return (
    <div className='con'>
      <div className='lineupss'>
        <div>
          <h1 className=''>{property.name}</h1>
          <h3 className=''>{property.address}</h3>
        </div>
        <div className='btns'>
          <div className='btn'>
            {property.type}
          </div>
          <div className='btn'>
            {property.country}
          </div>
        </div>
        <div className=''>
          $ {property.price}
        </div>
      </div>
      <div className='linedownss'>
        <div className='max-w-[768px]'>
          <div className=''>
            <img src={property.imageLg} alt='' />
          </div>
          <div className='iconcom'>
            <div className='icons'>
              <BiBed className='' />
              <div className=''>{property.bedrooms}</div>
            </div>
            <div className='icons'>
              <BiBath className='' />
              <div className=''>{property.bathrooms}</div>
            </div>
            <div className='icons'>
              <BiArea className='' />
              <div className=''>{property.area}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='formagent'>
          <div className='detailsss'>
            <div className='imgss'>
              <img className='mainimage' src={property.agent.image}></img>
            </div>
            <div>
              <div className=''>{property.agent.name}</div>
            </div>
          </div>
          <form className=''>
            <input
              className=''
              type='text'
              placeholder='Name*'
            />
            <input
              className=''
              type='text'
              placeholder='Email*'
            />
            <input
              className=''
              type='text'
              placeholder='Phone*'
            />
            <textarea
              className=''
              type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            />
            <div className='flex gap-x-2'>
              <p
                className='buttonss'
                type='submit'
              >
                Send message
              </p>
              <a href={property.agent.phone}>
                <p  className='buttonss'>
                  Call
                </p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
