import React from "react"
import { useLocation } from "react-router-dom"
import Heading from "../../common/Heading"
import './project.css'
import Projectname from './Projectname'
import ProjectPlace from './ProjectPlace'

const Project = () => {
  const location = useLocation();
  const paths = window.location.pathname;
  return (
    <>
      {paths == '/' ?
        <section className='container ssss'>
          <Heading title='OUR PROJECTS' subtitle='' />
          <ProjectPlace />
        </section>
        :
        <section className='container ssss'>
          <Heading title='مشاريعنا' subtitle='' />
          <ProjectPlace />
        </section>
      }
    </>
  )
}

export default Project
