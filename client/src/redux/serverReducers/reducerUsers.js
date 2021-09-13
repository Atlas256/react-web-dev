const init = {
    fetchUsers: []
}


export const reducerUsers = (state = init, action) => {

    switch (action.type) {

        case "FETCH_GET_USERS":
            return { ...state, fetchUsers: [...action.payload] }

        default:
            return state;
    }
}