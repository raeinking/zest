import React from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'

function Kirkuk() {
    return (
        <div>
            <Helmet>
                <title>website seo header and description name erbil projects - Zest Property</title>
                <meta name="description" content="Discover our portfolio of innovative projects in Kirkuk, including commercial and residential developments, infrastructure, and public works. Our team is committed to transforming the city's landscape, enhancing the quality of life for its residents and visitors. From iconic landmarks to cutting-edge developments, we're at the forefront of shaping the future of Kirkuk. Browse our portfolio and contact us today to learn more." />
            </Helmet>
            <section>
                <div className='imageofheaderkirkuk'><h1>Kirkuk Projects</h1></div>

                <section className='mainmajidi'>
                    <Lists />

                    <div className='content'>
                        <div class="parentskirkuk">
                            <a href='/sky-land-kirkuk' class="div1P">
                                <div className='projectskyland'></div>
                                <div className='overlays'>
                                    <p>Sky Land</p>
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
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Kirkuk