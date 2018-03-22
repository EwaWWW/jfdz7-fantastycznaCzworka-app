import { combineReducers } from 'redux'
import  wishes  from './wishes'

const reducers = { wishes: wishes }
const combined = combineReducers (reducers)
export default  combined







