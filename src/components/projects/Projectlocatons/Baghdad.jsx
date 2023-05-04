import React from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'


function Baghdad() {
    return (
        <div>
            <Helmet>
                <title>Explore the Best Projects in Baghdad - Zest Property</title>
                <meta name="description" content="Discover the latest and greatest projects in Baghdad, ranging from commercial and residential developments to infrastructure and public works. Our team is committed to transforming the city's landscape, enhancing the quality of life for its residents and visitors. Browse our portfolio of innovative projects and learn more about how we're shaping the future of Baghdad. Contact us today to get started. " />
            </Helmet>
            <section>
                <div className='imageofheaderbaghdad'><h1>Baghdad Projects</h1></div>

                <section className='mainmajidi'>
                    <Lists />

                    <div className='content'>
                        <div class="parentsbaghdad">
                            <a href='/alwedd' class="div1P">
                                <div className='projectwedd'></div>
                                <div className='overlays'>
                                    <p>Al Wedd</p>
                                </div>
                            </a>
                            <a href='/khlood' class="div2P">
                                <div className='projectkhlood'></div>
                                <div className='overlays'>
                                    <p>Al Khlood</p>
                                </div>
                            </a>
                            <a href='/almansour-city' class="div3P">
                                <div className='projectmansour'></div>
                                <div className='overlays'>
                                    <p>Al Mansour</p>
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

export default Baghdad