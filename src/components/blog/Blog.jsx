import React, { useEffect , useState } from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import Blogsprojects from "./Blogsprojects"
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import Locationimg from ".././images/location.jpg";
import { listAll } from '../data/Data'
import { arlistAll } from '../data/Data'


const Blog = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  const fword = paths[1] + paths[2]
  const [searchInput, setSearchInput] = useState('');
  const [APIData, setAPIData] = useState([])
  
  useEffect(() => {
    setAPIData(listAll.filter((item) => {
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
        <title>جميع العقارات - عقارات زيست في العراق وكردستان</title>
        <meta name='description' content="تتوفر جميع انواع العقارات من الأيجار والبيع وغيرها بكافة انواع الدفع مثل المقدمات التسهيلية والأقساط السنوية التي تصل حتى 10 سنوات" />
      </Helmet>
      : 
      <Helmet>
        <title>Properties for sale in iraq and kurdistan - zest property</title>
        <meta name="description" content="You can find many different types of properties through zest's company and through many different ways of payment like cash and installments " />
      </Helmet>
      }
      {paths == '/properties' ?
       <section>
      <section className='blog'>
          <div className="searchbardiv">
            <div className="select">
              <select onChange={(e) => searchItems(e.target.value)} value='Projects'>
                <option selected disabled >Projects</option>
                <option value="">All</option>
                <option value="north">north</option>
                <option value="sky view">sky view</option>
                <option value="venus">venus</option>
                <option value="qaiwan">qaiwan</option>
                <option value="nova">nova</option>
              </select>
              <select onChange={(e) => searchItems(e.target.value)} value='Rooms'>
                <option selected disabled>Rooms</option>
                <option value="1 + 1">1 + 1</option>
                <option value="1 + 2">1 + 2</option>
                <option value="1 + 3">1 + 3</option>
                <option value="1 + 4">1 + 4</option>
                <option value="1 + 5">1 + 5</option>
                <option value="1 + 6">1 + 6</option>
              </select>
            </div>
            <input className="searchbar" type='text' onChange={(e) => searchItems(e.target.value)} placeholder='Search...' />
          </div>
      </section>
      {/* <section className="blogFillters"></section> */}
        <div className='grid'>
        <div className='gridbox'>
        {APIData.map((val, index) => {
          const { cover, category, location, name, price, type, area } = val
          return (
            <a className='zoom' href={ '/properties/' + val.url}>
            <div className='box shadow' key={index}>
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
              <div className='buttonpr'>
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
        </div>
      </section>
      : 
      <section>
      <section className='blog'>
          <Back title='ابحث عن منزل مميز' subtitle='ابحث عن عقار جديد ومميز يقع في مدينتك المحلية.' cover={img} />
      </section>
      <section className="blogFillters">
          {/* {projectFilter.map((val, index) => {
            <div key={index}>
              <p>{val.name}</p>
            </div>
          })} */}
      </section>
      <Blogsprojects />
      </section>
      }
    </>
  )
}

export default Blog
