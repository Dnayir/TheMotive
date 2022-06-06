import React from 'react';
import { Card } from 'react-bootstrap';
import './venueinfo.css';


const VenueInfoCard = ({ name, type, distance, image }) => {
    return (
        <Card 
            role='card'
            className='venue-info-card'
            >

            <Card.Body className='card-body'>
                <Card.Img 
                    src={image}
                    className='venue-image'
                    width='100'
                    height='100'
                    alt='Venue Image' />
                <Card.Text>
                    <h2>{distance}</h2>
                    <h4>{type}</h4>
                </Card.Text>
            </Card.Body>

            <Card.Header 
                role='heading'
                className='card-header'>
                    <h2>{name}</h2>
                </Card.Header>

        </Card>
    )
}

export default VenueInfoCard;