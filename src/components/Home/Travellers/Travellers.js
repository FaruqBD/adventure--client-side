import React from 'react';
import Traveller from '../Traveller/Traveller';
import "./Travellers.css";


const travellers = [
    {
        id: '1',
        img: "https://i.ibb.co/W0GXTvp/traveller3.png",
        name: 'Sussie Wolff',
    },
    {
        id: '2',
        img: 'https://i.ibb.co/9h1nxr7/traveller2.png',
        name: 'Ashley Willson',
    },
    {
        id: '3',
        img: 'https://i.ibb.co/7WYBWN0/traveller1.png',
        name: 'Gabriela Beckett',
    },
    {
        id: '4',
        img: 'https://i.ibb.co/W0GXTvp/traveller3.png',
        name: 'George Button',
    },
]
const Travellers = () => {
    return (
        <div id="experts" className="container">
            <div Name="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                    <h5>Our Traveller Say</h5>
                    <h2>What Our Traveller Say About Us</h2>
                </div>
            </div>
            <div className="row mb-5">
                {
                    travellers.map(traveller => <Traveller
                        key={traveller.id}
                        traveller={traveller}
                    >

                    </Traveller>)
                }
            </div>
        </div>
    );
};

export default Travellers;