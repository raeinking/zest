import React from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'

import Lists from '../../thinkgsthatnotchanged/Lists'


function Dubaiar() {
    return (
        <div>
            <Helmet>
                <title>استكشف أفضل المشاريع في دبي - عقارات زێست </title>
                <meta name="description" content="استكشف محفظتنا من المشاريع الاستثنائية في دبي، بما في ذلك مشاريع تجارية وسكنية والبنية التحتية والأعمال العامة. فريقنا مخصص لرفع مستوى أفق المدينة ووضع معايير جديدة للابتكار والتصميم. من النقاط البارزة على المستوى العالمي إلى المشاريع المتطورة، نحن في مقدمة تشكيل مستقبل دبي. استعرض محفظتنا واتصل بنا اليوم للمزيد من المعلومات." />
            </Helmet>
            <section>
                <div className='imageofheaderdubai'><h1>مشاريع دبي</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        <div class="parentserbil">
                            <a href='/ar/damac-bay2' class="div1P">
                                <div className='projectdamac2'></div>
                                <div className='overlays'>
                                    <p>داماك باي 2</p>
                                </div>
                            </a>
                            <a href='/ar/damac-lagoons' class="div2P">
                                <div className='projectdamac'></div>
                                <div className='overlays'>
                                    <p>داماك لاجونز</p>
                                </div>
                            </a>
                            <a href='/ar/azizi-riviera' class="div3P">
                                <div className='projectazizi'></div>
                                <div className='overlays'>
                                    <p>عزيزي ريفيرا</p>
                                </div>
                            </a>
                            <a href='/ar/bianca' class="div4P">
                                <div className='imagebianca'></div>
                                <div className='overlays'>
                                    <p>بیانکا</p>
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
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Dubaiar