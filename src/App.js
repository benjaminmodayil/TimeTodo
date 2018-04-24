import React, { Component } from 'react'
import './styles/App.css'

import Timer from './components/Test/timer.js'
import Dashboard from './components/Dashboard/index.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      filters: ['inbox', 'work', 'school', 'home'],
      logs: [],
      timer: false
    }
  }

  taskBtnHandler() {
    this.setState({
      timer: true
    })
  }

  renderTimer() {}

  render() {
    let dashboardOrTimer = this.state.timer ? (
      <Timer type={'countdown'} />
    ) : (
      <Dashboard filters={this.state.filters} onClick={this.taskBtnHandler.bind(this)} />
    )
    return <div className="App">{dashboardOrTimer}</div>
  }
}

export default App
// show normal view by default
// click play, set state to timer: true
// if timer: true, show timer (conditional)

// once timer done, or canceled, show normal view

// lots of little things in between...
// - checking off whether task complete
// - what happens when canceled, etc
