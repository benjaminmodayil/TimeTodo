import * as actions from '../actions'

const initialState = {
  tasks: [
    {
      _id: 0,
      title: 'Ask Michael about lead generation',
      status: false,
      time: 35
    },
    {
      _id: 1,
      title: 'Find hotel for conference',
      status: false,
      time: 15
    },
    {
      _id: 2,
      title: 'Code new landing page',
      status: false,
      time: 45
    }
  ],
  completed: [
    {
      _id: 3,
      title: 'Coffee + News',
      status: true,
      time: 5
    }
  ],
  filters: ['inbox', 'work', 'school', 'home'],
  logs: [],
  timer: false
}

export const taskReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_TASK) {
    return Object.assign({}, state, {
      tasks: [
        ...state.tasks,
        {
          title: action.task.title,
          status: action.task.status,
          time: action.task.time
        }
      ]
    })
  } else if (action.type === actions.START_TIMER) {
    return Object.assign({}, state, {
      timer: true,
      currentTask: action.task
    })
  } else if (action.type === actions.CANCEL_TIMER) {
    return Object.assign({}, state, {
      currentTask: null,
      timer: false
    })
  } else if (action.type === actions.DONE_TIMER) {
    let items = state.tasks.filter(item => {
      return item._id !== action.task._id
    })

    return Object.assign({}, state, {
      timer: false,
      currentTask: null,
      tasks: [...items],
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
  } else if (action.type === actions.TOGGLE_CHECKBOX) {
    let obj
    if (action.task.status) {
      let items = state.completed.filter(item => item._id !== action.task._id)
      obj = {
        tasks: [
          ...state.tasks,
          {
            _id: action.task._id,
            title: action.task.title,
            status: !action.task.status,
            time: action.task.time
          }
        ],
        completed: [...items]
      }
    } else {
      let items = state.tasks.filter(item => item._id !== action.task._id)

      obj = {
        tasks: [...items],
        completed: [
          ...state.completed,
          {
            _id: action.task._id,
            title: action.task.title,
            status: !action.task.status,
            time: action.task.time
          }
        ]
      }
    }
    return Object.assign({}, state, obj)
  }
  return state
}
