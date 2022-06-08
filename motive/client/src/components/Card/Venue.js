import React from 'react';
import Feature from './Feature';
import './Venue.css';
import { motion } from 'framer-motion';

const Venue = ({ venueName, venueType, venueDistance, venueAddress}) => {

    function open() {
        console.log('yes')
    }

    return (
        <motion.div className='venue' 
                    onClick={open}
                    whileTap={{ scale: 1.1 }}>
            <div className='venue-content'>
                {/* <div className='venue-image-container'>
                    <img 
                        className='venue-image'
                        alt='Venue Image'
                        src={venueIcon}
                    />
                </div> */}
                <div className='venue-details'>
                    <div className='venue-type'>{venueName}</div>
                    <div className='venue-type'>{venueType}</div>
                    <div className='venue-row'>
                        <span className='venue-distance'>{venueDistance} km from current location</span>
                    </div>
                    <div className='venue-row'>
                        <span className='venue-address'>{venueAddress}</span>
                    </div>
                    {/* <div className='venue-row'>
                        <Feature iconName={'FaStreet'} iconLabel={location} />
                    </div> */}
                </div>
            </div>
        </motion.div>


    )
}

export default Venue;