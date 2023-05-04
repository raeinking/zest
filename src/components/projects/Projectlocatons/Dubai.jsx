import React from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'


function Dubai() {
    return (
        <div>
            <Helmet>
                <title>Discover the Best Projects in Dubai - Zest Property</title>
                <meta name="description" content="Explore our portfolio of exceptional projects in Dubai, including commercial and residential developments, infrastructure, and public works. Our team is dedicated to elevating the city's skyline and setting new standards for innovation and design. From world-renowned landmarks to cutting-edge developments, we're at the forefront of shaping the future of Dubai. Browse our portfolio and contact us today to learn more." />
            </Helmet>
            <section>
                <div className='imageofheaderdubai'><h1>Dubai Projects</h1></div>

                <section className='mainmajidi'>
                    <Lists />

                    <div className='content'>
                        <div class="parentserbil">
                            <a href='/damac-bay2' class="div1P">
                                <div className='projectdamac2'></div>
                                <div className='overlays'>
                                    <p>Damac bay 2</p>
                                </div>
                            </a>
                            <a href='/damac-lagoons' class="div2P">
                                <div className='projectdamac'></div>
                                <div className='overlays'>
                                    <p>Damac Lagoons</p>
                                </div>
                            </a>
                            <a href='/azizi-riviera' class="div3P">
                                <div className='projectazizi'></div>
                                <div className='overlays'>
                                    <p>Azizi Riviera</p>
                                </div>
                            </a>
                            <a href='/bianca' class="div4P">
                                <div className='imagebianca'></div>
                                <div className='overlays'>
                                    <p>Bianca</p>
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

export default Dubai