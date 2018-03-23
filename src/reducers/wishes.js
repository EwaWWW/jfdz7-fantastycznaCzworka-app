import wishesFromFile from '../Data/wishes';
import { ADD_WISH }from '../actions/wishes'
const initialState = { wishes: wishesFromFile }


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
