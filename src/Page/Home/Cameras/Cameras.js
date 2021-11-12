import useData from '../../useData/useData';
import Security from '../Security/Security';
import './Cameras.css';

const Cameras = () => {
    const [camares] = useData([]);

    
    return (
        <div>
            <p><small>What We Do</small></p>
            <h1>We Offer The Best Services</h1>

            <div className='Cameras'>
                
            {
                camares.map(cameras => <Security

                    key={cameras._id}
                    cameras={cameras}
                
                ></Security>)
            }
            </div>
        </div>
    );
};

export default Cameras;