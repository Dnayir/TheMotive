import React, { useState, useEffect } from 'react';
import './venues.css';
import { NavBar, Card } from '../../components';
import axios from 'axios'
import { useSelector } from 'react-redux'

const VenuesPage = () => {

    const typeChosen = useSelector(state => state.type);
    const long = useSelector(state => state.long);
    const lat = useSelector(state => state.lat);
    const foodCategory = useSelector(state => state.type);
    const drinkCategory = useSelector(state => state.type);

    const [venueData, setVenueData] = useState([])
    
    useEffect(() => {
        console.log("from redux: ", typeChosen, long, lat, drinkCategory)
        async function searchApi() {
            try {
                const headers = { 
                    'ContentType': 'application/json',
                };
                // for drink
                if (typeChosen === 'drink'){
                    const result = await axios.post(`https://the-motive-one.herokuapp.com/drink_motive`,{
                        "latitude": lat,
                        "longitude": long,
                        "category": drinkCategory
                    }, { headers } );

                    setVenueData(result.data.results);
                    console.log(result.data.results)               
                }
                else {
                    console.log("from redux: ", typeChosen, long, lat, foodCategory)
                    const result = await axios.post(`https://the-motive-one.herokuapp.com/drink_motive`,{
                        "latitude": lat,
                        "longitude": long,
                        "category": foodCategory
                    }, { headers } );
                    setVenueData(result.data.results);
                }
            } catch (err) {
                console.error(err);
            }
        }
        searchApi();

    }, []);

    function renderCards() {        
        
        return venueData.map(v => {
            //unmap v's data here
            const prefix = v.categories[0].icon.prefix;
            const suffix = v.categories[0].icon.suffix;
            const venueIcon = prefix + suffix;
          
            return <Card venueName={v.name} venueType={v.categories[0].name} venueDistance={v.distance/1000} venueAddress={v.location.formatted_address} venueIcon={venueIcon}/>
        })
    }

    return (

        <div className='main-container'>

            <NavBar />
            <div className='card-container'>
                
                {/* {venueData && cards}
                <Card /> */}

                {venueData && renderCards()} 
                           
            </div>

        </div>
    )
}

export default VenuesPage;