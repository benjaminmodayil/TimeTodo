import { initialState } from '../utils.js'

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // check if added task is on visible page, then add
      let visible = state.currentFilter === action.task.filter
      if (visible) {
        return Object.assign({}, state, {
          allTasks: [
            ...state.allTasks,
            {
              title: action.task.title,
              status: action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ],
          visible: [
            ...state.visible,
            {
              title: action.task.title,
              status: action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ]
        })
      } else {
        return Object.assign({}, state, {
          allTasks: [
            ...state.allTasks,
            {
              title: action.task.title,
              status: action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ]
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

    case 'TOGGLE_CHECKBOX':
      let obj
      if (action.task.status) {
        let items = state.completed.filter(item => item._id !== action.task._id)

        let visible = state.allTasks.filter(item => {
          if (state.currentFilter === 'all') return item
          return state.currentFilter === item.filter
        })
        obj = {
          allTasks: [
            ...state.allTasks,
            {
              _id: action.task._id,
              title: action.task.title,
              status: !action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ],
          visible: [
            ...visible,
            {
              _id: action.task._id,
              title: action.task.title,
              status: !action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ],
          completed: [...items]
        }
      } else {
        let items = state.allTasks.filter(item => item._id !== action.task._id)
        let visible = state.visible.filter(item => item._id !== action.task._id)

        obj = {
          allTasks: [...items],
          visible: [...visible],
          completed: [
            ...state.completed,
            {
              _id: action.task._id,
              title: action.task.title,
              status: !action.task.status,
              time: action.task.time,
              filter: action.task.filter
            }
          ]
        }
      }
      console.log(state, obj)
      return Object.assign({}, state, obj)

    default:
      return state
  }
}
