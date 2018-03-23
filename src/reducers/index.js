import { combineReducers } from 'redux'
import  wishes  from './wishes'
import  modalAddWish  from './modalAddWish'


const reducers = { wishes: wishes, modalAddWish: modalAddWish }
const combined = combineReducers (reducers)
export default  combined







