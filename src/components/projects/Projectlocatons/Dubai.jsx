import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import Project from '../../home/project/Project'
import '../../projects/projects.css'
import Lists from '../../thinkgsthatnotchanged/Lists'
import whatsapp from '../../images/whatsapp-svgrepo-com.svg'



function Dubai() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')      


    const handleSubmit = async (e) => {
          e.preventDefault()
          
        fetch('https://node-email-sendersss.glitch.me/dubai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone
          })
        })
        alert('Email sent successfully')  
    }


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
                            <a href='/samana-skyros' class="div5P">
                                <div className='imagesamana'></div>
                                <div className='overlays'>
                                    <p>Samana SkyRos</p>
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
                <div className='formcontainer' style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' , flexDirection: 'column' }}>
                        <h3>Fill the Form we will contact you in 10 minute</h3>
                    <form onSubmit={handleSubmit} className='from' style={{maxWidth: 450 , backgroundColor: 'white',borderRadius: 30, height: 450 , display: 'flex', flexDirection: 'column' , padding: 40, alignContent: 'space-around', justifyContent: 'space-between' }}>
                        <div>
                            <input value={name} onChange={ (e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Your Name...' required  style={{padding: 15 , marginTop: 5, height: 40 , marginBottom: 20 }}/>
                            <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Your Email...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }}/>
                            <input value={phone} onChange={ (e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder='Your Phone...' required style={{padding: 15 , marginTop: 5, height: 40 ,marginBottom: 20 }} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 10, marginBottom: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                <h5>to Contact our service please click this icon </h5>
                                <a target='_blank' href={"//api.whatsapp.com/send?phone=9647502552006&text=hello iam interested in Dubai projects "}>
                                    <img className='whatsapp' src={whatsapp} />
                                </a>
                            </div>
                        <button  type="submit">Send</button>
                    </form> 
                </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Dubai