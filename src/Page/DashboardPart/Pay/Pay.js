import React from 'react';
import './Pay.css';
import payimag from '../../../images/job.png'



const Pay = () => {
    return (
        <div className='Pay'>
            <h1>Payment Method</h1>

            <img src={payimag} alt="" />
        </div>
    );
};

export default Pay;