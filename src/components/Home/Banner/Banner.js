import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YB1gszG/banner1.png"
                        alt="Our Services"
                    />
                    <Carousel.Caption>
                        <h1 className="pb-md-5">Amazing Tour in Indonesia</h1>
                        <Link className="px-3" to={`/service/617d12d10ca5cd50b0f0e4fb`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Book Now</button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6FST9YZ/banner2.png"
                        alt="Our Services"
                    />

                    <Carousel.Caption>
                        <h1 className="pb-md-5">Amazing Tour In Madagascar</h1>
                        <Link className="px-3" to={`/service/617d12d10ca5cd50b0f0e4fb`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Book Now</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/DW2Vz8g/banner3.png"
                        alt="Our Services"
                    />

                    <Carousel.Caption>
                        <h1 className="pb-md-5">Amazing Tour In Hampshire</h1>
                        <Link className="px-3" to={`/service/617d12d10ca5cd50b0f0e4fb`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Book Now</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;