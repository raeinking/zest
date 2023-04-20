import React from 'react'
import { Helmet } from 'react-helmet'
import '../projects/projects.css'

function Projectss() {
  return (
    <div>
      <Helmet>
        <title>Projects - Zest Property</title>
        <meta name="description" content="zest property Our company has successfully executed projects in Iraq and Dubai, showcasing our expertise and capability in providing high-quality solutions to clients in the Middle East. With our vast experience and knowledge of the local market, we are committed to delivering projects that exceed expectations and meet the unique needs of our clients. Our team of skilled professionals is equipped to handle projects of any size and complexity, ensuring timely and efficient delivery. Trust us to deliver exceptional results for your project needs in Iraq and Dubai.. " />
      </Helmet>
      <section>
        <div className='imageofheaderbianca'><h1>Projects</h1></div>

        <section className='mainmajidi'>
          <div className='navleft'>
            <div>
              <h6 style={{ margin: '10px 0' }}>location</h6>
              <div className='navp'>
                <a href='Majidi-View'>Dubai</a>
                <a href='bianca'>Baghdad</a>
                <a href='alwedd'>Erbil</a>
                <a href='khlood'>Mosul</a>
                <a href='khlood'>kirkuk</a>
              </div>
            </div>
            <hr />
            <div>
              <h6 style={{ margin: '30px 0 0 0' }}>PROPERTY DEVELOPMENT</h6>
              <div className='navp'>
                <a href='Majidi-View'>Majidi View</a>
                <a href='bianca'>Bianca</a>
                <a href='alwedd'>alwedd</a>
                <a href='khlood'>khlood</a>
              </div>
            </div>
          </div>

          <div className='content'>
            <div class="parentsP">
              <a href='/alwedd' class="div1P">
                <div className='citybaghdad'></div>
                <div className='overlays'>
                  <p>Baghdad</p>
                </div>
              </a>
              <a href='/majidi-view' class="div2P">
                <div className='cityerbil'></div>
                <div className='overlays'>
                  <p>Erbil</p>
                </div>
              </a>
              <a href='/khlood' class="div3P">
                <div className='citymosul'></div>
                <div className='overlays'>
                  <p>Mosul</p>
                </div>
              </a>
              <a href='/bianca' class="div4P">
                <div className='citydubai'></div>
                <div className='overlays'>
                  <p>UAE Dubai</p>
                </div>
              </a>
              <a href='/bianca' class="div5P">
                <div className='citykirkuk'></div>
                <div className='overlays'>
                  <p>kirkuk</p>
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

export default Projectss
