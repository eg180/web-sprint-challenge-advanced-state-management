import axios from "axios";

// this is how you transition from state-to-state - i8n our actions creator.
// this informs the reducer about the type of state change request

//action types

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// ASYNC action creators

export const fetchData = () => {
    return (dispatch) => {
        // do async actions here
        dispatch({ type: FETCH_DATA_START })
        console.log('fetch data initiated from within actions file')

        // fetch data


        axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            console.log(res)
            // let's dispatch this data
            dispatch( { type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err.message)
        })


    }
}

