import firebase from 'firebase'


const SET_USER = 'auth/SET_USER'

    export const setUser = user => ({
      type: SET_USER,
  user
})

export const translations = (code) => ({
    'auth/user-not-found': 'Nie znaleziono użytkownika',
    'auth/weak-password': 'Hasło jest za słabe',
    'auth/wrong-password': 'Nieprawidłowe hasło',
    'auth/invalid-email': 'Nieprawidłowy adres e-mail'
})[code]


export const signIn = (email, password) => dispatch => {
 return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
}

export const signUp = (email, password) => dispatch => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
}


const provider = new firebase.auth.FacebookAuthProvider();

export const signUpWithFacebook = () => dispatch => {
    return (
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const token = result.credential.accessToken;
                const user = result.user;

                console.log(token)
                console.log(user)
            }).catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
    )
}

export const signOut = () => dispatch => {
      firebase.auth().signOut()
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