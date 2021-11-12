import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Clients from '../Clients/Clients';
import Gallery from '../Gallery/Gallery';
import ReviewItam from '../ReviewItam/ReviewItam';


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <Cameras></Cameras>
            <Gallery></Gallery>
            <Clients></Clients>
            <ReviewItam></ReviewItam>
            <Footer></Footer>
        </div>
    );
};

export default Home;