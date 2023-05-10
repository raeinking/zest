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


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setisOpencity(false);
        setisOpenroom(false);
        setisOpenapartment(false);

    };

    const handleOptionSelect = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const [isOpenapartment, setisOpenapartment] = useState(false);
    const [isOpenapartmentoption, setisOpenapartmentoption] = useState('');

    const dropapartment = () => {
        setisOpenapartment(!isOpenapartment);
        setIsOpen(false); // Close the other dropdowns
        setisOpencity(false);
        setisOpenroom(false);
    };

    const handltypepropertyselect = (value) => {
        setisOpenapartmentoption(value);
        setisOpenapartment(false);
    };

    const [isOpencity, setisOpencity] = useState(false);
    const [isOpencityoption, setisOpencityoption] = useState('');

    const dropcity = () => {
        setisOpencity(!isOpencity);
        setIsOpen(false); // Close the other dropdowns
        setisOpenapartment(false);
        setisOpenroom(false);
    };

    const handlcityselect = (value) => {
        setisOpencityoption(value);
        setisOpencity(false);
    };

    const [isOpenroom, setisOpenroom] = useState(false);
    const [isOpenroomoption, setisOpenroomoption] = useState('');

    const droproom = () => {
        setisOpenroom(!isOpenroom);
        setIsOpen(false); // Close the other dropdowns
        setisOpenapartment(false);
        setisOpencity(false);
    };

    const handlroomselect = (value) => {
        setisOpenroomoption(value);
        setisOpenroom(false);
    };



    const [arisOpen, setarIsOpen] = useState(false);
    const [arselectedOption, setarSelectedOption] = useState('');

    const artoggleDropdown = () => {
        setarIsOpen(!arisOpen);
        setarisOpencity(false);
        setarisOpenroom(false);
        setarisOpenapartment(false);

    };

    const arhandleOptionSelect = (value) => {
        setarSelectedOption(value);
        setarIsOpen(false);
    };

    const [arisOpenapartment, setarisOpenapartment] = useState(false);
    const [arisOpenapartmentoption, setarisOpenapartmentoption] = useState('');

    const ardropapartment = () => {
        setarisOpenapartment(!arisOpenapartment);
        setarIsOpen(false); // Close the other dropdowns
        setarisOpencity(false);
        setarisOpenroom(false);
    };

    const arhandltypepropertyselect = (value) => {
        setarisOpenapartmentoption(value);
        setarisOpenapartment(false);
    };

    const [arisOpencity, setarisOpencity] = useState(false);
    const [arisOpencityoption, setarisOpencityoption] = useState('');

    const ardropcity = () => {
        setarisOpencity(!arisOpencity);
        setarIsOpen(false); // Close the other dropdowns
        setarisOpenapartment(false);
        setarisOpenroom(false);
    };

    const arhandlcityselect = (value) => {
        setarisOpencityoption(value);
        setarisOpencity(false);
    };

    const [arisOpenroom, setarisOpenroom] = useState(false);
    const [arisOpenroomoption, setarisOpenroomoption] = useState('');

    const ardroproom = () => {
        setarisOpenroom(!arisOpenroom);
        setarIsOpen(false); // Close the other dropdowns
        setarisOpenapartment(false);
        setarisOpencity(false);
    };

    const arhandlroomselect = (value) => {
        setarisOpenroomoption(value);
        setarisOpenroom(false);
    };










    const options = [
        { value: '', label: 'Select Projects Name' },
        { value: 'North', label: 'North Holland' },
        { value: 'Sky View', label: 'Sky View' },
        { value: 'venus', label: 'Venus Towers' },
        { value: 'Qaiwan', label: 'Qaiwan Mirador' },
        { value: 'Nova', label: 'Nova Towers' }
    ];
    const typeapartment = [
        { value: '', label: 'Select Property Type' },
        { value: 'Apartment', label: 'Apartment' },
        { value: 'House', label: 'House' },
    ];
    const citys = [
        { value: '', label: 'Select City' },
        { value: 'Erbil', label: 'Erbil' },
        { value: 'Baghdad', label: 'Baghdad' },
        { value: 'Kirkuk', label: 'Kirkuk' },
    ];
    const rooms = [
        { value: '', label: 'Select Bedrooms' },
        { value: '1 + 1', label: '1 + 1' },
        { value: '2 + 1', label: '1 + 2' },
        { value: '3 + 1', label: '1 + 3' },
        { value: '4 + 1', label: '1 + 4' },
        { value: '5 + 1', label: '1 + 5' },
        { value: 'Villa', label: 'Villa' },
    ];


    const aroptions = [
        { value: '', label: 'حدد اسم المشروع' },
        { value: 'نورث هولند', label: 'نورث هولند' },
        { value: 'سكاي فيو', label: 'سكاي فيو' },
        { value: 'فينوس تاوەر', label: 'فينوس تاوەر' },
        { value: 'قیوان', label: 'قیوان میرادور' },
        { value: 'نوفا', label: 'نوفا تاورز' }
    ];
    const artypeapartment = [
        { value: '', label: 'نوع الملكية' },
        { value: 'شقة', label: 'شقة' },
        { value: 'منزل', label: 'منزل' },
    ];
    const arcitys = [
        { value: '', label: 'حدد المحافظة' },
        { value: 'اربيل', label: 'اربيل' },
        { value: 'بغداد', label: 'بغداد' },
        { value: 'كركوك', label: 'كركوك' },
    ];
    const arrooms = [
        { value: '', label: 'عدد الغرف' },
        { value: '1 + 1', label: '1 + 1' },
        { value: '2 + 1', label: '1 + 2' },
        { value: '3 + 1', label: '1 + 3' },
        { value: '4 + 1', label: '1 + 4' },
        { value: '5 + 1', label: '1 + 5' },
        { value: 'منزل', label: 'منزل' },
    ];




    const handleSearch = () => {
        const url = new URL('https://zest-property.com/properties');

        // Set the selected values as parameters
        url.searchParams.set('project', selectedOption);
        url.searchParams.set('Property', isOpenapartmentoption);
        url.searchParams.set('city', isOpencityoption);
        url.searchParams.set('type', isOpenroomoption);

        window.location.href = url.toString();
    };
    const arhandleSearch = () => {
        const url = new URL('https://zest-property.com/ar/properties');

        // Set the selected values as parameters
        url.searchParams.set('project', arselectedOption);
        url.searchParams.set('Property', arisOpenapartmentoption);
        url.searchParams.set('city', arisOpencityoption);
        url.searchParams.set('type', arisOpenroomoption);

        window.location.href = url.toString();
    };
    return (
        <>
            {paths == '/' ?
                <div className="backsearch" action="/properties">
                    <ul className='fromsearch'>
                        <li className='projectName'>
                            <label>Project Name</label>
                            <div className="dropdownss" tabIndex="-1">
                                <div className={`selected-option ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                                    {selectedOption || 'Select Projects'}
                                </div>
                                <div className={`options ${isOpen ? 'open' : ''}`}>
                                    {options.map((option) => (
                                        <div
                                            key={option.value}
                                            className="option"
                                            onClick={() => handleOptionSelect(option.value)}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Property Type</label>

                            <div className="dropdownss" tabIndex="-1">
                                <div className={`selected-option ${isOpenapartment ? 'open' : ''}`} onClick={dropapartment}>
                                    {isOpenapartmentoption || 'Select Type'}
                                </div>
                                <div className={`options ${isOpenapartment ? 'open' : ''}`}>
                                    {typeapartment.map((option) => (
                                        <div
                                            key={option.value}
                                            className="option"
                                            onClick={() => handltypepropertyselect(option.value)}>
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Project city</label>
                            <div className="dropdownss" tabIndex="-1">
                                <div className={`selected-option ${isOpencity ? 'open' : ''}`} onClick={dropcity}>
                                    {isOpencityoption || 'Select city'}
                                </div>
                                <div className={`options ${isOpencity ? 'open' : ''}`}>
                                    {citys.map((option) => (
                                        <div
                                            key={option.value}
                                            className="option"
                                            onClick={() => handlcityselect(option.value)}>
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>Project bedrooms</label>
                            <div className="dropdownss" tabIndex="-1">
                                <div className={`selected-option ${isOpenroom ? 'open' : ''}`} onClick={droproom}>
                                    {isOpenroomoption || 'Select bedrooms'}
                                </div>
                                <div className={`options ${isOpenroom ? 'open' : ''}`}>
                                    {rooms.map((option) => (
                                        <div
                                            key={option.value}
                                            className="option"
                                            onClick={() => handlroomselect(option.value)}>
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <div className='line'></div>
                        <button className='btnsearch' value='Search Properties ' onClick={handleSearch}>Search Properties</button>
                    </ul>
                </div >
                :
                <div className="backsearch" action="/ar/properties">
                    <ul className='fromsearch'>
                        <li className='projectName'>
                            <label>اسم المشروع</label>
                            <div className='box-selector'>
                                <div className="dropdownss" tabIndex="-1">
                                    <div className={`selected-option ${arisOpen ? 'open' : ''}`} onClick={artoggleDropdown}>
                                        {arselectedOption || 'حدد اسم المشروع'}
                                    </div>
                                    <div className={`options ${arisOpen ? 'open' : ''}`}>
                                        {aroptions.map((option) => (
                                            <div
                                                key={option.value}
                                                className="option"
                                                onClick={() => arhandleOptionSelect(option.value)}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>نوع الملكية</label>
                            <div className='box-selector'>
                                <div className="dropdownss" tabIndex="-1">
                                    <div className={`selected-option ${arisOpenapartment ? 'open' : ''}`} onClick={ardropapartment}>
                                        {arisOpenapartmentoption || 'نوع الملكية'}
                                    </div>
                                    <div className={`options ${arisOpenapartment ? 'open' : ''}`}>
                                        {artypeapartment.map((option) => (
                                            <div
                                                key={option.value}
                                                className="option"
                                                onClick={() => arhandltypepropertyselect(option.value)}>
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>الموقع</label>
                            <div className='box-selector'>
                                <div className="dropdownss" tabIndex="-1">
                                    <div className={`selected-option ${arisOpencity ? 'open' : ''}`} onClick={ardropcity}>
                                        {arisOpencityoption || 'حدد المحافظة'}
                                    </div>
                                    <div className={`options ${arisOpencity ? 'open' : ''}`}>
                                        {arcitys.map((option) => (
                                            <div
                                                key={option.value}
                                                className="option"
                                                onClick={() => arhandlcityselect(option.value)}>
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </li>
                        <div className='line'></div>
                        <li className='projectName'>
                            <label>نظام الغرف</label>
                            <div className='box-selector'>
                                <div className="dropdownss" tabIndex="-1">
                                    <div className={`selected-option ${arisOpenroom ? 'open' : ''}`} onClick={ardroproom}>
                                        {arisOpenroomoption || 'عدد الغرف'}
                                    </div>
                                    <div className={`options ${arisOpenroom ? 'open' : ''}`}>
                                        {arrooms.map((option) => (
                                            <div
                                                key={option.value}
                                                className="option"
                                                onClick={() => arhandlroomselect(option.value)}>
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div className='line'></div>
                        <button className='btnsearch' onClick={arhandleSearch}>Search Properties</button>
                    </ul>
                </div >
            }
        </>
    )
}

export default Searchhero