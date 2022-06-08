import React, { useState, useEffect } from 'react';
import './modal.css';
import { setLocation } from '../../actions';
import { Button, Modal } from 'react-bootstrap';
import useGeolocation from 'react-hook-geolocation';
import { useSelector, useDispatch } from 'react-redux';

export default function LocationModal() {

    const location = useSelector(state => state.location);
    
    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords);
        });
      }, []);


    function handleLocation(e) {
        dispatch(setLocation('France'));
    }

    return (

        <Modal size='lg'
                centered
                show={location}
                backdrop='static'>

                <h3>Please update your location to continue using the.MOTIVE</h3>

                <div className='d-grid gap-2'>
                    <Button
                            onClick={handleLocation}
                            className='location-button'
                            role='button'
                            size='md'>

                        UPDATE
                    </Button>
                </div>
        
        </Modal>
    )
}