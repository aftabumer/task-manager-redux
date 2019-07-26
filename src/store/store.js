
import { createStore } from 'redux'
import taskReducer from './reducers/taskReducer'

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(taskReducer, reduxDevTool);

export default store
