import { OPEN_CLOSE_MODAL_WISH }from '../actions/modalAddWish'
const initialState = { modalAddWish: false }


export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_CLOSE_MODAL_WISH:
            console.log("ModalAddWish", state, action)
            return { ...state, modalAddWish: action.data }
        default:
            console.log("default ModalAddWish", state)
            return state
    }
}
