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
          const { cover, category, location, name, price, type , area } = val
          return (
            <a href={ '/' + val.url} key={index}>
            <div className='box shadow' >
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                </div>
                <div className="dis">
                <h4>{name}</h4>
                <p>
                  <img className="imglocation" src={Locationimg} alt='location'></img> {location}
                </p>
                </div>
              </div>
              <div className='button flexs'>
                <button className='btn2'>{price}</button>
                <div className="flezs"></div>
                <label htmlFor=''>{area}</label>
                <span>{type}</span>
              </div>
            </div>
            </a>
          )
        })}
      </div>
      :
      <div className='gridbox'>
        {arlist.map((val, index) => {
          const {cover, category, location, name, price, type , area } = val
          return (
            <a href={ '/ar/' + val.url} key={index}>
            <div className='box shadow' >
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category'>
                  <span style={{ background: category === "للبيع" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                </div>
                <div className="dis">
                <h4 className="ar">{name}</h4>
                <p>
                  <img className="imglocation" src={Locationimg} alt='location'></img> {location}
                </p>
                </div>
              </div>
              <div className='button flexs'>
                <button className='btn2 ar'>{price}</button>
                <div className="flezs"></div>
                <label htmlFor='' className="ar">{area}</label>
                <span className="ar">{type}</span>
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
