import { initialState } from '../utils.js'

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK_SUCCESS':
      let visible = state.currentFilter === action.task.filter
      if (visible) {
        return Object.assign({}, state, {
          allTasks: [...state.allTasks, { ...action.task }],
          visible: [...state.visible, { ...action.task }]
        })
      } else {
        return Object.assign({}, state, {
          allTasks: [...state.allTasks, { ...action.task }]
        })
      }

    case 'START_TIMER':
      return Object.assign({}, state, {
        timer: true,
        currentTask: action.task
      })

    case 'CANCEL_TIMER':
      return Object.assign({}, state, {
        currentTask: null,
        timer: false
      })

    case 'DONE_TIMER':
      let items = state.allTasks.filter(item => item._id !== action.task._id)

      return Object.assign({}, state, {
        timer: false,
        currentTask: null,
        allTasks: [...items],
        completed: [
          ...state.completed,
          {
            id: action.task._id,
            title: action.task.title,
            status: !action.task.status,
            time: action.task.time
          }
        ]
      })

    case 'SORT_FILTER':
      let filtered = state.allTasks.filter(item => {
        if (action.text === 'all') return item
        return action.text === item.filter
      })
      return Object.assign({}, state, {
        ...state,
        visible: [...filtered],
        currentFilter: action.text
      })

    case 'FETCH_TASKS_SUCCESS':
      let all = [...action.task.tasks.filter(i => !i.status)]
      let completed = [...action.task.tasks.filter(i => i.status)]
      return Object.assign({}, state, {
        allTasks: [...all],
        completed: [...completed]
      })

    case 'FETCH_TASKS_ERROR':
      let error = action.err
      return Object.assign({}, state, {
        error
      })

    case 'DELETE_TASK_SUCCESS':
      let tasks = [...state.allTasks].filter(i => i._id !== action.taskID)

      let newObj = {
        allTasks: [...tasks],
        completed: [...state.completed].filter(i => i._id !== action.taskID)
      }
      return Object.assign({}, state, newObj)

    case 'DELETE_TASK_ERROR':
      return Object.assign({}, state, {
        error: action.err
      })

    case 'TOGGLE_SUCCESS':
      let { task } = action
      let newState
      if (!task.status) {
        let items = state.completed.filter(item => item._id !== task._id)

        let visible = state.allTasks.filter(item => {
          if (state.currentFilter === 'all') return item
          return state.currentFilter === item.filter
        })
        newState = {
          timer: false,
          currentTask: null,
          allTasks: [...state.allTasks, { ...task }],
          visible: [...visible, { ...task }],
          completed: [...items]
        }
      } else {
        let items = state.allTasks.filter(item => item._id !== task._id)
        let visible = state.visible.filter(item => item._id !== task._id)
        newState = {
          timer: false,
          currentTask: null,
          allTasks: [...items],
          visible: [...visible],
          completed: [...state.completed, { ...task }]
        }
      }
      return Object.assign({}, state, newState)

    case 'TOGGLE_ERROR':
      console.log(action.error)
      return Object.assign({}, state, {
        error: action.err
      })

    case 'UPDATE_SUCCESS':
      items = state.allTasks.filter(item => item._id !== action.task._id)
      visible = state.visible.filter(item => item._id !== action.task._id)

      newState = {
        allTasks: [...items, { ...action.task }],
        visible: [...visible, { ...action.task }],
        completed: [...state.completed]
      }
      return Object.assign({}, state, newState)
    case 'UPDATE_ERROR':
      return Object.assign({}, state, {
        error: action.err
      })

    default:
      return state
  }
}
