import React from "react"
import { list } from "../../data/Data"
import { arlist } from "../../data/Data"
import { useLocation } from "react-router-dom";
import Locationimg from "../../images/location.jpg";


const RecentCard = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
    {paths == '/' ? 
      <div className='gridbox'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type , area, nameproject,number,place } = val
          return (
            <a className="zoom" href={ '/properties/' + val.url} key={index}>
            <div className='box shadow' >
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <p style={{ textAlign: 'left', padding: '10px 0 10px 20px' , color : '#25b579'}}>{nameproject}</p>
                <div className='categorys'> 
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{category}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" ,fontSize:12}}>{number}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579"  , fontSize:12}}>{type}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{area}</span>
                </div>
                <div className="dis">
                <div className='categorys'>
                  {/* <img className="imglocation" src={location} alt='location'></img> */}
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{place}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{price}</span>
                </div>
                </div>
              </div>
                <div className='msg'>
                  <button>Message Us</button>
                </div>
            </div>
            </a>
          )
        })}
      </div>
      :
      <div className='gridbox'>
        {arlist.map((val, index) => {
          const {cover, category, location, name, price, type , area ,number , nameproject ,place} = val
          return (
            <a className="zoom" href={ '/ar/properties/' + val.url} key={index}>
            <div className='box shadow arfrom' >
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <p style={{ textAlign: 'right', padding: '10px 20px 10px 0' , color : '#25b579'}}>{nameproject}</p>
                <div className='categorys'> 
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{category}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" ,fontSize:12}}>{number}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579"  , fontSize:12}}>{type}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{area}</span>
                </div>
                <div className="dis">
                <div className='categorys'>
                  {/* <img className="imglocation" src={location} alt='location'></img> */}
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{place}</span>
                  <span style={{ background: "#25b5791a", color: "#25b579" , fontSize:12 }}>{price}</span>
                </div>
                </div>
              </div>
                <div className='msg'>
                  <button>راسلنا</button>
                </div>
            </div>
            </a>
          )
        })}
      </div>
    }
    </>
  )
}

export default RecentCard
