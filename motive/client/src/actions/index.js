import axios from 'axios';


/// --------> USERNAME | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
const loadUsername = username => ({
    type: 'SET_USERNAME',
    payload: username
});

export const setUsername = username => {
    return async dispatch => {
        dispatch(loadUsername(username));
    };
};


/// --------> LOCATION | DEFINING PAYLOAD & EXPORTING FUNCTION <------ ///
const loadLocation = location => ({
    type: 'SET_LOCATION',
    payload: location
});

export const setLocation = location => {
    return async dispatch => {
        dispatch(loadLocation(location));
    };
};


/// --------> FOOD CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
const loadFoodVenues = foodCategory => ({
    type: 'SET_FOOD_CATEGORY',
    payload: foodCategory
})

export const fetchFoodVenues = foodCategory => {

    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3000/food_motive');
            return data = dispatch(loadFoodVenues(foodCategory));
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

/// --------> DRINK CATEGORY | DEFINING PAYLOAD & FETCHING <--------- ///
const loadDrinkVenues = drinkCategory => ({
    type: 'SET_DRINK_CATEGORY',
    payload: drinkCategory
})

export const fetchDrinkVenues = drinkCategory => {

    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3000/drink_motive');
            return data = dispatch(loadDrinkVenues(drinkCategory));
        } catch(err) {
            throw new Error(err.message)
        }
    }
}


/// -------> VENUE | DEFINING PAYLOAD & POST REQUEST <---------- ///
const loadVenue = ( lat, long, categories ) => ({
    type: 'SET_VENUE',
    payload: ( lat, long, categories )
})

export const getVenue = ( lat, long, categories ) => {
    return async (dispatch) => {
        try {
            const foodVenue = await fetchFoodVenues( lat, long, categories );
            const drinkVenue = await fetchDrinkVenues( lat, long, categories );
            
           dispatch(loadVenue(foodVenue || drinkVenue));

        } catch (err) {
            dispatch({
                type: "SET_ERROR",
                payload: err
            })
        }
    };
};




