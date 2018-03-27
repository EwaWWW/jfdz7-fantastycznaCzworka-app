import { combineReducers } from 'redux'
import  wishes  from '../state/wishes'
import  modalAddWish  from '../state/modalAddWish'


const reducers = { wishes: wishes, modalAddWish: modalAddWish }
const combined = combineReducers (reducers)
export default  combined







