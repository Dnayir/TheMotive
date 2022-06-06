import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { VenuesCard } from '../../components';

const VenuesPage = () => {
    
    const theVenues = useSelector(state => state.venues);

    const renderVenues = theVenues.map(venue => 
                <VenuesCard />)

    return (

        <div className='venues-main-container'>

            <Container fluid>

                <section >
                    { renderVenues }
                </section>
                           

            </Container>


        </div>
    )
}

export default VenuesPage;