export const ADD_TASK = 'ADD_TASK'
export const addTask = task => ({
  type: ADD_TASK,
  task
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
export const toggleCheckbox = task => ({
  type: TOGGLE_CHECKBOX,
  task
})

export const SORT_FILTER = 'SORT_FILTER'
export const sortFilter = text => ({
  type: SORT_FILTER,
  text
})
