import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import './searchhero.css'


function Searchhero() {

    const location = useLocation();
    const email = 'zest@zest-property.com'
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [body, setBody] = useState('')
    const [saleType, setSaleType] = useState('')


    const paths = window.location.pathname;
    const search = window.location.search

    const queryParams = new URLSearchParams(search)

    const resident = queryParams.get("project")
    const type = queryParams.get("type")
    const meter = queryParams.get("meter")
    const cityParams = queryParams.get("city")
    const priceParams = queryParams.get("Price")
    const propertyParams = queryParams.get("Property")
    const saleTypeParams = queryParams.get("saleType")

    return (
        <>
            {paths == '/' ?
                <form className="backsearch" action="/properties">
                    <ul className='fromsearch'>
                        <li className='projectName'>
                            <label>Project Name</label>
                            <div className='box-selector'>
                                <select defaultValue={resident} name="project" className="dropdownss" tabindex='-1' aria-hidden='true'>
                                    <option value="">Select Projects Name</option>
                                    <option value="North">North Holland</option>
                                    <option value="Sky View">Sky View</option>
                                    <option value="venus">Venus Towers</option>
                                    <option value="Qaiwan">Qaiwan Mirador</option>
                                    <option value="Nova">Nova Towers</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Property Type</label>
                            <div className='box-selector'>
                                <select defaultValue={propertyParams} name="Property" className="selectt dropdownss">
                                    <option value=''>Select Property Type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Project Name</label>
                            <div className='box-selector'>
                                <select defaultValue={cityParams} name="city" className="selectt dropdownss">
                                    <option value=''>Select City</option>
                                    <option value="Erbil">Erbil</option>
                                    <option value="Baghdad">Baghdad</option>
                                    <option value="Kirkuk">Kirkuk</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Project Name</label>
                            <div className='box-selector'>
                                <select defaultValue={type} name="type" className="selectt dropdownss">
                                    <option value="">Select Bedrooms</option>
                                    <option className='text' value="1 + 1">1 + 1</option>
                                    <option value="1 + 2">1 + 2</option>
                                    <option value="1 + 3">1 + 3</option>
                                    <option value="1 + 4">1 + 4</option>
                                    <option value="1 + 5">1 + 5</option>
                                    <option value="1 + 6">1 + 6</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <input type='submit' className='btnsearch' value='Search Properties ' />
                    </ul>
                </form >
                :
                <form className="backsearch" action="/ar/properties">
                    <ul className='fromsearch'>
                        <li className='projectName'>
                            <label>اسم المشروع</label>
                            <div className='box-selector'>
                                <select defaultValue={resident} name="project" className="" tabindex='-1' aria-hidden='true'>
                                    <option value="">حدد اسم المشروع</option>
                                    <option value="نورث هولند">نورث هولند</option>
                                    <option value=" سكاي فيو"> سكاي فيو</option>
                                    <option value="فينوس تاوەر">فينوس تاوەر</option>
                                    <option value="قیوان">قیوان میرادور</option>
                                    <option value="نوفا">نوفا تاورز</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>نوع الملكية</label>
                            <div className='box-selector'>
                                <select defaultValue={propertyParams} name="Property" className="selectt">
                                    <option value=''>نوع الملكية</option>
                                    <option value="شقة">شقة</option>
                                    <option value="منزل">منزل</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>الموقع</label>
                            <div className='box-selector'>
                                <select defaultValue={cityParams} name="city" className="selectt">
                                    <option value=''>حدد المحافظة</option>
                                    <option value="اربيل">اربيل</option>
                                    <option value="بغداد">بغداد</option>
                                    <option value="كركوك">كركوك</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>نظام الغرف</label>
                            <div className='box-selector'>
                                <select defaultValue={type} name="type" className="selectt">
                                    <option value="">عدد الغرف</option>
                                    <option className='text' value="1 + 1">1 + 1</option>
                                    <option value="1 + 2">1 + 2</option>
                                    <option value="1 + 3">1 + 3</option>
                                    <option value="1 + 4">1 + 4</option>
                                    <option value="1 + 5">1 + 5</option>
                                    <option value="1 + 6">1 + 6</option>
                                </select>
                            </div>
                        </li>
                        <div className='line'></div>
                        <input type='submit' className='btnsearch' value='خصائص البحث' />
                    </ul>
                </form >
            }
        </>
    )
}

export default Searchhero