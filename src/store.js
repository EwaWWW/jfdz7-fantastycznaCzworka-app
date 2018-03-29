import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import './setupFirebase'
import auth, {setUser} from './state/auth'
import persons, { disableSync, enableSync } from './state/persons'
import wishes from './state/wishes'
import modalAddWish from './state/modalAddWish'




const reducer = combineReducers({
    auth,
    persons,
    wishes,
    modalAddWish
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
)
)


firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
        store.dispatch(enableSync())
    } else {
        store.dispatch(disableSync())
    }
    store.dispatch(setUser(user))
})


export default store