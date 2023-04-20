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
                        <a href='/Bianca' className='home1'>
                            <img src={image} />
                            <div className='overlay'>
                                <h3>Dubai</h3>
                            </div>
                        </a>
                        <a href='/Majidi-view' data-aos-duration='1500' className='home2'>
                            <img src={image1} />
                            <div className='overlay1'>
                                <h3>Erbil</h3>
                            </div>
                        </a>
                        <a href='/alwedd' data-aos-duration='1500' className='home3'>
                            <img src={image2} />
                            <div className='overlay2'>
                                <h3>Baghdad</h3>
                            </div>
                        </a>
                        <a href='/khlood' data-aos-duration='2000' className='home4'>
                            <img src={image3} />
                            <div className='overlay3'>
                                <h3>Mosul</h3>
                            </div>
                        </a>
                        <a href='/khlood' data-aos-duration='2000' className='home5'>
                            <img src={image4} />
                            <div className='overlay3'>
                                <h3>Kirkuk</h3>
                            </div>
                        </a>
                    </div>
                </div>
                :
                <div className='grid'>
                    <div data-aos='zoom-in-up' data-aos-duration='1000' className='gridboxs'>
                        <a href='/Bianca' className='home1'>
                            <img src={image} />
                            <div className='overlay'>
                                <h3>بيانكا</h3>
                                <p>الإمارات دبي</p>
                            </div>
                        </a>
                        <a href='/Majidi-view' data-aos='zoom-in-up' data-aos-duration='1500' className='home2'>
                            <img src={image1} />
                            <div className='overlay1'>
                                <h3>ماجدي</h3>
                                <p>اربيل</p>
                            </div>
                        </a>
                        <a href='/alwedd' data-aos='zoom-in-up' data-aos-duration='1500' className='home3'>
                            <img src={image2} />
                            <div className='overlay2'>
                                <h3>الوید</h3>
                                <p>بغداد</p>
                            </div>
                        </a>
                        <a href='/khlood' data-aos='zoom-in-up' data-aos-duration='2000' className='home4'>
                            <img src={image3} />
                            <div className='overlay3'>
                                <h3>الخلود</h3>
                                <p>بغداد</p>
                            </div>
                        </a>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectPlace