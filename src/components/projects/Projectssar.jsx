import React from 'react'
import { Helmet } from 'react-helmet'
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
          <div className='navleft'>
            <div>
              <h6>تطوير العقارات</h6>
              <div className='navp'>
                <a href='/ar/Majidi-View'>ماجدي فیو</a>
                <a href='/ar/bianca'>بيانكا</a>
                <a href='/ar/alwedd'>الود </a>
                <a href='/ar/khlood'>الخلود </a>
              </div>
            </div>
          </div>

          <div className='content'>         
              <div class="parentsP">
                <a href='/ar/alwedd' class="div1P">
                <div className='imagealwed'></div>
                  <div className='overlays'>
                    <h3>الود</h3>
                    <p>بغداد</p>
                  </div>
                </a>
                <a href='/ar/majidi-view' class="div2P">
                <div className='imagemajidi'></div>
                  <div className='overlays'>
                  <h3>ماجدي فیو</h3>
                  <p>اربيل</p>
                  </div>
                </a>
                <a href='/ar/khlood' class="div3P">
                  <div className='imageklood'></div>
                  <div className='overlays'>
                  <h3>الخلود</h3>
                  <p>بغداد</p>
                  </div>
                </a>
                <a href='/ar/bianca' class="div4P">
                  <div className='imagebianca'></div>
                  <div className='overlays'>
                  <h3>بيانكا</h3>
                  <p>الإمارات دبي</p>
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
