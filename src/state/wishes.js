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
            console.log("AddFavorite", state, action, state.favorites)

            return { ...state,wishes: state.wishes.map(wish => wish.id === action.data.id ?
                {...wish, favorite: true }: wish),
                favorites: [{ wish: action.data.wish, id: action.data.id, category: action.data.category },...state.favorites]}
        case REMOVE_FAVORITE:
            console.log("RemoveFavorite", state, action, state.favorites)
            return { ...state,wishes: state.wishes.map(wish => wish.id === action.data.id ?
                { ...wish, favorite: false }: wish), favorites: [...state.favorites.filter(d => d.id !== action.data.id)]}
        default:
            console.log("default", state)
            return state
    }
}
