import React from 'react';
import './venues.css';
import { NavBar, VenuesCard } from '../../components';

const VenuesPage = () => {
    

    return (

        <div className='main-container'>

            <NavBar />
            <div className='card-container'>

                <VenuesCard />

                           

            </div>


        </div>
    )
}

export default VenuesPage;