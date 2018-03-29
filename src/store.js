import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import './setupFirebase'
import auth, {setUser} from './state/auth'


const reducer = combineReducers({
    auth,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

firebase.auth().onAuthStateChanged(user => store.dispatch(setUser(user)))


export default store