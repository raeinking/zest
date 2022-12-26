import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import Blogsprojects from "./Blogsprojects"
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"

const Blog = () => {
  const location = useLocation();
  const paths = window.location.pathname;
    const fword = paths[1] + paths[2]
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
          <Back title='Find Your Home' subtitle='Find new & featured property located in your local city.' cover={img} />
      </section>
      {/* <section className="blogFillters"></section> */}
      <Blogsprojects />
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
