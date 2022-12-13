import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import Blogsprojects from "./Blogsprojects"
import { projectFilter } from "../data/Data"
import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/properties' ?
       <section>
      <section className='blog'>
          <Back title='Find Your Home' subtitle='Find new & featured property located in your local city.' cover={img} />
      </section>
      <section className="blogFillters">
          {projectFilter.map((val, index) => {
            <div key={index}>
              <p>{val.name}</p>
            </div>
          })}
      </section>
      <Blogsprojects />
      </section>
      : 
      <section>
      <section className='blog'>
          <Back title='ابحث عن منزل مميز' subtitle='ابحث عن عقار جديد ومميز يقع في مدينتك المحلية.' cover={img} />
      </section>
      <section className="blogFillters">
          {projectFilter.map((val, index) => {
            <div key={index}>
              <p>{val.name}</p>
            </div>
          })}
      </section>
      <Blogsprojects />
      </section>
      }
    </>
  )
}

export default Blog
