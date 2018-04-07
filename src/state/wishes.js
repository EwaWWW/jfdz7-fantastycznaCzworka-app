// import wishesFromFile from '../Data/wishes';
import firebase from 'firebase'

// const URL_FIREBASE = "https://fc-generator-zyczen.firebaseio.com/app-user/wishes"

const initialState = { wishes: [], favorites: [] }

export const ADD_WISH = "ADD_WISH"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const SET_WISHES = "SET_WISHES"



const setWishes = wishes => ({
    type: SET_WISHES,
    wishes
})

let wishesRef
let callback

export const enableWishSync = () => dispatch => {
    // const userUid = firebase.auth().currentUser.uid

    wishesRef = firebase.database().ref('/app-user/wishes')
    callback = snapshot => {
        const value = snapshot.val()
        const wishes = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))
        dispatch(setWishes(wishes))
    }
    wishesRef.on('value', callback)
}

export const disableWishSync = () => dispatch => {
    wishesRef.off('value', callback)
}

export const addWishFireBase = (
    data
) => dispatch => {
    wishesRef.push({
        wish: data.wish, id: data.id, category: data.category, userId: data.userId
    })
}

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
        case SET_WISHES:
            return {
                ...state,
                wishes: action.wishes
            }
        default:
            console.log("default", state)
            return state
    }
}
