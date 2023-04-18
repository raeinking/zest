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
        <form className="backsearch" action="/properties">
            <ul className='fromsearch'>
                <li className='projectName'>
                    <label>Project Name</label>
                    <div className='box-selector'>
                        <select defaultValue={resident} name="project" className="" tabindex='-1' aria-hidden='true'>
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
                        <select defaultValue={propertyParams} name="Property" className="selectt">
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
                        <select defaultValue={cityParams} name="city" className="selectt">
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
                        <select defaultValue={type} name="type" className="selectt">
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
                <input type='submit' className='btnsearch' value='Search Properties' />



                {/* <div className="sdsd">
                            <div className="buysell">
                                <input id="radCreateMode" type='radio' value='Buy' name="saleType" className='none' ></input>
                                <label onClick={() => setSaleType('buy')} for="radCreateMode" className={saleType == 'buy' ? 'selectType  selectet ' : 'selectType'}>Buy</label>

                                <input id="red" type='radio' value='Rent' name="saleType" className='none' ></input>
                                <label onClick={() => setSaleType('rent')} for="red" className={saleType == 'rent' ? 'selectType  selectet ' : 'selectType'}>Rent</label>
                            </div>
                            <button type='submit' value='Search' className="searchbtn">Search</button>
                        </div> */}


                {/* <div className="allselect">
                            <select defaultValue={resident} name="project" className="selectt search1 ">
                                <option value="">Projects Name</option>
                                <option value="North">North Holland</option>
                                <option value="Sky View">Sky View</option>
                                <option value="venus">Venus Towers</option>
                                <option value="Qaiwan">Qaiwan Mirador</option>
                                <option value="Nova">Nova Towers</option>
                            </select>
                            <select defaultValue={propertyParams} name="Property" className="selectt">
                                <option value=''>Property Type</option>
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                            </select>
                            <select defaultValue={cityParams} name="city" className="selectt">
                                <option value=''>City</option>
                                <option value="Erbil">Erbil</option>
                                <option value="Baghdad">Baghdad</option>
                                <option value="Kirkuk">Kirkuk</option>
                            </select>
                            <select defaultValue={type} name="type" className="selectt">
                                <option value="">Rooms</option>
                                <option value="1 + 1">1 + 1</option>
                                <option value="1 + 2">1 + 2</option>
                                <option value="1 + 3">1 + 3</option>
                                <option value="1 + 4">1 + 4</option>
                                <option value="1 + 5">1 + 5</option>
                                <option value="1 + 6">1 + 6</option>
                            </select>
                            <select defaultValue={meter} name="meter" className="selectt">
                            <option value=''>Meter</option>
                            <option value="67">67</option>
                            <option value="72">72</option>
                            <option value="76">76</option>
                            <option value="78">78</option>
                            <option value="80">80</option>
                            <option value="81">81</option>
                            <option value="90">90</option>
                            <option value="105">105</option>
                            <option value="115">115</option>
                            <option value="120">120</option>
                            <option value="140">140</option>
                            <option value="201">201</option>
                            <option value="210">210</option>
                        </select>
                        </div> */}
            </ul>
        </form >
    )
}

export default Searchhero