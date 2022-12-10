import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/property.jpg"
import './blog.css'
import Blogsprojects from "./Blogsprojects"
import { projectFilter } from "../data/Data"

const Blog = () => {
  // const { name } = val
  return (
    <>
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
      <></>
      <Blogsprojects />
    </>
  )
}

export default Blog
