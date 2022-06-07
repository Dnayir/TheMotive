
const initState = {
    username: "",
    location: "",
    foodCat: "",
    drinkCat: "",
    venueId: "",
    error: false,
}

const motiveReducer = (state=initState, action) => {
    switch(action.type){
        case 'SET_USERNAME':
            return {...state, username: action.payload }
        case 'SET_LOCATION':
             return {...state, location: action.payload }
        case 'SET_FOODCAT':
             return {...state, foodCat: action.payload }
        case 'SET_DRINKCAT':
            return {...state, drinkCat: action.payload }
        case 'SET_VENUEID':
            return {...state, venueId: action.payload }
        case 'SET_ERROR':
            return {...state, error: action.payload }
        default:
            return state;
    };
};

export default motiveReducer;