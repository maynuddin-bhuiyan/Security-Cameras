import React from 'react';
import AllSecurity from '../AllSecurity/AllSecurity';
import useData from '../useData/useData';
import './SecurityCameras.css';

const SecurityCameras = () => {
    const [camares] = useData([]);
    return (
        <div className='SecurityCameras'>
            <h1>THIS IA HD Security-Cameras</h1>


           <div className='camera'>
           {
                camares.map(cameras => <AllSecurity

                    key={cameras._id}
                    cameras={cameras}
                
                    />)
            }
           </div>
        </div>
    );
};

export default SecurityCameras;