import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';



const SecurityCameraItam = () => {
    const { id } = useParams();
    const [cameraItam, setCameraItam] = useState([]);
    const [singleItem, setSingleItem] = useState([]);
  

    useEffect(() => {
        fetch(`https://guarded-beach-94669.herokuapp.com/cameras`)
            .then(res => res.json())
            .then(data => setCameraItam(data));
    }, [])
    useEffect(() => {
        if (cameraItam.length > 0) {
            const matchItam = cameraItam.find(cameraItam => cameraItam._id == id);
            setSingleItem(matchItam);
        }
    }, [cameraItam]);







    return (
        <div>
            <h1>Hi .....{singleItem.name}</h1>
            <img src={singleItem.img} alt="" />

            <Link to='/placeorder'>
            <Button>Place an Order</Button>
            </Link>
           

            


        </div>
    );
};

export default SecurityCameraItam;