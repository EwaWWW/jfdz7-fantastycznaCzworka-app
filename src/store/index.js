import { createStore } from 'redux'
import  reducers  from '../reducers/index'

function reduxStore (initialState) {



const store = createStore(
    reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store
}

export default reduxStore

