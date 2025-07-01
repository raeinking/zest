import React from 'react'
import { Helmet } from 'react-helmet'
import ArLists from '../thinkgsthatnotchanged/ArLists'
import './projects.css'

function Projectssar() {
  return (
    <>
      <Helmet>
        <title>مشروع - عقارات زیست</title>
        <meta name="description" content="شركتنا نفذت بنجاح مشروعات في العراق ودبي، حيث برهنت على خبرتها وقدرتها على تقديم حلول عالية الجودة لعملائها في الشرق الأوسط. بفضل خبرتنا الواسعة ومعرفتنا بالسوق المحلي، نحن ملتزمون بتقديم المشروعات التي تتجاوز التوقعات وتلبي الاحتياجات الفريدة لعملائنا. يتمتع فريقنا المؤهل والمدرب بالكفاءة للتعامل مع مشروعات بأي حجم وتعقيد، مع ضمان التسليم في الوقت المحدد وبكفاءة عالية. ثق بنا لتحقيق نتائج استثنائية لمشروعاتك في العراق ودبي." />
      </Helmet>
      <section>
        <div className='imageofheaderbianca'><h1>مشروع</h1></div>

        <section className='mainmajidi'>
          <ArLists />

          <div className='content'>

            <div class="parentserbil">
              <a href='/ar/projects/baghdad' class="div1P">
                <div className='citybaghdad'></div>
                <div className='overlays'>
                  <p>بغداد</p>
                </div>
              </a>
              <a href='/ar/projects/erbil' class="div2P">
                <div className='cityerbil'></div>
                <div className='overlays'>
                  <p>أربيل</p>
                </div>
              </a>
              <a href='/ar/projects/dubai' class="div4P">
                <div className='citydubai'></div>
                <div className='overlays'>
                  <p>دبي</p>
                </div>
              </a>
              <a href='/ar/projects/kirkuk' class="div5P">
                <div className='citykirkuk'></div>
                <div className='overlays'>
                  <p>کەرکوک</p>
                </div>
              </a>
              <a href='/ar/projects/turkey' class="div5P">
                <div className='cityturkey'></div>
                <div className='overlays'>
                  <p>تورکیا</p>
                </div>
              </a>
              <a href='/ar/projects/mosul' class="div5P">
                <div className='citymosul'></div>
                <div className='overlays'>
                  <p>موصل</p>
                </div>
              </a>
            </div>


            <div className='dis ssss'>
              <h3>وصف</h3>
              <p className='pdis'>
                <p>شركتنا نفذت بنجاح مشاريع في العراق ودبي، حيث برهنت على خبرتها وقدرتها على تقديم حلول عالية الجودة لعملائها في الشرق الأوسط. بفضل خبرتنا الواسعة ومعرفتنا بالسوق المحلي، نحن ملتزمون </p>
                <br />
                <br />
                <p>بتقديم مشاريع تتجاوز التوقعات وتلبي الاحتياجات الفريدة لعملائنا. يتمتع فريقنا المؤهل والمدرب بالكفاءة للتعامل مع مشاريع بأي حجم وتعقيد، مع ضمان التسليم في الوقت المحدد وبكفاءة عالية.</p>
                <br />
                <br />
                <p>ثق بنا لتحقيق نتائج استثنائية لاحتياجات مشاريعك في العراق ودبي
                </p>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Projectssar
