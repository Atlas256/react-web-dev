
const URL =
    'https://jsonplaceholder.typicode.com/photos?_limit=100';

export const fetchUsers = () => (dispatch) => {
    fetch(URL)
        .then(res => res.json())
        .then(json => dispatch({ type: "FETCH_GET_USERS", payload: json }))
}





