import React from "react"
import { useLocation } from "react-router-dom"
import Heading from "../../common/Heading"
import './project.css'
import Projectname from './Projectname'

const Project = () => {
     const location = useLocation();
      const paths = window.location.pathname;
  return (
    <>
     {paths == '/' ?
      <section className='container ssss'>
        <Heading title='OUR PROJECTS' subtitle='' />
        <Projectname />
      </section>
      :
      <section className='container ssss'>
        <Heading title='مشاريعنا' subtitle='' />
        <Projectname />
      </section>
     }
    </>
  )
}

export default Project
