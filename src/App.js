import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/index.js'
import Timer from './components/Test/timer.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './styles/App.css'

class App extends Component {
  render() {
    let dashboardOrTimer = this.props.timer ? (
      <Timer type={'countdown'} task={this.props.currentTask} />
    ) : (
      <Dashboard filters={this.props.filters} />
    )

    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/dashboard"
              render={props => <Dashboard filters={this.props.filters} />}
            />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
// {dashboardOrTimer}

// <div className="App">{dashboardOrTimer}</div>

const mapStateToProps = state => ({
  tasks: state.tasks,
  currentTask: state.currentTask,
  timer: state.timer,
  filters: state.filters,
  logs: state.logs
})

export default connect(mapStateToProps)(App)
