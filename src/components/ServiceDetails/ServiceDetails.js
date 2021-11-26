import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://stormy-garden-76838.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const handleBooking = data => {
        data.uid = user.uid;
        data.price = service.price;
        data.serviceName = service.name;
        data.status = "Pending";
        fetch('https://stormy-garden-76838.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully');
                    reset();
                }
            })
    };
    return (
        <div id="serviceDetails">
            <h2 className="text-center mt-5">Tour Package Details</h2>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 my-3">
                        <div className="service pb-3 shadow bg-white rounded">
                            <div className="image-container">
                                <img src={service.img} alt="" />
                            </div>
                            <div className="booking-price">
                                <h5 className="px-3">${service.price}/Per Person</h5>
                                <h5 className="px-3">5 Days/6 Night</h5>
                            </div>
                            <h3 className="px-3 pt-3">{service.name}</h3>
                            <p className="px-3">{service.description}</p>
                        </div>
                    </div >
                    <div className="col-lg-4 my-3 py-5 shadow bg-white rounded">
                        <h2 className="text-center my-3">Book This Package</h2>
                        <form onSubmit={handleSubmit(handleBooking)}>
                            <p>Full Name :</p>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder={user.displayName} />
                            <p>Email :</p>
                            <input {...register("email")} placeholder={user.email} />
                            <p>Phone :</p>
                            <input {...register("phone", { required: true })} placeholder="Phone" />
                            <p>Travel Date :</p>
                            <input {...register("date")} placeholder="dd/mm/yyyy" />
                            <span className="text-danger text-left">{errors.phone?.type === 'required' && "Phone is required"}</span>
                            <p>Travel By :</p>
                            <select {...register("ticketType")}>
                                <option value="By Air">--Select--</option>
                                <option value="By Bus">Travel By Bus</option>
                                <option value="By Air">Travel By Air</option>
                            </select>
                            <p>Adult :</p>
                            <select {...register("adult")}>
                                <option value="0">--Select--</option>
                                <option value="1">1 (One)</option>
                                <option value="2">2 (Two)</option>
                                <option value="3">3 (Three)</option>
                            </select>
                            <p>Children :</p>
                            <select {...register("children")}>
                                <option value="0">--Select--</option>
                                <option value="1">1 (One)</option>
                                <option value="2">2 (Two)</option>
                                <option value="3">3 (Three)</option>
                            </select>
                            <span className="text-danger text-left">{errors.ticketType?.type === 'required' && "Travel Type is required"}</span>

                            <input className="bg-warning btn-lg text-white" type="submit" value="Book Now" />
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default ServiceDetails;