import React, { useEffect, useState } from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import { useLocation, useParams } from "react-router-dom";
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
  const propertyParams = queryParams.get("Property")
  const saleTypeParams = queryParams.get("saleType")

  const [project, setProject] = useState(resident || '');
  const [room, setRoom] = useState(type || '');
  const [areaMeter, setArea] = useState(meter || '');
  const [city, setCity] = useState(cityParams || '');
  const [price, setPrice] = useState(priceParams || '');
  const [propertyuse, setProperty] = useState(propertyParams || '');
  const [saleType, setSaleType] = useState(saleTypeParams || '')


  const [APIData, setAPIData] = useState([])
  const [ArAPIData, setArAPIData] = useState([])


  const fword = paths[1] + paths[2]

  useEffect(() => {
    setAPIData(listAll.filter((item) => {
      const test =
        Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase()) &&
        Object.values(item.type).join('').toLowerCase().includes(room.toLowerCase()) &&
        Object.values(item.area).join('').toLowerCase().includes(areaMeter.toLowerCase()) &&
        Object.values(item.citys).join('').toLowerCase().includes(city.toLowerCase()) &&
        Object.values(item.price).join('').toLowerCase().includes(price.toLowerCase()) &&
        Object.values(item.property).join('').toLowerCase().includes(propertyuse.toLowerCase()) &&
        Object.values(item.category).join('').toLowerCase().includes(saleType.toLowerCase())
      return test
    }
    ))
    setArAPIData(arlistAll.filter((item) => {
      const test =
        Object.values(item.name).join('').toLowerCase().includes(project.toLowerCase()) &&
        Object.values(item.type).join('').toLowerCase().includes(room.toLowerCase()) &&
        Object.values(item.area).join('').toLowerCase().includes(areaMeter.toLowerCase()) &&
        Object.values(item.citys).join('').toLowerCase().includes(city.toLowerCase()) &&
        Object.values(item.price).join('').toLowerCase().includes(price.toLowerCase()) &&
        Object.values(item.property).join('').toLowerCase().includes(propertyuse.toLowerCase()) &&
        Object.values(item.category).join('').toLowerCase().includes(saleType.toLowerCase())
      return test
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
              <h1 style={{ color: 'white', zIndex: 10 }}>Luxury properties</h1>
            </div>
          </section>

          <form className="backsearch" action="/properties">
            <ul className='fromsearch'>
              <li className='projectName'>
                <label>Project Name</label>
                <div className='box-selector'>
                  <select defaultValue={resident} name="project" className="" tabindex='-1' aria-hidden='true'>
                    <option value="">Select Projects Name</option>
                    <option value="North">North Holland</option>
                    <option value="Sky View">Sky View</option>
                    <option value="venus">Venus Towers</option>
                    <option value="Qaiwan">Qaiwan Mirador</option>
                    <option value="Nova">Nova Towers</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Property Type</label>
                <div className='box-selector'>
                  <select defaultValue={propertyParams} name="Property" className="selectt">
                    <option value=''>Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Project Name</label>
                <div className='box-selector'>
                  <select defaultValue={cityParams} name="city" className="selectt">
                    <option value=''>Select City</option>
                    <option value="Erbil">Erbil</option>
                    <option value="Baghdad">Baghdad</option>
                    <option value="Kirkuk">Kirkuk</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Project Name</label>
                <div className='box-selector'>
                  <select defaultValue={type} name="type" className="selectt">
                    <option value="">Select Bedrooms</option>
                    <option className='text' value="1 + 1">1 + 1</option>
                    <option value="1 + 2">1 + 2</option>
                    <option value="1 + 3">1 + 3</option>
                    <option value="1 + 4">1 + 4</option>
                    <option value="1 + 5">1 + 5</option>
                    <option value="1 + 6">1 + 6</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <input type='submit' className='btnsearch' value='Search Properties' />
            </ul>
          </form >
          <div className='grid'>
            <div className='gridbox'>
              {APIData.map((val, index) => {
                const { cover, category, location, name, price, type, area, nameproject, number, place } = val
                return (
                  <a className="zoom" href={'/properties/' + val.url} key={index}>
                    <div data-aos='zoom-in-up' data-aos-duration='2000' className='box shadow' >
                      <div className='img'>
                        <img src={cover} alt={name} />
                      </div>
                      <div className='text'>
                        <p style={{ textAlign: 'left', padding: '10px 0 10px 20px', color: '#25b579' }}>{nameproject}</p>
                        <div className='categorys'>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{category}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{number}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{type}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{area}</span>
                        </div>
                        <div className="dis">
                          <div className='categorys'>
                            {/* <img className="imglocation" src={location} alt='location'></img> */}
                            <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{place}</span>
                            <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{price}</span>
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
          </div>
        </section>
        :
        <section>
          <section className='blog'>
            <div className="searchbardiv">
              <h1 className="ar" style={{ color: 'white', opacity: 1, zIndex: 10 }}>ابحث عن منزل أحلامك</h1>
            </div>
          </section>
          <form className="backsearch" action="/ar/properties">
            <ul className='fromsearch'>
              <li className='projectName'>
                <label>اسم المشروع</label>
                <div className='box-selector'>
                  <select defaultValue={resident} name="project" className="" tabindex='-1' aria-hidden='true'>
                    <option value="">حدد اسم المشروع</option>
                    <option value="نورث هولند">نورث هولند</option>
                    <option value=" سكاي فيو"> سكاي فيو</option>
                    <option value="فينوس تاوەر">فينوس تاوەر</option>
                    <option value="قیوان">قیوان میرادور</option>
                    <option value="نوفا">نوفا تاورز</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>نوع الملكية</label>
                <div className='box-selector'>
                  <select defaultValue={propertyParams} name="Property" className="selectt">
                    <option value=''>نوع الملكية</option>
                    <option value="شقة">شقة</option>
                    <option value="منزل">منزل</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>الموقع</label>
                <div className='box-selector'>
                  <select defaultValue={cityParams} name="city" className="selectt">
                    <option value=''>حدد المحافظة</option>
                    <option value="اربيل">اربيل</option>
                    <option value="بغداد">بغداد</option>
                    <option value="كركوك">كركوك</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>نظام الغرف</label>
                <div className='box-selector'>
                  <select defaultValue={type} name="type" className="selectt">
                    <option value="">عدد الغرف</option>
                    <option className='text' value="1 + 1">1 + 1</option>
                    <option value="1 + 2">1 + 2</option>
                    <option value="1 + 3">1 + 3</option>
                    <option value="1 + 4">1 + 4</option>
                    <option value="1 + 5">1 + 5</option>
                    <option value="1 + 6">1 + 6</option>
                  </select>
                </div>
              </li>
              <div className='line'></div>
              <input type='submit' className='btnsearch' value='خصائص البحث' />
            </ul>
          </form >
          <div className='grid'>
            <div className='gridbox'>
              {ArAPIData.map((val, index) => {
                const { cover, category, location, name, price, type, area, number, nameproject, place } = val
                return (
                  <a className="zoom" href={'/ar/properties/' + val.url} key={index}>
                    <div data-aos='zoom-in-up' data-aos-duration='2000' className='box shadow arfrom' >
                      <div className='img'>
                        <img src={cover} alt={name} />
                      </div>
                      <div className='text'>
                        <p style={{ textAlign: 'right', padding: '10px 20px 10px 0', color: '#25b579' }}>{nameproject}</p>
                        <div className='categorys'>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{category}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{number}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{type}</span>
                          <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{area}</span>
                        </div>
                        <div className="dis">
                          <div className='categorys'>
                            {/* <img className="imglocation" src={location} alt='location'></img> */}
                            <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{place}</span>
                            <span style={{ background: "#25b5791a", color: "#25b579", fontSize: 12 }}>{price}</span>
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
          </div>
        </section>
      }
    </>
  )
}

export default Blog
