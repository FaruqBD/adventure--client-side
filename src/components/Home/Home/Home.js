import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Travellers from '../Travellers/Travellers';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services limit="6"></Services>
            <Travellers></Travellers>
            <Contact></Contact>
        </div>
    );
};

export default Home;