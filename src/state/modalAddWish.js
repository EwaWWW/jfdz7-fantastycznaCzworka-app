
const initialState = { modalAddWish: false }



export const OPEN_CLOSE_MODAL_WISH = "OPEN_CLOSE_MODAL_WISH"
export const openCloseModalWish = (data) => ({
    type: OPEN_CLOSE_MODAL_WISH, data
})

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
