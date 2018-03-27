import firebase from 'firebase'
import wishes from "../Data/wishes";
import persons from "../Data/persons";

// Action types
const SET_PERSONS = 'persons/SET_PERSONS'

// const ADD = 'persons/ADD'

const setPersons = persons => ({
    type: SET_PERSONS,
    persons
})

let personsRef
let callback

export const enableSync = () => dispatch => {
    const userUid = firebase.auth().currentUser.uid

    personsRef = firebase.database().ref('/app-user/' + userUid + '/persons/')
    callback = snapshot => {
        const value = snapshot.val()
        const persons = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))

        dispatch(setPersons(persons))
    }

    personsRef.on('value', callback)
}

export const disableSync = () => dispatch => {
    personsRef.off('value', callback)
}

// Action creators
// export const addTask = (taskTitle, taskDescription, taskCategory) => ({
//   type: ADD,
//   taskTitle,
//   taskDescription,
//   taskCategory
// })

export const addPerson = (
    personName,
    personDoB,
    personEmail
) => dispatch => {
    personsRef.push({
        name: personName,
        date: personDoB,
        email: personEmail
    })
}
export const removePerson = personId => dispatch => {
    personsRef.child(personId).remove()
}





const usersAndWishes = persons.map(person => {

    return {
        id: person.id,
        name: person.name,
        date: person.date,
        email: person.email,
        wish:  person.idWish === '' ? '' : wishes.filter(wish => wish.id === person.idWish)

    }


});
// Initial state

const initialState = {
    data: []
}

// Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PERSONS:
            return {
                ...state,
                data: action.persons
            }

        // case ADD:
        //     return {
        //         ...state,
        //         data: state.data.concat({
        //             id: Date.now().toString(32),
        //             name: action.personName,
        //             date: action.personDoB,
        //             email: action.personEmail
        //         })
        //     }




        default:
            return state
    }
}
