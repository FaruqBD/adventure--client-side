import React from 'react';

const Contact = () => {
    const handleForm = e =>{
        e.preventDefault();
    }
    return (
        <div className="contact-section p-4" id="contact">
            <div className="container my-3">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="section-head pb-40">
                        <h5>Let us know your desier</h5>
                        <h2>We'd love to hear from you</h2>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-6 col-sm-12 my-auto">
                        <p className="text-center mx-5 px-5">Whenever you have any question about our service. Just leave a
                            message. We will contact you soon.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">

                        <form onSubmit={handleForm} className="mx-5">
                            <h3 className="uppercase py-3 primary-color fw-bolder">Leave a message</h3>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputName"
                                    aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder=" email" />
                            </div>
                            <br />

                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                                    rows="3"></textarea>
                            </div>
                            <br />

                            <button type="submit" className="btn btn-lg btn-block btn-warning px-3">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;