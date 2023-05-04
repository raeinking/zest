import React from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'

function Mosul() {
    return (
        <div>
            <Helmet>
                <title>Discover the Best Projects in Mosul - Zest Property</title>
                <meta name="description" content="Explore our portfolio of exceptional projects in Mosul, including commercial and residential developments, infrastructure, and public works. Our team is dedicated to building a better future for the city and its residents, with innovative designs and high-quality construction. From iconic landmarks to essential infrastructure, we're committed to shaping the future of Mosul. Browse our portfolio and contact us today to learn more." />
            </Helmet>
            <section>
                <div className='imageofheadermosul'><h1>Mosul Projects</h1></div>

                <section className='mainmajidi'>
                    <Lists />

                    <div className='content'>
                        <div class="parentskirkuk">
                            <a href='/almansour' class="div1P">
                                <div className='projectalmansours'></div>
                                <div className='overlays'>
                                    <p>Al Mansour city</p>
                                </div>
                            </a>
                        </div>
                        <h2>caming soon</h2>
                        {/* <div className='dis ssss'>
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
                        </div> */}
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Mosul