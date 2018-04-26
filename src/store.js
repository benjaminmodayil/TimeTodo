import { createStore } from 'redux'

import { taskReducer } from './reducers'

export default createStore(taskReducer)
