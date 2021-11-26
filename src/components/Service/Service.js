import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3 shadow bg-white rounded">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="booking-price">
                <h5 className="px-3">${price}/Per Person</h5>
                <h5 className="px-3">5 Days/6 Night</h5>
            </div>
            <h3 className="px-3 pt-3">{name}</h3>
            <p className="px-3">{description}</p>
            <Link className="px-3" to={`/service/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;