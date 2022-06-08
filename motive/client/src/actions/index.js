import axios from 'axios';
import { Last } from 'react-bootstrap/esm/PageItem';


/// --------> USERNAME | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
const setUsername = username => ({
    type: 'SET_USERNAME',
    payload: username
});

export const loadUsername = username => {
    return async dispatch => { 
        try {
            dispatch(setUsername(username));
        } catch(err) {
            console.warn(err.message);
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    } 
}


/// --------> LOCATION | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
const setLong = long => ({
    type: 'SET_LONG',
    payload: long
});

export const loadLong = long => {
    return async dispatch => { 
        try {
            dispatch(setLong(long));
        } catch(err) {
            console.warn(err.message);
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    } 
}

const setLat = lat => ({
    type: 'SET_LAT',
    payload: lat
});

export const loadLat = lat => {
    return async dispatch => { 
        try {
            dispatch(setLat(lat));
        } catch(err) {
            console.warn(err.message);
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    } 
}


/// --------> FOOD CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
export const setFoodCategory = foodCategory => ({
    type: 'SET_FOOD_CATEGORY',
    payload: foodCategory
})

/// --------> DRINK CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
const setDrinkCategory = drinkCategory => ({
    type: 'SET_DRINK_CATEGORY',
    payload: drinkCategory
})
export const loadDrinkCategory = drinkCategory => {
    return async dispatch => { 
        try {
            dispatch(setDrinkCategory(drinkCategory));
        } catch(err) {
            console.warn(err.message);
            dispatch({type: 'SET_ERROR', payload: err.message})
        }
    } 
}



/// -------> VENUE | DEFINING PAYLOAD & POST REQUEST <---------- ///
// const loadVenue = ( lat, long, categories ) => ({
//     type: 'SET_VENUE',
//     payload: ( lat, long, categories )
// })






