import React from 'react';
import { Card } from 'react-bootstrap';
import './venues.css';


const VenuesCard = ({ venuename, image, handleSelectedVenue }) => {

    return (
        <Card 
            role='card'
            className='venues-card'
            data-name={venuename}
            onClick={handleSelectedVenue}>

            <Card.Body className='card-body'>
                <Card.Img 
                    src={image}
                    className='venue-image'
                    width='100'
                    height='100'
                    alt='Venue Image' />
            </Card.Body>

            <Card.Header 
                role='heading'
                className='card-header'>
                    {venuename}
                </Card.Header>

        </Card>
    )
}

export default VenuesCard;