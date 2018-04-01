import wishesFromFile from '../Data/wishes';


const initialState = { wishes: wishesFromFile, favorites: [] }

export const ADD_WISH = "ADD_WISH"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"


export const addWish = (data) => ({
    type: ADD_WISH, data
})

export const addFavorite = (data) => ({
    type: ADD_FAVORITE, data
})

export const removeFavorite = (data) => ({
    type: REMOVE_FAVORITE, data
})

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WISH:
            console.log("AddWish", state, action, state.wishes)
            return { ...state, wishes: [...state.wishes, action.data]}
        case ADD_FAVORITE:
            return {

            }
        case REMOVE_FAVORITE:
            return {

            }
        default:
            console.log("default", state)
            return state
    }
}
