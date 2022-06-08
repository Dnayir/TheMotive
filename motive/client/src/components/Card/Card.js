import React, { useState } from 'react';
import Venue from './Venue';
import Overlay from './Overlay';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const Card = ({ data }) => {
    const [open, setOpen ] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Venue data={data} open={openModal} />
            <AnimatePresence>
                {open && (
                    <Overlay close={closeModal}>
                        <Modal data={data} close={closeModal} />
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    );
};

export default Card;