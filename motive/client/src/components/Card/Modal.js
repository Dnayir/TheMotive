import React from 'react';
import './Modal.css';
import Feature from './Feature';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Modal = ({ venueType, venueDistance, venueAddress, close }) => {

    const modalVariants = {
       open: {
           opacity: 1,
           transition: { staggerChildren: 0.5, delayChildren: 0.2 },
       },
       closed: { opacity: 0 },
    };

    const imageVariants = {
        open: { opacity: 1, y: '0vh' },
        closed: { opacity: 0, y: '-10vh' },
    };

    const modalInfoVariants = {
        open: { opacity: 1, transition: { staggerChildren: 0.2 } },
        closed: { opacity: 0 },
    };

    const modalRowVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '10%' },
    };

    return (
        <motion.div 
            className='modal'
            variant={modalVariants}
            onClick={(e) => e.stopPropagation()}
        >
            {/* <motion.img 
                className='modal-image'
                alt='Venue Image'
                src={venueIcon}
                variants={imageVariants}
            ></motion.img> */}
            <motion.div className='modal-info' variants={modalInfoVariants}>
                <motion.div className='modal-row' variants={modalRowVariants}>
                    <span className='modal-type'>{venueType}</span>
                </motion.div>
                <motion.div className='modal-row' variants={modalRowVariants}>
                    <span className='modal-distance'>{venueDistance} km from current location</span>
                </motion.div>
                <motion.div className='modal-row' variants={modalRowVariants}>
                    <span className='modal-address'>{venueAddress}</span>
                </motion.div>
                {/* <motion.div className='modal-row' variants={modalRowVariants}>
                    <Feature iconName={'FaStreetView'} iconLabel={location} />
                </motion.div> */}
                {/* <motion.div 
                    className='modal-description-wrapper'
                    variants={modalRowVariants}
                >
                    <p className='modal-description'>{description}</p>
                </motion.div> */}

                <motion.button 
                    className='modal-close-wrapper'
                    whileTap={{ scale: 1.2 }}
                    onClick={close}
                >
                    <IoCloseCircleOutline className='modal-close-icon' />
                </motion.button>

            </motion.div>
        </motion.div>
    )
}

export default Modal;