import todos from '../reducers/todoReducers'
import { combineReducers, createStore } from 'redux'


const store = createStore(combineReducers({todos}))

export default store