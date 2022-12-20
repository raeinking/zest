import React from 'react'
import Back from '../common/Back'
import { allAgents } from '../data/Data'
import { Slide } from 'react-slideshow-image';
import './Dic.css'
import 'react-slideshow-image/dist/styles.css'
import Form from '../form/Form'




export default function pageDis() {
  return (
    <section className='diss'>
        {/* <Back name='' title='Apartment for Rent 125m in Lalav City' cover={projects.Imas} />
        <main>
          <div className='main'>
            <div className='container1'>
                <div className='left-main'>
              <div className='name'>
                <h3>Apartment for Rent 125m in Lalav City</h3>
                <div className='location'>
                <div className='spans'>
                   <i class="fa-solid fa-location-dot"></i>
                   <a  className='span' href='erbil'>erbil</a>
                </div>
                <div className='spans'>
                   <i class="fa-solid fa-calendar-days"></i>
                   <span className='span'>30/10/2022</span>
                </div>
                </div>
              </div>
              <div className='images'>
                <Slide autoplay={true} transitionDuration={400} canSwipe={true} infinite={true} arrows={false} pauseOnHover={true} duration={1700} >
                  {allprojects.map((slideImage, index)=> (
                    <div className="each" key={index}>
                      <div className="iamge" style={{'backgroundImage': `url(${slideImage.Imas})`}}></div>
                    </div>
                  ))} 
                </Slide>
              </div>
            </div>
            <div className='right ontheright'>
                <span className='icons'>
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                  <div className='iconp'>
                    <p>Price</p>
                    <h3>$200000</h3>
                  </div>
                </span>
                <span className='icons'>
                  <i class="fa-solid fa-house-flag"></i>
                  <div className='iconp'>
                    <p>Purpose</p>
                    <h3>sell</h3>
                  </div>
              </span>
                <span className='icons'>
                  <i class="fa-solid fa-house"></i>
                  <div className='iconp'>
                    <p>Property type</p>
                    <h3>house</h3>
                  </div>
              </span>
                <span className='icons'>
                  <i class="fa-solid fa-building"></i>
                  <div className='iconp'>
                    <p>Project</p>
                    <h3>lalav city view</h3>
                  </div>
              </span>
                <span className='icons'>
                  <i class="fa-solid fa-location-dot"></i>
                  <div className='iconp'>
                    <p>location</p>
                    <h3>erbil</h3>
                  </div>
              </span>
                <span className='icons'>
                  <i class="fa-solid fa-ruler-combined"></i>
                  <div className='iconp'>
                    <p>Area</p>
                    <h3>122 m2</h3>
                  </div>
              </span>
                <span className='icons'>
                  <i class="fa-solid fa-person-digging"></i>
                  <div className='iconp'>
                    <p>Furnishing</p>
                    <h3>Fully Furnished</h3>
                  </div>
              </span>
            </div>
            </div>
            <div className='container2'>
              <div className='left-con2'>
                    <h2>Property Features</h2>
                    <div className='cons2'>
                    <span className='icons'>
                      <i class="fa-solid fa-bed"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>4 beds</p>
                      </div>
                    </span>
                    <span className='icons'>
                      <i class="fa-solid fa-couch"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>5 beds</p>
                      </div>
                  </span>
                    <span className='icons'>
                      <i class="fa-solid fa-shower"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>5 beds</p>
                      </div>
                  </span>
                    <span className='icons'>
                      <i class="fa-solid fa-warehouse"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>5 beds</p>
                      </div>

                  </span>
                    <span className='icons'>
                      <i class="fa-solid fa-kitchen-set"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>5 beds</p>
                      </div>
                  </span>
                    <span className='icons'>
                      <i class="fa-solid fa-location-dot"></i>
                      <div className='inside'>
                        <h5>Bedroom:</h5>
                        <p>5 beds</p>
                      </div>
                    </span>
                  <div className='property-adress'>
                    </div>
                  </div>
                  </div>
              <div className='right agent'>
                    <div className='imgagent'>
                      <img  src={allAgents[0].cover} ></img>
                    </div>
                    <div className='nameagent'>
                    <h4>Rayan Jafar</h4>
                    <a href='tel:+9647501379855'>9647501379855</a>
                    <a href='mailto:raeinking2@gmail.com'>raeinking2@gmail.com</a>
                    </div>
              </div>
          </div>
          <div className='form'>
              <Form />
          </div>
            </div>
        </main> */}
    </section>
  )
}