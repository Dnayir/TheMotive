import axios from 'axios';


export const getVenue = searchTerm => {
    return async (dispatch) => {
        try {
            const foodCatArray = await fetchFoodCat(searchTerm);
            const drinkCatArray = await fetchDrinkCat(searchTerm);
            const location = await fetchLocation(searchTerm);
            dispatch({
                type: "SET_FOODCAT", 
                payload: foodCatArray
            })
            dispatch({
                type: "SET_DRINKCAT", 
                payload: drinkCatArray
            })
            // dispatch({
            //     type: "SET_LOCATION", 
            //     payload: location
            // })
        } catch (err) {
            dispatch({
                type: "SET_ERROR",
                payload: err
            })
        }
    };
};


// const fetchLocation = async searchTerm => {
//     try {
//         const { data } = await axios.get(``);
//         return data[0].latlng;
//     } catch(err) {
//         if (data.status === 404) { throw Error('fethLocation error') }
//         throw new Error(err.message)
//     }
// }

const fetchDrinkCat = async searchTerm => {
    try {
        const { data } = await axios.get(`http://localhost:3000/drink/${searchTerm}`);
        const fetchDrinkCat = data.message.map((url, i) => ({ id: i + 1}));
    } catch(err) {
        if (data.status === 404) { throw Error('fetchDrinkCat error') }
        throw new Error(err.message)
    }
}

const fetchFoodCat = async searchTerm => {
    try {
        const { data } = await axios.get(`http://localhost:3000/food/${searchTerm}`);
        const foodCatArray = data.message.map((url, i) => ({ id: i + 1}));
    } catch(err) {
        if (data.status === 404) { throw Error('fetchFoodCat error') }
        throw new Error(err.message)
    }
}


