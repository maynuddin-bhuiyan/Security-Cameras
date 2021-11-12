import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [services, setservices] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://guarded-beach-94669.herokuapp.com/cameras')
            .then(res => res.json())
            .then(data => setservices(data))
    },
        []);

    return [services, setservices]
}

export default useData;