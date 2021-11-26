import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://stormy-garden-76838.herokuapp.com/services', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service mb-5">
            <h2 className="fw-bolder text-uppercase text-center mt-5 mb-4">Add New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
                <span className="text-danger text-left">{errors.name?.type === 'required' && "Service Name is required"}</span>

                <input {...register("description", { required: true })} placeholder="Description" />
                <span className="text-danger text-left">{errors.description?.type === 'required' && "Description is required"}</span>

                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <span className="text-danger text-left">{errors.price?.type === 'required' && "Price is required"}</span>

                <input {...register("img", { required: true })} placeholder="Image Link" />
                <span className="text-danger text-left">{errors.img?.type === 'required' && "Image link is required"}</span>

                <input className="bg-warning btn-lg text-white" type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;