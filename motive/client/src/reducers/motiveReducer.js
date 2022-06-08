
const initState = {
    username: "",
    location: "",
    foodCategory: "",
    drinkCategory: [{bar: false, pub: false}],
    venue: [{ lat: '', long: '', categories: 0}],
    error: false,
}

const motiveReducer = (state=initState, action) => {
    switch(action.type){
        case 'SET_USERNAME':
            return {...state, username: action.payload }
        case 'SET_LOCATION':
             return {...state, location: action.payload }
        case 'SET_FOOD_CATEGORY':
             return {...state, foodCategory: action.payload }
        case 'SET_DRINK_CATEGORY':
            return {...state, drinkCategory: action.payload }
        case 'SET_VENUE':
            return {...state, venueInfo: action.payload }
        case 'SET_ERROR':
            return {...state, error: action.payload }
        default:
            return state;
    };
};

export default motiveReducer;