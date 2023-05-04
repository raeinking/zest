import React from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'

function Projectlocation() {
    return (
        <div>
            <Helmet>
                <title>Discover the Best Projects in Erbil - Zest Property</title>
                <meta name="description" content="Explore our portfolio of exceptional projects in Erbil, including commercial and residential developments, infrastructure, and public works. Our team is dedicated to elevating the city's landscape and setting new standards for innovation and design. From iconic landmarks to cutting-edge developments, we're at the forefront of shaping the future of Erbil. Browse our portfolio and contact us today to learn more." />
            </Helmet>
            <section>
                <div className='imageofheadererbil'><h1>Erbil Projects</h1></div>

                <section className='mainmajidi'>
                    <Lists />

                    <div className='content'>
                        <div class="parentserbil">
                            <a href='/lalav-group' className="div1P">
                                <div className='projectlalav'></div>
                                <div className='overlays'>
                                    <p>Lalav Group</p>
                                </div>
                            </a>
                            <a href='/North-Holland' className="div2P">
                                <div className='projectnorth'></div>
                                <div className='overlays'>
                                    <p>North Holland</p>
                                </div>
                            </a>
                            <a href='/qaiwan-mirador' className="div3P">
                                <div className='projectqaywan'></div>
                                <div className='overlays'>
                                    <p>Qaywan Mirador</p>
                                </div>
                            </a>
                            <a href='/Majidi-View' className="div4P">
                                <div className='projectmajidi'></div>
                                <div className='overlays'>
                                    <p>Majidi View</p>
                                </div>
                            </a>
                        </div>
                        <div className='dis ssss'>
                            <h3>Description</h3>
                            <p className='pdis'>
                                <p>Our company has successfully executed projects in Iraq and Dubai, showcasing our expertise and capability in providing high-quality solutions to clients in the Middle East.</p>
                                <br />
                                <br />
                                <p>experience and knowledge of the local market, we are committed to delivering projects that exceed expectations and meet the unique needs of our clients. Our team of skilled </p>
                                <br />
                                <br />
                                <p>professionals is equipped to handle projects of any size and complexity, ensuring timely and efficient delivery. Trust us to deliver exceptional results for your project needs in Iraq and Dubai.</p>
                            </p>
                        </div>
                    </div >
                </section >
            </section >
        </div >
    )
}

export default Projectlocation
