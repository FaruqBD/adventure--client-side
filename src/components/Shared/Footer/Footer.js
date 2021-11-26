import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3" id="about">
                        <h5 className="text-uppercase">About Advanture</h5>
                        <p>Advanture is one of the best tourist website for booking and enjoy unlimitted excitting places. You can book any spot 24/7 round the clock. You just place a booking order, we will contact you soon.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/"> Mobile : +880 1678 054 851</Link></li>
                            <li><Link to="/"> Email : info@adventure.com</Link></li>
                            <li><Link to="/"> Address : 20/21, Dhaka Cantonment, Dhaka-1206</Link></li>

                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/my-booking">My Booking</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                Copyright 2021 © <Link to="/">www.advanture.com</Link>
            </div>

        </footer>
    )
}
export default Footer