import React, { useEffect , useState } from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import { useLocation, useParams   } from "react-router-dom";
import { Helmet } from "react-helmet"
import Locationimg from ".././images/location.jpg";
import { listAll } from '../data/Data'
import { arlistAll } from '../data/Data'


const Blog = () => {
  const location = useLocation();
  const paths = window.location.pathname
  const search = window.location.search
  const queryParams = new URLSearchParams(search)

  const resident = queryParams.get("project")
  const type = queryParams.get("type")
  const meter = queryParams.get("meter")
  const cityParams = queryParams.get("city")
  const priceParams = queryParams.get("Price")

  const [project, setProject] = useState(resident || '');
  const [room, setRoom] = useState(type || '');
  const [areaMeter, setArea] = useState(meter || '');
  const [city, setCity] = useState(cityParams || '');
  const [price, setPrice] = useState(priceParams || '');


  const [APIData, setAPIData] = useState([])
  const [ArAPIData, setArAPIData] = useState([])
  
  const fword = paths[1] + paths[2]

  useEffect(() => {
    setAPIData(listAll.filter((item) => {
      //  const projectName = Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase())
       const test = 
       Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase()) && 
       Object.values(item.type).join('').toLowerCase().includes(room.toLowerCase()) && 
       Object.values(item.area).join('').toLowerCase().includes(areaMeter.toLowerCase()) &&
       Object.values(item.citys).join('').toLowerCase().includes(city.toLowerCase()) &&
       Object.values(item.price).join('').toLowerCase().includes(price.toLowerCase()) 
        return test
      }
      ))
    setArAPIData(arlistAll.filter((item) => {
        return Object.values(item.type).join('').toLowerCase().includes(room.toLowerCase())
      }
      ))
  }, [project])


  // useEffect(() => {
  //   setAPIData(listAll.filter((item) => {
  //       return Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase())
  //     }
  //     ))
  //   setArAPIData(arlistAll.filter((item) => {
  //       return Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase())
  //     }
  //     ))
  // }, [project])

  // const searchItems = (searchValue) => {
  //     setSearchInput(searchValue)
  //     console.log(APIData.filter((item) => {
  //         return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
  //         setAPIData(item)
  //     }))
  //     APIData.filter((item) => {
  //       return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     })
  // }

  console.log()


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
            <form action="/properties">
            <div className="all">
            {/* <div>
              <input type="radio" name='typeseller' value='vasdflk' defaultChecked></input>
              <input type="radio" name="typeseller"></input>
            </div> */}
              <div className="allselect">
                <select defaultValue={resident} name="project" className="selectt">
                  <option value="">Projects</option>
                  <option value="North">North</option>
                  <option value="Sky View">Sky View</option>
                  <option value="venus">Venus</option>
                  <option value="Qaiwan">Qaiwan</option>
                  <option value="Nova">Nova</option>
                </select>
                <select defaultValue={type}  name="type" className="selectt">
                  <option value="">Rooms</option>
                  <option value="1 + 1">1 + 1</option>
                  <option value="1 + 2">1 + 2</option>
                  <option value="1 + 3">1 + 3</option>
                  <option value="1 + 4">1 + 4</option>
                  <option value="1 + 5">1 + 5</option>
                  <option value="1 + 6">1 + 6</option>
                </select>
                <select defaultValue={meter}  name="meter" className="selectt">
                  <option value=''>Meter</option>
                  <option value="67">67</option>
                  <option value="72">72</option>
                  <option value="76">76</option>
                  <option value="78">78</option>
                  <option value="80">80</option>
                  <option value="81">81</option>
                  <option value="90">90</option>
                  <option value="105">105</option>
                  <option value="115">115</option>
                  <option value="120">120</option>
                  <option value="140">140</option>
                  <option value="201">201</option>
                  <option value="210">210</option>
                </select>
                <select defaultValue={cityParams}  name="meter" className="selectt">
                  <option value=''>City</option>
                  <option value="Erbil">Erbil</option>
                  <option value="Baghdad">Baghdad</option>
                  <option value="Kirkuk">Kirkuk</option>
                </select>
              </div>
            </div>
            <button>Search</button>
          </form>
            {/* <input className="searchbar" type='text' onChange={(e) => searchItems(e.target.value)} placeholder='Search...' /> */}
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
          {/* <Back title='ابحث عن منزل مميز' subtitle='ابحث عن عقار جديد ومميز يقع في مدينتك المحلية.' cover={img} /> */}
       <div className="searchbardiv">
            {/*<div className="select sleft">
              <select onChange={(e) => searchItems(e.target.value)}>
                <option value="" >Projects</option>
                <option value="North">North</option>
                <option value="Sky View">Sky View</option>
                <option value="venus">Venus</option>
                <option value="Qaiwan">Qaiwan</option>
                <option value="Nova">Nova</option>
              </select>
              <select className="select" onChange={(e) => searchItems(e.target.value)}>
                <option value="">Rooms</option>
                <option value="1 + 1">1 + 1</option>
                <option value="1 + 2">1 + 2</option>
                <option value="1 + 3">1 + 3</option>
                <option value="1 + 4">1 + 4</option>
                <option value="1 + 5">1 + 5</option>
                <option value="1 + 6">1 + 6</option>
              </select>
              <select className="select sright" onChange={(e) => searchItems(e.target.value)}>
                <option value=''>Meter</option>
                <option value="67">67</option>
                <option value="72">72</option>
                <option value="76">76</option>
                <option value="78">78</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="90">90</option>
                <option value="105">105</option>
                <option value="115">115</option>
                <option value="120">120</option>
                <option value="140">140</option>
                <option value="201">201</option>
                <option value="210">210</option>
              </select>
            </div> */}
            {/* <input className="searchbar" type='text' onChange={(e) => searchItems(e.target.value)} placeholder='...يبحث' /> */}
          </div>
      </section>
      <section className="blogFillters">
          {/* {projectFilter.map((val, index) => {
            <div key={index}>
              <p>{val.name}</p>
            </div>
          })} */}
      </section>
      {/* <Blogsprojects /> */}
      <div className='grid'>
        <div className='gridbox'>
        {ArAPIData.map((val, index) => {
          const { cover, category, location, name, price, type, area } = val
          return (
            <a className='zoom' href={ '/ar/properties/' + val.url}>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                </div>
                <div className="dis">
                <h4 className='ar'>{name}</h4>
                <p>
                  <img className="imglocation" src={Locationimg} alt='location'></img> {location}
                </p>
                </div>
              </div>
              <div className='buttonpr'>
                <button  className='btn2 ar'>{price}</button>
                <div className="flezs"></div>
                <label htmlFor='' className='ar'>{area}</label>
                <span className='ar'>{type}</span>
              </div>
            </div>
            </a>
          )
        })}
        </div>
      </div>
      </section>
      }
    </>
  )
}

export default Blog
