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

    const [venueData, setVenueData] = useState({})
    const [venueArr, setVenueArr] = useState([])
    
    useEffect(() => {
        console.log("from redux: ", typeChosen, long, lat, drinkCategory)
        async function searchApi() {
            try {
                const headers = { 
                    'ContentType': 'application/json',
                };
                if (typeChosen === 'drink'){
                    const result = await axios.post(`http://127.0.0.1:7777/drink_motive`,{
                        "latitude": lat,
                        "longitude": long,
                        "category": drinkCategory
                    }, { headers } );

                    setVenueData(result.data.results);
                    console.log(result.data.results)
                    
                    // const venueName = result.data.results[0].name;
                    // console.log('name: ', venueName)
                    // const venueType = result.data.results[0].categories[0].name;
                    // console.log('type: ', venueType)
                    // const venueDistance = result.data.results[0].distance;
                    // console.log('distance: ', venueDistance)
                    // const venueAddress = result.data.results[0].location.formatted_address;
                    // console.log('address: ', venueAddress)
                    // const prefix = result.data.results[0].categories[0].icon.prefix;
                    // console.log('prefix: ', prefix)
                    // const suffix = result.data.results[0].categories[0].icon.suffix;
                    // console.log('suffix: ', suffix)                    
                    // const venueIcon = prefix + suffix;
                    // console.log('suffix: ', venueIcon)                    
                }
                else {
                    console.log("from redux: ", typeChosen, long, lat, foodCategory)
                    const result = await axios.post(`http://127.0.0.1:7777/food_motive`,{
                        "latitude": lat,
                        "longitude": long,
                        "category": foodCategory
                    }, { headers } );
                    setVenueData(result);
                      
                    const venueName = result.data.results[0].name;
                    console.log('name: ', venueName)
                    const venueType = result.data.results[0].categories[0].name;
                    console.log('type: ', venueType)
                    const venueDistance = result.data.results[0].distance;
                    console.log('distance: ', venueDistance)
                    const venueAddress = result.data.results[0].location.formatted_address;
                    console.log('address: ', venueAddress)
                    const prefix = result.data.results[0].categories[0].icon.prefix;
                    console.log('prefix: ', prefix)
                    const suffix = result.data.results[0].categories[0].icon.suffix;
                    console.log('suffix: ', suffix)                    
                    const venueIcon = prefix + suffix;
                    console.log('suffix: ', venueIcon) 
                }
            } catch (err) {
                console.error(err);
            }
        }
        searchApi();

    }, []);

    function renderCards() {
        let cards
        for (let i = 0; i < venueData.length; i++) {

            const venueName = venueData[i].name;
            console.log('name: ', venueName)

            const venueType = venueData[i].categories[0].name;
            console.log('type: ', venueType)

            const venueDistance = venueData[i].distance;
            console.log('distance: ', venueDistance)

            const venueAddress = venueData[i].location.formatted_address;
            console.log('address: ', venueAddress)

            const prefix = venueData[i].categories[0].icon.prefix;
            console.log('prefix: ', prefix)

            const suffix = venueData[i].categories[0].icon.suffix;
            console.log('suffix: ', suffix)  

            const venueIcon = prefix + suffix;
            console.log('icon: ', venueIcon)   

            //cards = venueData.map(item => <Card key={item.id} venue={venues} />)
        }
       
        

        return cards
    }

    renderCards()

    //const cards = venueArr.map(item => <Card key={item.id} data={venueData}/>)

    return (

        <div className='main-container'>

            <NavBar />
            <div className='card-container'>
                
                {/* {venueData && cards}
                <Card /> */}

                           

            </div>

        </div>
    )
}

export default VenuesPage;