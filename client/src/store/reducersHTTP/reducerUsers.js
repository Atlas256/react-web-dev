const init = {
    users: []
}


export const reducerUsers= (state = init, action) => {

    switch (action.type) {

        case "GET_USERS":
            return { ...state, users: [...action.payload] }

        default:
            return state;
    }
}