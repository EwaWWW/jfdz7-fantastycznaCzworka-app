import firebase from 'firebase'


const SET_USER = 'auth/SET_USER'

    export const setUser = user => ({
      type: SET_USER,
  user
})

export const signIn = (email, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signUp = (email, password) => dispatch => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

    const initialState = {
      user: null
}

    export default (state = initialState, action = {}) => {
      switch (action.type) {
            case SET_USER:
                  return {
                        ...state,
                        user: action.user
                  }
        default:
          return state
          }
    }