import React from 'react';
import Feature from './Feature';
import './Venue.css';
import { motion } from 'framer-motion';

const Venue = ({ data, open }) => {

    // ------> DATA FETCHING FROM THE API
    const { categories, geocodes, imageUrl, location, } = data;

    return (
        <motion.div className='venue' 
                    onClick={open}
                    whileTap={{ scale: 1.1 }}>
            <div className='venue-content'>
                <div className='venue-image-container'>
                    <img 
                        className='venue-image'
                        alt='Venue Image'
                        src={imageUrl}
                    />
                </div>
                <div className='venue-details'>
                    <div className='venue-type'>{categories}</div>
                    <div className='venue-row'>
                        <span className='venue-distance'>{geocodes}</span>
                    </div>
                    {/* <div className='venue-row'>
                        <span className='venue-address'>{location}</span>
                    </div> */}
                    <div className='venue-row'>
                        <Feature iconName={'FaStreet'} iconLabel={location} />
                    </div>
                </div>b 
            </div>
        </motion.div>


    )
}

export default Venue;