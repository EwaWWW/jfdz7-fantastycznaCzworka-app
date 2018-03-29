import wishesFromFile from '../Data/wishes';

const initialState = { wishes: wishesFromFile }

export const ADD_WISH = "ADD_WISH"
export const addWish = (data) => ({
    type: ADD_WISH, data
})
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WISH:
            console.log("AddWish", state, action, state.wishes)
            return { ...state, wishes: [...state.wishes, action.data]}
        default:
            console.log("default", state)
            return state
    }
}
