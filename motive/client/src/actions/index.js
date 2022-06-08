import axios from 'axios';


/// --------> USERNAME | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
export const setUsername = username => ({
    type: 'SET_USERNAME',
    payload: username
});


/// --------> LOCATION | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
export const setLocation = location => ({
    type: 'SET_LOCATION',
    payload: location
});


/// --------> FOOD CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
export const setFoodCategory = foodCategory => ({
    type: 'SET_FOOD_CATEGORY',
    payload: foodCategory
})


/// --------> DRINK CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
export const setDrinkCategory = drinkCategory => ({
    type: 'SET_DRINK_CATEGORY',
    payload: drinkCategory
})

// export const fetchDrinkVenues = drinkCategory => {

//     return async (dispatch) => {
//         try {
//             const { data } = await axios.post('http://localhost:3000/drink_motive');
//             return data = dispatch(loadDrinkVenues(drinkCategory));
//         } catch(err) {
//             throw new Error(err.message)
//         }
//     }
// }


/// -------> VENUE | DEFINING PAYLOAD & POST REQUEST <---------- ///
const setVenue = ( lat, long, categories ) => ({
    type: 'SET_VENUE',
    payload: ( lat, long, categories )
})

// export const getVenue = ( lat, long, categories ) => {
//     return async (dispatch) => {
//         try {
//             const foodVenue = await fetchFoodVenues( lat, long, categories );
//             const drinkVenue = await fetchDrinkVenues( lat, long, categories );
            
//            dispatch(loadVenue(foodVenue || drinkVenue));

//         } catch (err) {
//             dispatch({
//                 type: "SET_ERROR",
//                 payload: err
//             })
//         }
//     };
// };




