import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import './modal.css';
import { loadLong, loadLat } from '../../actions';
import { Button, Modal } from 'react-bootstrap';
import useGeolocation from 'react-hook-geolocation';


export default function LocationModal() {
  
    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            let updateLong = selectedLongitude => dispatch(loadLong(selectedLongitude));
                updateLong(position.coords.longitude)
            let updateLat = selectedLatitude => dispatch(load(selectedLatitude));
                updateLat(position.coords.latitude)
        });

      }, []);


    return ;
}