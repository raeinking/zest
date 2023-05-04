import React from 'react'
import ArLists from '../../thinkgsthatnotchanged/ArLists'
import { Helmet } from 'react-helmet'

import Lists from '../../thinkgsthatnotchanged/Lists'


function Mosular() {
    return (
        <div>
            <Helmet>
                <title>اكتشف أفضل المشاريع في الموصل - عقارات زێست</title>
                <meta name="description" content="استكشف محفظتنا من المشاريع الاستثنائية في الموصل، بما في ذلك المشاريع التجارية والسكنية والبنية التحتية والأعمال العامة. فريقنا مكرس لبناء مستقبل أفضل للمدينة وسكانها، من خلال تصميمات مبتكرة وبناء عالي الجودة. من المعالم البارزة إلى البنية التحتية الأساسية، نحن ملتزمون بتشكيل مستقبل الموصل. استعرض محفظتنا وتواصل معنا اليوم لمعرفة المزيد." />
            </Helmet>
            <section>
                <div className='imageofheadermosul'><h1>مشاريع الموصل</h1></div>

                <section className='mainmajidi'>
                    <ArLists />

                    <div className='content'>
                        {/* <div class="parentskirkuk">
                            <a href='/almansour' class="div1P">
                                <div className='projectalmansours'></div>
                                <div className='overlays'>
                                    <p>Al Mansour city</p>
                                </div>
                            </a>
                        </div> */}

                    </div>
                    <h2>قريبا</h2>
                </section>
            </section>
        </div>
    )
}

export default Mosular