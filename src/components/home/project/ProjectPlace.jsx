import React from 'react'
import image from '../../images/Dub.jpg'
import image1 from '../../images/erbil.jpg'
import image2 from '../../images/Bag.jpg'
import image3 from '../../images/Mos.jpg'
import image4 from '../../images/Kir.jpg'
import { useLocation } from 'react-router-dom';

function ProjectPlace() {
    const location = useLocation();
    const paths = window.location.pathname;
    return (
        <>
            {paths == '/' ?
                <div className='grid'>
                    <div data-aos-duration='1000' className='gridboxs'>
                        <a href='/projects/dubai' className='home1'>
                            <img src={image} />
                            <div className='overlay'>
                                <h3>Dubai</h3>
                            </div>
                        </a>
                        <a href='/projects/erbil' data-aos-duration='1500' className='home2'>
                            <img src={image1} />
                            <div className='overlay1'>
                                <h3>Erbil</h3>
                            </div>
                        </a>
                        <a href='/projects/baghdad' data-aos-duration='1500' className='home3'>
                            <img src={image2} />
                            <div className='overlay2'>
                                <h3>Baghdad</h3>
                            </div>
                        </a>
                        <a href='/projects/mosul' data-aos-duration='2000' className='home4'>
                            <img src={image3} />
                            <div className='overlay3'>
                                <h3>Mosul</h3>
                            </div>
                        </a>
                        <a href='/projects/kirkuk' data-aos-duration='2000' className='home5'>
                            <img src={image4} />
                            <div className='overlay3'>
                                <h3>Kirkuk</h3>
                            </div>
                        </a>
                    </div>
                </div>
                :
                <div className='grid'>
                    <div data-aos-duration='1000' className='gridboxs'>
                        <a href='/ar/projects/dubai' className='home1'>
                            <img src={image} />
                            <div className='overlay'>
                                <h3>دبي</h3>
                            </div>
                        </a>
                        <a href='/ar/projects/erbil' data-aos-duration='1500' className='home2'>
                            <img src={image1} />
                            <div className='overlay1'>
                                <h3>أربيل</h3>
                            </div>
                        </a>
                        <a href='/ar/projects/baghdad' data-aos-duration='1500' className='home3'>
                            <img src={image2} />
                            <div className='overlay2'>
                                <h3>بغداد</h3>
                            </div>
                        </a>
                        <a href='/ar/projects/mosul' data-aos-duration='2000' className='home4'>
                            <img src={image3} />
                            <div className='overlay3'>
                                <h3>موصل</h3>
                            </div>
                        </a>
                        <a href='/ar/projects/kirkuk' data-aos-duration='2000' className='home5'>
                            <img src={image4} />
                            <div className='overlay3'>
                                <h3>کەرکوک</h3>
                            </div>
                        </a>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectPlace