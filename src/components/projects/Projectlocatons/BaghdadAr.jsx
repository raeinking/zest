import React from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'

import Lists from '../../thinkgsthatnotchanged/Lists'


function BaghdadAr() {
    return (
        <div>
            <Helmet>
                <title>استكشف أفضل المشاريع في بغداد - تحويل منظر المدينة - عقارات زێست</title>
                <meta name="description" content="اكتشف أحدث وأفضل المشاريع في بغداد، بدءاً من المشاريع التجارية والسكنية إلى البنية التحتية والأعمال العامة. فريقنا ملتزم بتحويل منظر المدينة، وتعزيز جودة الحياة للمقيمين والزائرين. استعرض محفظتنا من المشاريع المبتكرة وتعرف على المزيد حول كيفية تشكيل مستقبل بغداد. اتصل بنا اليوم للبدء." />
            </Helmet>
            <section>
                <div className='imageofheaderbaghdad'><h1>مشاريع بغداد</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        <div class="parentsbaghdad">
                            <a href='/ar/alwedd' class="div1P">
                                <div className='projectwedd'></div>
                                <div className='overlays'>
                                    <p>الود</p>
                                </div>
                            </a>
                            <a href='/ar/khlood' class="div2P">
                                <div className='projectkhlood'></div>
                                <div className='overlays'>
                                    <p>الخلود</p>
                                </div>
                            </a>
                            <a href='/ar/almansour-city' class="div3P">
                                <div className='projectmansour'></div>
                                <div className='overlays'>
                                    <p>مدينة المنصور</p>
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

export default BaghdadAr