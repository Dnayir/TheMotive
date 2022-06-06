import React from 'react';
import './venueinfo.css';
import { NavBar, VenueInfoCard } from '../../components';

const VenueInfoPage = () => {
    return (

        <div className='main-container'>

            <NavBar />
            <div className='card-container'>

                <VenueInfoCard />

                           

            </div>


        </div>
    )

}

export default VenueInfoPage;