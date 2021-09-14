const init = {
    users: []
}


export const reducerUsers = (state = init, action) => {

    switch (action.type) {

        case "SERVER_GET_USERS":
            return { ...state, users: [...action.payload] }

        case "SERVER_CREATE_USER":
            return { ...state, users: [...state.users, action.payload] }

        case "SERVER_EDIT_USER":
            return {
                ...state,
                ...state.users[action.payload.currentNumber] = {...action.payload.currentUser}
            }

        case "SERVER_DELETE_USER":
            return {
                ...state,
                users: [
                    ...state.users.filter(user =>
                        (user._id != action.payload) ?
                            true : false
                    )
                ]
            }

        default:
            return state;
    }
}