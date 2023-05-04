import React from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'

import Lists from '../../thinkgsthatnotchanged/Lists'


function Kirkukar() {
    return (
        <div>
            <Helmet>
                <title>استكشف أفضل مشاريع كركوك - عقارات زێست</title>
                <meta name="description" content="اكتشف محفظتنا من المشاريع المبتكرة في كركوك، بما في ذلك التطويرات التجارية والسكنية والبنية التحتية والأعمال العامة. فريقنا ملتزم بتحويل المناظر الطبيعية للمدينة، وتحسين جودة الحياة لسكانها وزوارها. من المعالم البارزة إلى التطويرات الحديثة، نحن في طليعة صناعة مستقبل كركوك. تصفح محفظتنا واتصل بنا اليوم للمزيد من المعلومات. " />
            </Helmet>
            <section>
                <div className='imageofheaderkirkuk'><h1>Kirkuk Projects</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        <div class="parentskirkuk">
                            <a href='/ar/sky-land-kirkuk' class="div1P">
                                <div className='projectskyland'></div>
                                <div className='overlays'>
                                    <p>سکاي لاند</p>
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

export default Kirkukar