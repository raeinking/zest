import React from 'react'
import { listAll } from '../data/Data'
import { arlistAll } from '../data/Data'
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './blog.css'
import '../home/recent/recent.css'


export default function Blogsprojects() {
  const location = useLocation();
  const paths = window.location.pathname;
  
  return (
    <>
    {paths == '/properties' ? 
        <div className='gridbox'>
        {listAll.map((val, index) => {
          const { cover, category, location, name, price, type, area } = val
          return (
            <a href={ '/' + val.url}>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <div className="dis">
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
                </div>
              </div>
              <div className='buttonpr'>
                <button className='btn2'>{price}</button>
                <div className="flezs"></div>
                <label htmlFor=''>{area}</label>
                <span>{type}</span>
              </div>
            </div>
            </a>
          )
        })}
        </div>
      :
      <div className='grid'>
        <div className='gridbox'>
        {arlistAll.map((val, index) => {
          const { cover, category, location, name, price, type, area } = val
          return (
            <a href={ '/ar/' + val.url}>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <div className="dis">
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
                </div>
              </div>
              <div className='buttonpr'>
                <button className='btn2'>{price}</button>
                <div className="flezs"></div>
                <label htmlFor=''>{area}</label>
                <span>{type}</span>
              </div>
            </div>
            </a>
          )
        })}
        </div>
      </div>
      }
    </>
  )
}
