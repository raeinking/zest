import React, { useState } from 'react';
import './discription.css'
import { useLocation } from "react-router-dom";


// import houseData
import { arhousesData } from '../data/Data';
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
    return house.id == id
  });
  const arproperty = arhousesData.find((house) => {
     return house.id == id
  });
  console.log(arhousesData.find((d) => d))
  const [nname , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [body , setBody] = useState('مرحبا، أنا مهتم ب ' + "[ " + id + " ]")
  
  const noRefresh = function(e) {
    e.preventDefault()
  } 
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  return (
    <>
      {fword == 'ar'?
    <div className='con'>
      <div className='lineupss'>
        <div>
          <h1 className=''>{arproperty.name}</h1>
          <h3 className=''>{arproperty.address}</h3>
        </div>
        <div className='btns'>
          <div className='btn'>
            {arproperty.type}
          </div>
          <div className='btn'>
            {arproperty.country}
          </div>
        </div>
        <div className=''>
          $ {arproperty.price}
        </div>
      </div>
      <div className='linedownss'>
        <div className='max-w-[768px]'>
          <div className=''>
            <img src={arproperty.imageLg} alt={arhousesData.name} />
          </div>
          <div className='iconcom'>
            <div className='icons'>
              <BiBed className='' />
              <div className=''>{arproperty.bedrooms}</div>
            </div>
            <div className='icons'>
              <BiBath className='' />
              <div className=''>{arproperty.bathrooms}</div>
            </div>
            <div className='icons'>
              <BiArea className='' />
              <div className=''>{arproperty.area}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='formagent'>
          <div className='detailsss'>
            <div className='imgss'>
              <img className='mainimage' src={arproperty.agent.image} alt={arproperty.agent.name}></img>
            </div>
            <div>
              <div>{arproperty.agent.name}</div>
            </div>
          </div>
          <form>
            <input
              type='text'
              placeholder='اسم*'
              onChange={e => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='البريد الإلكتروني*'
            />
            <input
              type='text'
              placeholder='الهاتف*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='رسالة*'
              defaultValue= { 'مرحبا، أنا مهتم ب ' + "[ " + id + " ]"}
              onChange={e => setBody(e.target.value)}
            />
            <div className='flex gap-x-2'>
              <a href={`mailto:${arproperty.agent.email}?subject=${nname + ': ' + phone}&body=${body}`}>
                <p
                  className='buttonss'
                  type='submit'
                >
                  أرسل رسالة
                </p>
            </a>
              <a href={arproperty.agent.phone}>
                <p  className='buttonss'>
                  اتصال
                </p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    :
    <div className='con'>
      <div className='lineupss'>
        <div>
          <h1 >{property.name}</h1>
          <h3 >{property.address}</h3>
        </div>
        <div className='btns'>
          <div className='btn'>
            {property.type}
          </div>
          <div className='btn'>
            {property.country}
          </div>
        </div>
        <div >
          $ {property.price}
        </div>
      </div>
      <div className='linedownss'>
        <div className='max-w-[768px]'>
          <div className=''>
            <img src={property.imageLg} alt={property.name} />
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
              <img className='mainimage' src={property.agent.image} alt={property.agent.name}></img>
            </div>
            <div>
              <div>{property.agent.name}</div>
            </div>
          </div>
          <form>
            <input
              type='text'
              placeholder='Name*'
              onChange={e => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email*'
            />
            <input
              type='text'
              placeholder='Phone*'
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='Message*'
              defaultValue={"Hello, I am interested in"  + "[ " + id + " ]"}
              onChange={e => setBody(e.target.value)}
            />
            <div className='flex gap-x-2'>
              <a href={`mailto:${arproperty.agent.email}?subject=${nname + ': ' + phone}&body=${body}`}>
                <p
                  className='buttonss'
                  type='submit'
                >
                  Send message
                </p>
            </a>
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
    }
    </>
  );
};

export default PropertyDetails;
