import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'

export const ADD_TASK = 'ADD_TASK'
export const addTask = task => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  console.log(task)
  let meta = {
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    method: 'POST',
    credentials: 'same-origin'
  }

  fetch(`${API_BASE_URL}/tasks`, meta)
    .then(res => {
      return normalizeResponseErrors(res)
    })
    .then(res => {
      console.log('before if')
      if (!res.ok) {
        console.log(res, 'no okay')
        return Promise.reject(res.statusText)
      }
      console.log(res, 'ok')

      return res.json()
    })
    .then(task => {
      console.log('test', 'working?', task)
      dispatch(addSuccess(task))
    })
    .catch(err => {
      console.log('error 😢', err)
      dispatch(addError(err))
    })
  console.log('after all the mess')
}

export const addSuccess = task => ({
  type: 'ADD_TASK_SUCCESS',
  task
})

export const addError = err => ({
  type: 'ADD_TASK_ERROR',
  err
})

export const START_TIMER = 'START_TIMER'
export const startTimer = task => ({
  type: START_TIMER,
  task
})

export const CANCEL_TIMER = 'CANCEL_TIMER'
export const cancelTimer = () => ({
  type: CANCEL_TIMER
})

export const DONE_TIMER = 'DONE_TIMER'
export const doneTimer = task => ({
  type: DONE_TIMER,
  task
})

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const toggleCheckbox = task => (dispatch, getState) => {
  console.log(task)
  const authToken = getState().auth.authToken
  let toggledTask = {
    ...task,
    status: !task.status
  }

  let meta = {
    body: JSON.stringify(toggledTask),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    method: 'PUT',
    credentials: 'same-origin'
  }

  fetch(`${API_BASE_URL}/tasks/${task._id}`, meta)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(task => {
      dispatch(toggleSuccess({ ...task }))
    })
    .catch(err => {
      dispatch(toggleError(err))
    })
}

export const updateSuccess = task => ({
  type: 'UPDATE_SUCCESS',
  task
})

export const updateError = err => ({
  type: 'UPDATE_ERROR',
  err
})

export const updateTask = task => (dispatch, getState) => {
  const authToken = getState().auth.authToken

  let meta = {
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    method: 'PUT',
    credentials: 'same-origin'
  }

  fetch(`${API_BASE_URL}/tasks/${task._id}`, meta)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(task => {
      dispatch(updateSuccess(task))
    })
    .catch(err => {
      dispatch(updateError(err))
    })
}

export const SORT_FILTER = 'SORT_FILTER'
export const sortFilter = text => ({
  type: SORT_FILTER,
  text
})

export const toggleSuccess = task => ({
  type: 'TOGGLE_SUCCESS',
  task
})

export const toggleError = err => ({
  type: 'TOGGLE_ERROR',
  err
})
export const fetchTasksSuccess = task => ({
  type: 'FETCH_TASKS_SUCCESS',
  task
})

export const fetchTasksError = err => ({
  type: 'FETCH_TASKS_ERROR',
  err
})

export const deleteSuccess = taskID => ({
  type: 'DELETE_TASK_SUCCESS',
  taskID
})

export const deleteError = err => ({
  type: 'DELETE_TASK_ERROR',
  err
})

export const fetchTasks = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken

  fetch(`${API_BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return normalizeResponseErrors(res)
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch(fetchTasksSuccess(res))
    })
    .catch(err => {
      console.log(err, 'error')
      dispatch(fetchTasksError(err))
    })
}

export const deleteTask = taskID => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  let meta = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    method: 'DELETE',
    credentials: 'same-origin'
  }

  fetch(`${API_BASE_URL}/tasks/${taskID}`, meta)
    .then(res => {
      if (!res.ok) {
        console.log(res.statusText)
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(task => {
      dispatch(deleteSuccess(taskID))
    })
    .catch(err => {
      dispatch(deleteError(err))
    })
}
