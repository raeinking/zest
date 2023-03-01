import React from "react"
import Heading from "../../common/Heading"
import './project.css'
import Projectname from './Projectname'

const Project = () => {
  return (
    <>
      <section  data-aos='zoom-in-up' data-aos-duration='2000' className='container ssss'>
        <Heading title='OUR PROJECTS' subtitle='' />
        <Projectname />
      </section>
    </>
  )
}

export default Project
