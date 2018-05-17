import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { refreshAuthToken, setAuthToken } from './actions/auth'
import { loadAuthToken } from './local-storage'
import authReducer from './reducers/auth'
import taskReducer from './reducers/index'

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: taskReducer
  }),
  applyMiddleware(thunk)
)

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken()
if (authToken) {
  const token = authToken
  store.dispatch(setAuthToken(token))
  store.dispatch(refreshAuthToken())
}

export default store
