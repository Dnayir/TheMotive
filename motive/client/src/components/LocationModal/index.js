import React from 'react';
import './modal.css';
import { Button, Modal } from 'react-bootstrap';

export default function LocationModal() {

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       console.log(position.coords);
    //     });
    //   }, []);

    return (

        <Modal size='lg'
                centered
                backdrop='static'>

                <h3>Please update your location to continue using the.MOTIVE</h3>

                <div className='d-grid gap-2'>
                    <Button
                            // onClick={handleLocation}
                            className='location-button'
                            role='button'
                            size='md'>

                        UPDATE
                    </Button>
                </div>
        
        </Modal>
    )
}