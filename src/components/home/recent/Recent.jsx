import React,{useEffect} from "react";
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import { useLocation } from "react-router-dom";





const Recent = () => {

      const location = useLocation();
      const paths = window.location.pathname;
  return (
    <>
    {paths == '/' ?
      <section  className='recent padding '>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='' />
          <RecentCard />
          <a href="properties">
            <button>See More Property</button>
          </a>
        </div>
      </section>
     :
    <section className='recent padding'>
        <div className='container'>
          <Heading title='احدث العقارات' subtitle='' />
          <RecentCard />
          <a href="/ar/properties">
            <button className="ar">مشاهدة المزيد</button>
          </a>
        </div>
      </section>
      }
    </>
  )
}

export default Recent
