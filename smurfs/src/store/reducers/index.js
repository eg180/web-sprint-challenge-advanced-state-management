import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions";

// initial state here

const initialState = {
    isLoading: false,
    smurfData: [{name: "Erick", age: "40"}, {name: "Christian", age: "17"}],
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            console.log('inside reducers folder!')
            return {
                ...state,
                isLoading: true,
                error: ""
            }
            
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfData: action.payload
            }
        default:
            return state
    }
};