import React from 'react';
import image1 from '../../../images/Gallery/security-solutions-5.jpg';
import image2 from '../../../images/Gallery/security-solutions-5 (1).jpg';
import image3 from '../../../images/Gallery/security-solutions-5.jpg';
import image4 from '../../../images/Gallery/img1.jpg';
import image5 from '../../../images/Gallery/img18.jpg';
import image6 from '../../../images/Gallery/security-solutions-5.jpg';
import './Gallery.css';




const Gallery = () => {
    return (
        <div>
        <h1>Gallery</h1>


        <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        </div>
      
      </div>
    );
};

export default Gallery;