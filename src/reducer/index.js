import todos from './todos';
import { combineReducers } from 'redux'

const AllReducers = combineReducers({
    todos: todos
})

export default AllReducers;