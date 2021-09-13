import componentList from '../../componentList';

let localStorage = JSON.parse(window.localStorage.getItem('currentPage'));

const init = {
    components: [
        { isOpen: true, name: "Home", component: componentList.Home },
        {
            isOpen: true, name: "Test", pages: [
                {
                    isOpen: true, name: "Menu", pages: [
                        { isOpen: true, name: "ListMenu", component: "" },
                    ]
                },
                {
                    isOpen: false, name: "ClientServer", pages: [
                        { isOpen: true, name: "Apollo JS", component: "" },
                        { isOpen: true, name: "Rest API", component: componentList.RestAPI },
                    ]
                },
                {
                    isOpen: true, name: "Pagination", pages: [
                        { isOpen: true, name: "Dynamic", component: componentList.DynamicPagination },
                    ]
                }
            ]
        },
    ],
    currentPage:
        (localStorage)
            ?
            {
                isOpen: localStorage.isOpen,
                name: localStorage.name,
                component: componentList[localStorage.component]
            }
            :
            { isOpen: true, name: "Home", component: componentList.Home }
}


export const reducerComponents = (state = init, action) => {

    switch (action.type) {

        case "UPDATE_COMPONENTS":
            return { ...state, components: [...state.components] }

        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.payload }

        default:
            return state;
    }
}