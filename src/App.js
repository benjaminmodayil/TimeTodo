import React, { Component } from 'react'
import './styles/App.css'
import { connect } from 'react-redux'

import Timer from './components/Test/timer.js'
import Dashboard from './components/Dashboard/index.js'

import { fetchTasks } from './actions/index'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    let dashboardOrTimer = this.props.timer ? (
      <Timer type={'countdown'} task={this.props.currentTask} />
    ) : (
      <Dashboard filters={this.props.filters} completed={this.props.completed} />
    )

    let check = this.props.error === undefined
    let message = check ? (
      dashboardOrTimer
    ) : (
      <div className="text-red italic">
        Sorry! There's been an error getting all your tasks from the server.
      </div>
    )

    return <div className="App">{message}</div>
  }
}

const mapStateToProps = state => ({
  currentTask: state.currentTask,
  timer: state.timer,
  filters: state.filters,
  completed: state.completed,
  logs: state.logs,
  error: state.error
})

export default connect(mapStateToProps)(App)
