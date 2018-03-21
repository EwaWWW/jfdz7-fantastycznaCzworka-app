import firebase from 'firebase'
import wishes from "../Data/wishes";
import persons from "../Data/persons";

// Action types
const SET_TASKS = 'tasks/SET_TASKS'

const ADD = 'tasks/ADD'
const REMOVE = 'tasks/REMOVE'
const TOGGLE_DONE = 'tasks/TOGGLE_DONE'
const TOGGLE_IMPORTANT = 'tasks/TOGGLE_IMPORTANT'
const UPDATE = 'tasks/UPDATE'

const setTasks = tasks => ({
    type: SET_TASKS,
    tasks
})

let tasksRef
let callback

export const enableSync = () => dispatch => {
    const userUid = firebase.auth().currentUser.uid

    tasksRef = firebase.database().ref('/tasker/' + userUid + '/tasks')
    callback = snapshot => {
        const value = snapshot.val()
        const tasks = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))

        dispatch(setTasks(tasks))
    }

    tasksRef.on('value', callback)
}

export const disableSync = () => dispatch => {
    tasksRef.off('value', callback)
}

// Action creators
// export const addTask = (taskTitle, taskDescription, taskCategory) => ({
//   type: ADD,
//   taskTitle,
//   taskDescription,
//   taskCategory
// })

export const addTask = (
    taskTitle,
    taskDescription,
    taskCategory
) => dispatch => {
    tasksRef.push({
        title: taskTitle,
        description: taskDescription,
        category: taskCategory
    })
}

export const removeTask = taskId => dispatch => {
    tasksRef.child(taskId).remove()
}

export const toggleTaskDone = taskId => ({
    type: TOGGLE_DONE,
    taskId
})

export const toggleTaskImportant = taskId => ({
    type: TOGGLE_IMPORTANT,
    taskId
})

export const updateTask = (taskId, updatedTask) => ({
    type: UPDATE,
    taskId,
    updatedTask
})

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
    data: usersAndWishes
}

// Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                data: action.tasks
            }

        case ADD:
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    title: action.taskTitle,
                    description: action.taskDescription,
                    category: action.taskCategory
                })
            }
        case REMOVE:
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.taskId)
            }
        case TOGGLE_DONE:
            return {
                ...state,
                data: state.data.map(
                    task =>
                        task.id !== action.taskId
                            ? task
                            : {
                                ...task,
                                isDone: !task.isDone
                            }
                )
            }
        case TOGGLE_IMPORTANT:
            return {
                ...state,
                data: state.data.map(
                    task =>
                        task.id !== action.taskId
                            ? task
                            : {
                                ...task,
                                isImportant: !task.isImportant
                            }
                )
            }
        case UPDATE:
            return {
                ...state,
                data: state.data.map(
                    task =>
                        task.id !== action.taskId
                            ? task
                            : {
                                ...task,
                                ...action.updatedTask
                            }
                )
            }
        default:
            return state
    }
}
