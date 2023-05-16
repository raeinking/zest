import React, { useState,useEffect } from 'react';
import './discription.css'
import { useLocation } from "react-router-dom";
import axios from "axios"


// import houseData
import { arhousesData } from '../data/Data';
import { housesData } from '../data/Data';
import { listAll } from '../data/Data';
import { arlistAll } from '../data/Data'
import Locationimg from ".././images/location.jpg";


//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"


const PropertyDetails = (val) => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.url == id
  });
  const arproperty = arhousesData.find((house) => {
     return house.url == id
  });
  const pathname = window.location.pathname;

  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectname, setProjectname] = useState( id )
  const [body, setBody] = useState( id )


  
  const config = {
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
};





  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://node-email-sendersss.glitch.me/majidi", { email, name, phone, projectname }, config).then(alert('Ower Agent Will Contact You / سيتصل بك وكيل أوير'))
};



  

  
  const noRefresh = function(e) {
    e.preventDefault()
  } 
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]

  const [searchInput, setSearchInput] = useState('');
  const [APIData, setAPIData] = useState([])
  const [ArAPIData, setArAPIData] = useState([])
  
  useEffect(() => {
    setAPIData(listAll.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
      }
      ))
    setArAPIData(arlistAll.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
      }
      ))
  }, [searchInput])
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      console.log(APIData.filter((item) => {
          return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
          setAPIData(item)
      }))
      APIData.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
  }


  return (
    <>
    {fword == 'ar' ? 
      <Helmet>
        <title>  {arproperty.name} - عقارات زيست</title>
        <meta name='description' content={ "دولار " + arproperty.price +" ارضيية و سعر يبدء من "  + arproperty.Allbuild +" عمارة و "  + arproperty.build + ' الذي يتكون من ' + arproperty.name + ' تقوم زيست بالإستثمار في مشروع '} />
      </Helmet>
      : 
      <Helmet>
        <title>{property.name} - Zest Property</title>
        <meta name='description' content={"Zest invests in " + property.name + "That has " + property.build + "Buildings and "+ property.Allbuild + " Floors By a price that starts with $"+ property.price + " dollars and proper installments"} />
      |</Helmet>
      }
      {fword == 'ar'?
    <div className='con'>
      <div className='lineupss'>
        <div>
          <h1 className=''>{arproperty.name}</h1>
          <h3 className=''>{arproperty.address}</h3>
        </div>
        <div className='btns'>
          <div className='type'>
            {arproperty.type}
          </div>
          <div className='country'>
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
          <div className='discription'>
            <p> مشروع <span>{arproperty.nameproperty}</span> في <span>{arproperty.address}</span> يتألف من <span>{arproperty.build}</span> عمارة كل عمارة <span>{arproperty.Allbuild}</span> طابق 
يتميز بـمساحات خضراء جميلة, نظام حماية وامن كامل, بلكونة على محيط الشقة </p>
          </div>
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
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='اسم*'
              onChange={e => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='البريد الإلكتروني*'
              onChange={e => setEmail(e.target.value)}
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
              <a>
                <input type='submit'
                  className='buttonss'
                  value='أرسل رسالة'
                ></input>
            </a>
              <a href={arproperty.agent.phone}>
                <p  className='buttonss'>اتصال</p>
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
          <div className='type'>
            {property.type}
          </div>
          <div className='country'>
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
          <p>{property.nameproperty} is located in {property.address}. It consists of {property.build} Buildings, and {property.Allbuild} Floor.
{property.nameproperty} has a special green environmental space. A full security system. And a balcony</p>
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
          <form onSubmit={handleSubmit}>
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
              <a >
                <input
                  className='buttonss'
                  type='submit'
                  value='Send message'
                ></input>
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
