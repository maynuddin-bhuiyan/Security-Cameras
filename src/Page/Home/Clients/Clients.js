import React from 'react';
import images1 from '../../../images/Clients/pt1.png';
import images2 from '../../../images/Clients/pt2.png';
import images3 from '../../../images/Clients/pt3.png';
import images4 from '../../../images/Clients/pt4.png';
import './Clients.css';

const Clients = () => {
    return (
        <div>
            <h1> Companies We Have as Clients</h1>

            <div className="imagesa">
                <img src={images1} alt="" />
                <img src={images2} alt="" />
                <img src={images3} alt="" />
                <img src={images4} alt="" />
            </div>
        </div>
    );
};

export default Clients;