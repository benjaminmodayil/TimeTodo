import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { taskReducer } from './reducers'

export default createStore(taskReducer, applyMiddleware(thunk))
