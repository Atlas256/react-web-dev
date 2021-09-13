
//import axios from 'axios';

export function fetchUsers() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const json = await response.json()
        dispatch({ type: "FETCH_USERS", payload: json })
    }
}
/*
export function fetchUsers() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
            .then(({ data }) => {
                dispatch({ type: "FETCH_USERS", payload: data })
            });
    }
}*/