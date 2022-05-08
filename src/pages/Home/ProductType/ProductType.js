import { faBattery3, faFan, faHeadphones, faHouseFloodWaterCircleArrowRight, faLaptop, faLaptopHouse, faLightbulb, faMobile, faPersonWalkingWithCane, faPhone, faRadio, faStopwatch, faSwatchbook, faTelevision, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductType = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center my-3 text-bold'>Types of Products In Our Collection </h3>
            <div className='row d-flex justify-content-center'>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faMobile}></FontAwesomeIcon>
                    <h6>Android Phone</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faLaptop}></FontAwesomeIcon>
                    <h6>Laptop</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faTelevision}></FontAwesomeIcon>
                    <h6>Television</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faHeadphones}></FontAwesomeIcon>
                    <h6>Headphone</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faLightbulb}></FontAwesomeIcon>
                    <h6>Electric Light</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faRadio}></FontAwesomeIcon>
                    <h6>Sound Box</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faPhone}></FontAwesomeIcon>
                    <h6>Feature Phone</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faFan}></FontAwesomeIcon>
                    <h6>Electric Fan</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faBattery3}></FontAwesomeIcon>
                    <h6>Mobile Phone Bettery</h6>
                </button>
                <button className='btn py-2 btn btn-white col-xl-2 m-1 col-lg-2 col-md-3 col-sm-4 col-4   shadow-lg '>
                    <FontAwesomeIcon className='fs-2 ' icon={faWalkieTalkie}></FontAwesomeIcon>
                    <h6>WakieTalkie</h6>
                </button>




            </div>

        </div>
    );
};

export default ProductType;