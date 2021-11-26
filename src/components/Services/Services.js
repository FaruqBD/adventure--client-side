import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://stormy-garden-76838.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="container mt-5 mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 my-5">
                <div className="section-head pb-40">
                    <h5>Choose Your Package</h5>
                    <h2>Select Your best Package For Your Travel</h2>
                </div>
            </div>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;