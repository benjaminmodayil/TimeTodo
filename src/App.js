import React, { Component } from 'react'
import './styles/App.css'
import { connect } from 'react-redux'

import Timer from './components/Test/timer.js'
import Dashboard from './components/Dashboard/index.js'

class App extends Component {
  render() {
    let dashboardOrTimer = this.props.timer ? (
      <Timer type={'countdown'} task={this.props.currentTask} />
    ) : (
      <Dashboard filters={this.props.filters} />
    )
    return <div className="App">{dashboardOrTimer}</div>
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  currentTask: state.currentTask,
  timer: state.timer,
  filters: state.filters,
  logs: state.logs
})

export default connect(mapStateToProps)(App)
