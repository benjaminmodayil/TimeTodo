import { API_BASE_URL } from '../config'

export const ADD_TASK = 'ADD_TASK'
export const addTask = task => dispatch => {
  let meta = {
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json'
      // Authorization: 'Bearer ' + jwt
    },
    method: 'POST',
    credentials: 'same-origin'
  }

  fetch(`${API_BASE_URL}/tasks`, meta)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(task => {
      dispatch(addSuccess(task))
    })
    .catch(err => {
      dispatch(addError(err))
    })
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
export const toggleCheckbox = task => dispatch => {
  console.log(task)
  let toggledTask = {
    ...task,
    status: !task.status
  }

  let meta = {
    body: JSON.stringify(toggledTask),
    headers: {
      'content-type': 'application/json'
      // Authorization: 'Bearer ' + jwt
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
      dispatch(toggleSuccess(task))
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

export const updateTask = task => dispatch => {
  let meta = {
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json'
      // Authorization: 'Bearer ' + jwt
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

export const fetchTasks = () => dispatch => {
  fetch(`${API_BASE_URL}/tasks`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(task => {
      dispatch(fetchTasksSuccess(task))
    })
    .catch(err => {
      dispatch(fetchTasksError(err))
    })
}

export const deleteTask = taskID => dispatch => {
  let meta = {
    headers: {
      'content-type': 'application/json'
      // Authorization: 'Bearer ' + jwt
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
