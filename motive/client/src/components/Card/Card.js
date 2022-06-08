import React, { useState } from 'react';
import Venue from './Venue';
import Overlay from './Overlay';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const Card = ({ venueName, venueType, venueDistance, venueAddress }) => {
    const [open, setOpen ] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Venue venueName={venueName} venueType={venueType} venueDistance={venueDistance} venueAddress={venueAddress} open={openModal} />
            <AnimatePresence>
                {open && (
                    <Overlay close={closeModal}>
                        <Modal venueType={venueType} venueDistance={venueDistance} venueAddress={venueAddress}  close={closeModal} />
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    );
};

export default Card;