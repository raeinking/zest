import React from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'

import Lists from '../../thinkgsthatnotchanged/Lists'


function Erbilar() {
    return (
        <div>
            <Helmet>
                <title>اكتشف أفضل المشاريع في أربيل - عقارات زێست</title>
                <meta name="description" content="استكشف مجموعتنا من المشاريع الاستثنائية في أربيل، بما في ذلك المشاريع التجارية والسكنية والبنية التحتية والأعمال العامة. فريقنا مكرس لتحسين منظر المدينة ووضع معايير جديدة للابتكار والتصميم. نحن في طليعة تشكيل مستقبل أربيل، من المعالم الشهيرة إلى المشاريع الحديثة. استعرض مجموعتنا واتصل بنا اليوم للمزيد من المعلومات." />
            </Helmet>
            <section>
                <div className='imageofheadererbil'><h1>مشاريع أربيل</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        <div class="parentserbil">
                            <a href='/ar/lalav-group' className="div1P">
                                <div className='projectlalav'></div>
                                <div className='overlays'>
                                    <p>لالاف گروپ</p>
                                </div>
                            </a>
                            <a href='/ar/North-Holland' className="div2P">
                                <div className='projectnorth'></div>
                                <div className='overlays'>
                                    <p>نورث هولند</p>
                                </div>
                            </a>
                            <a href='/ar/qaiwan-mirador' className="div3P">
                                <div className='projectqaywan'></div>
                                <div className='overlays'>
                                    <p>قيوان ميرادور</p>
                                </div>
                            </a>
                            <a href='/ar/Majidi-View' className="div4P">
                                <div className='projectmajidi'></div>
                                <div className='overlays'>
                                    <p>مجيدي فيو</p>
                                </div>
                            </a>
                        </div>
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
                    </div >
                </section >
            </section >
        </div >
    )
}

export default Erbilar