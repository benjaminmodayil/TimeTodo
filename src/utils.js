export let initialState = {
  allTasks: [
    {
      _id: 0,
      title: 'Ask Michael about lead generation',
      status: false,
      time: 35,
      filter: 'school'
    },
    {
      _id: 1,
      title: 'Find hotel for conference',
      status: false,
      time: 15,
      filter: 'inbox'
    },
    {
      _id: 2,
      title: 'Code new landing page',
      status: false,
      time: 45,
      filter: 'work'
    },

    {
      _id: 4,
      title: 'Emails ✉️',
      status: false,
      time: 15,
      filter: 'home'
    }
  ],
  visible: [
    {
      _id: 0,
      title: 'Ask Michael about lead generation',
      status: false,
      time: 35,
      filter: 'school'
    },
    {
      _id: 1,
      title: 'Find hotel for conference',
      status: false,
      time: 15,
      filter: 'inbox'
    },
    {
      _id: 2,
      title: 'Code new landing page',
      status: false,
      time: 45,
      filter: 'work'
    },

    {
      _id: 4,
      title: 'Emails ✉️',
      status: false,
      time: 15,
      filter: 'home'
    }
  ],
  completed: [
    {
      _id: 3,
      title: 'Coffee + News',
      status: true,
      time: 5,
      filter: 'inbox'
    }
  ],
  filters: ['inbox', 'all', 'work', 'school', 'home'],
  currentFilter: 'all',
  logs: [],
  timer: false
}
