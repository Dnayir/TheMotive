import React from 'react';
import './Venue.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Venue = ({ venueName, venueType, venueDistance, venueAddress}) => {

    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/review');
    };
    
    function open() {
        
    }

    return (
        <motion.div className='venue' 
                    onClick={open}
                    whileTap={{ scale: 1.1 }}>
            <div className='venue-content'>
               
                <div className='venue-details'>
                   
                    <div className='venue-row'>
                        <div className='venue-name'>{venueName}</div>
                    </div>
                    <br></br>
                    <div className='venue-row'>
                        <div className='venue-type'>{venueType}</div>
                    </div>
                    <br></br>
                    <div className='venue-row'>
                        <span className='venue-distance'>{venueDistance} km from current location</span>
                    </div>
                    <br></br>
                    <div className='venue-row'>
                        <span className='venue-address'>{venueAddress}</span>
                    </div>
                    <br></br>
                    <div className='venue-row'>
                        <button className='enterButton' onClick={handleClick}>Review</button>
                    </div>
                    
                    
                </div>
            </div>
        </motion.div>


    )
}

export default Venue;