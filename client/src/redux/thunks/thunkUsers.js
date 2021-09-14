import axios from 'axios';



const URL =
    'http://localhost:5000/api/users';


const thunkGetUsers = () => (dispatch) => {
    axios.get(URL)
        .then(res => {
            dispatch({ type: "SERVER_GET_USERS", payload: res.data })
        });
}

const thunkCreateUser = (body) => (dispatch) => {
    axios.post(URL, body)
        .then(res => {
            dispatch({ type: "SERVER_CREATE_USER", payload: res.data })
        })
}

const thunkEditUser = (currentUser, currentNumber) => (dispatch) => {
    axios.put(URL + '/' + currentUser._id, currentUser)
        .then(() => dispatch({ type: "SERVER_EDIT_USER", payload: { currentUser, currentNumber } }))
}

const thunkDeleteUser = (userID) => (dispatch) => {
    axios.delete(URL + '/' + userID)
        .then(() => dispatch({ type: "SERVER_DELETE_USER", payload: userID }))
}


export {
    thunkGetUsers,
    thunkCreateUser,
    thunkEditUser,
    thunkDeleteUser
}





