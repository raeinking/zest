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

  console.log()












  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setisOpencity(false);
    setisOpenroom(false);
    setisOpenapartment(false);

  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const [isOpenapartment, setisOpenapartment] = useState(false);
  const [isOpenapartmentoption, setisOpenapartmentoption] = useState('');

  const dropapartment = () => {
    setisOpenapartment(!isOpenapartment);
    setIsOpen(false); // Close the other dropdowns
    setisOpencity(false);
    setisOpenroom(false);
  };

  const handltypepropertyselect = (value) => {
    setisOpenapartmentoption(value);
    setisOpenapartment(false);
  };

  const [isOpencity, setisOpencity] = useState(false);
  const [isOpencityoption, setisOpencityoption] = useState('');

  const dropcity = () => {
    setisOpencity(!isOpencity);
    setIsOpen(false); // Close the other dropdowns
    setisOpenapartment(false);
    setisOpenroom(false);
  };

  const handlcityselect = (value) => {
    setisOpencityoption(value);
    setisOpencity(false);
  };

  const [isOpenroom, setisOpenroom] = useState(false);
  const [isOpenroomoption, setisOpenroomoption] = useState('');

  const droproom = () => {
    setisOpenroom(!isOpenroom);
    setIsOpen(false); // Close the other dropdowns
    setisOpenapartment(false);
    setisOpencity(false);
  };

  const handlroomselect = (value) => {
    setisOpenroomoption(value);
    setisOpenroom(false);
  };



  const [arisOpen, setarIsOpen] = useState(false);
  const [arselectedOption, setarSelectedOption] = useState('');

  const artoggleDropdown = () => {
    setarIsOpen(!arisOpen);
    setarisOpencity(false);
    setarisOpenroom(false);
    setarisOpenapartment(false);

  };

  const arhandleOptionSelect = (value) => {
    setarSelectedOption(value);
    setarIsOpen(false);
  };

  const [arisOpenapartment, setarisOpenapartment] = useState(false);
  const [arisOpenapartmentoption, setarisOpenapartmentoption] = useState('');

  const ardropapartment = () => {
    setarisOpenapartment(!arisOpenapartment);
    setarIsOpen(false); // Close the other dropdowns
    setarisOpencity(false);
    setarisOpenroom(false);
  };

  const arhandltypepropertyselect = (value) => {
    setarisOpenapartmentoption(value);
    setarisOpenapartment(false);
  };

  const [arisOpencity, setarisOpencity] = useState(false);
  const [arisOpencityoption, setarisOpencityoption] = useState('');

  const ardropcity = () => {
    setarisOpencity(!arisOpencity);
    setarIsOpen(false); // Close the other dropdowns
    setarisOpenapartment(false);
    setarisOpenroom(false);
  };

  const arhandlcityselect = (value) => {
    setarisOpencityoption(value);
    setarisOpencity(false);
  };

  const [arisOpenroom, setarisOpenroom] = useState(false);
  const [arisOpenroomoption, setarisOpenroomoption] = useState('');

  const ardroproom = () => {
    setarisOpenroom(!arisOpenroom);
    setarIsOpen(false); // Close the other dropdowns
    setarisOpenapartment(false);
    setarisOpencity(false);
  };

  const arhandlroomselect = (value) => {
    setarisOpenroomoption(value);
    setarisOpenroom(false);
  };






<<<<<<< HEAD



=======
>>>>>>> 87d493a (push majidi view english)
  const options = [
    { value: '', label: 'Select Projects Name' },
    { value: 'North', label: 'North Holland' },
    { value: 'Sky View', label: 'Sky View' },
    { value: 'venus', label: 'Venus Towers' },
    { value: 'Qaiwan', label: 'Qaiwan Mirador' },
    { value: 'Nova', label: 'Nova Towers' },
    { value: 'Skyland', label: 'Skyland' },
    { value: 'Alwedd', label: 'Alwedd' },
    { value: 'Khlood', label: 'Khlood' },
    { value: 'Majidi View', label: 'Majidi View' },
    { value: 'Damac Bay 2', label: 'Damac Bay 2' },
    { value: 'Azizi Rivira', label: 'Azizi Rivira' },
    { value: 'Damac Lagoon', label: 'Damac Lagoon' },
];
const typeapartment = [
    { value: '', label: 'Select Property Type' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'House', label: 'House' },
];
const citys = [
    { value: '', label: 'Select City' },
    { value: 'Erbil', label: 'Erbil' },
    { value: 'Baghdad', label: 'Baghdad' },
    { value: 'Kirkuk', label: 'Kirkuk' },
    { value: 'Dubai', label: 'Dubai' },
];
const rooms = [
    { value: '', label: 'Select Bedrooms' },
    { value: '1 + 1', label: '1 + 1' },
    { value: '2 + 1', label: '1 + 2' },
    { value: '3 + 1', label: '1 + 3' },
    { value: '4 + 1', label: '1 + 4' },
    { value: '5 + 1', label: '1 + 5' },
    { value: 'Villa', label: 'Villa' },
];


const aroptions = [
    { value: '', label: 'حدد اسم المشروع' },
    { value: 'نورث هولند', label: 'نورث هولند' },
    { value: 'سكاي فيو', label: 'سكاي فيو' },
    { value: 'فينوس تاوەر', label: 'فينوس تاوەر' },
    { value: 'قیوان', label: 'قیوان میرادور' },
    { value: 'نوفا', label: 'نوفا تاورز' },
    { value: 'سکايلاند', label: 'سکايلاند' },
    { value: 'الود', label: 'الود' },
    { value: 'الخلود', label: 'الخلود' },
    { value: 'ماجدي فیو', label: 'ماجدي فیو' },
    { value: 'داماك بي ٢', label: 'داماك بي ٢' },
    { value: 'أزیزي ریفیرا', label: 'أزیزي ریفیرا' },
    { value: 'داماك لاگوون', label: 'داماك لاگوون' },
];
const artypeapartment = [
    { value: '', label: 'نوع الملكية' },
    { value: 'شقة', label: 'شقة' },
    { value: 'منزل', label: 'منزل' },
];
const arcitys = [
    { value: '', label: 'حدد المحافظة' },
    { value: 'اربيل', label: 'اربيل' },
    { value: 'بغداد', label: 'بغداد' },
    { value: 'كركوك', label: 'كركوك' },
    { value: 'دبي', label: 'دبي' },
];
const arrooms = [
    { value: '', label: 'عدد الغرف' },
    { value: '1 + 1', label: '1 + 1' },
    { value: '2 + 1', label: '1 + 2' },
    { value: '3 + 1', label: '1 + 3' },
    { value: '4 + 1', label: '1 + 4' },
    { value: '5 + 1', label: '1 + 5' },
    { value: 'منزل', label: 'منزل' },
];
<<<<<<< HEAD
=======


>>>>>>> 87d493a (push majidi view english)


  const handleSearch = () => {
    const url = new URL('https://zest-property.com/properties');

    // Set the selected values as parameters
    url.searchParams.set('project', selectedOption);
    url.searchParams.set('Property', isOpenapartmentoption);
    url.searchParams.set('city', isOpencityoption);
    url.searchParams.set('type', isOpenroomoption);

    window.location.href = url.toString();
  };
  const arhandleSearch = () => {
    const url = new URL('https://zest-property.com/ar/properties');

    // Set the selected values as parameters
    url.searchParams.set('project', arselectedOption);
    url.searchParams.set('Property', arisOpenapartmentoption);
    url.searchParams.set('city', arisOpencityoption);
    url.searchParams.set('type', arisOpenroomoption);

    window.location.href = url.toString();
  };









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

          <div className="backsearch" action="/properties">
            <ul className='fromsearch'>
              <li className='projectName'>
                <label>Project Name</label>
                <div className="dropdownss" tabIndex="-1">
                  <div className={`selected-option ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                    {selectedOption || 'Select Projects Name'}
                  </div>
                  <div className={`options ${isOpen ? 'open' : ''}`}>
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="option"
                        onClick={() => handleOptionSelect(option.value)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>

              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Property Type</label>

                <div className="dropdownss" tabIndex="-1">
                  <div className={`selected-option ${isOpenapartment ? 'open' : ''}`} onClick={dropapartment}>
                    {isOpenapartmentoption || 'Select Projects Name'}
                  </div>
                  <div className={`options ${isOpenapartment ? 'open' : ''}`}>
                    {typeapartment.map((option) => (
                      <div
                        key={option.value}
                        className="option"
                        onClick={() => handltypepropertyselect(option.value)}>
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Project city</label>
                <div className="dropdownss" tabIndex="-1">
                  <div className={`selected-option ${isOpencity ? 'open' : ''}`} onClick={dropcity}>
                    {isOpencityoption || 'Select Projects Name'}
                  </div>
                  <div className={`options ${isOpencity ? 'open' : ''}`}>
                    {citys.map((option) => (
                      <div
                        key={option.value}
                        className="option"
                        onClick={() => handlcityselect(option.value)}>
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>Project bedrooms</label>
                <div className="dropdownss" tabIndex="-1">
                  <div className={`selected-option ${isOpenroom ? 'open' : ''}`} onClick={droproom}>
                    {isOpenroomoption || 'Select Projects Name'}
                  </div>
                  <div className={`options ${isOpenroom ? 'open' : ''}`}>
                    {rooms.map((option) => (
                      <div
                        key={option.value}
                        className="option"
                        onClick={() => handlroomselect(option.value)}>
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <div className='line'></div>
              <button className='btnsearch' value='Search Properties ' onClick={handleSearch}>Search Properties</button>
            </ul>
          </div >


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
          <div className="backsearch" action="/ar/properties">
            <ul className='fromsearch'>
              <li className='projectName'>
                <label>اسم المشروع</label>
                <div className='box-selector'>
                  <div className="dropdownss" tabIndex="-1">
                    <div className={`selected-option ${arisOpen ? 'open' : ''}`} onClick={artoggleDropdown}>
                      {arselectedOption || 'حدد اسم المشروع'}
                    </div>
                    <div className={`options ${arisOpen ? 'open' : ''}`}>
                      {aroptions.map((option) => (
                        <div
                          key={option.value}
                          className="option"
                          onClick={() => arhandleOptionSelect(option.value)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>نوع الملكية</label>
                <div className='box-selector'>
                  <div className="dropdownss" tabIndex="-1">
                    <div className={`selected-option ${arisOpenapartment ? 'open' : ''}`} onClick={ardropapartment}>
                      {arisOpenapartmentoption || 'نوع الملكية'}
                    </div>
                    <div className={`options ${arisOpenapartment ? 'open' : ''}`}>
                      {artypeapartment.map((option) => (
                        <div
                          key={option.value}
                          className="option"
                          onClick={() => arhandltypepropertyselect(option.value)}>
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>الموقع</label>
                <div className='box-selector'>
                  <div className="dropdownss" tabIndex="-1">
                    <div className={`selected-option ${arisOpencity ? 'open' : ''}`} onClick={ardropcity}>
                      {arisOpencityoption || 'حدد المحافظة'}
                    </div>
                    <div className={`options ${arisOpencity ? 'open' : ''}`}>
                      {arcitys.map((option) => (
                        <div
                          key={option.value}
                          className="option"
                          onClick={() => arhandlcityselect(option.value)}>
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </li>
              <div className='line'></div>
              <li className='projectName'>
                <label>نظام الغرف</label>
                <div className='box-selector'>
                  <div className="dropdownss" tabIndex="-1">
                    <div className={`selected-option ${arisOpenroom ? 'open' : ''}`} onClick={ardroproom}>
                      {arisOpenroomoption || 'عدد الغرف'}
                    </div>
                    <div className={`options ${arisOpenroom ? 'open' : ''}`}>
                      {arrooms.map((option) => (
                        <div
                          key={option.value}
                          className="option"
                          onClick={() => arhandlroomselect(option.value)}>
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <div className='line'></div>
              <button className='btnsearch' onClick={arhandleSearch}>Search Properties</button>
            </ul>
          </div >
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
