import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import './App.css'
import { refreshAuthToken } from './actions/auth'
import Dashboard from './components/Dashboard/index.js'
import Timer from './components/Test/timer.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchTasks())
  //   console.log(this.props.protectedData)
  // }

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh()
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh()
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh()
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    )
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }

    clearInterval(this.refreshInterval)
  }

  render() {
    let dashboardOrTimer = this.props.timer ? (
      <Timer type={'countdown'} task={this.props.currentTask} />
    ) : (
      <Dashboard />
    )

    let check = this.props.error === undefined

    // return <div className="App">{message}</div>

    let message = check ? (
      ''
    ) : (
      <div className="text-red italic">
        Sorry! There's been an error getting all your tasks from the server.
      </div>
    )

    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" render={props => dashboardOrTimer} />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  // protectedData: state.protectedData,
  currentTask: state.protectedData.currentTask,
  timer: state.protectedData.timer,
  // filters: state.protectedData.filters,
  // completed: state.protectedData.completed,
  // logs: state.protectedData.logs,
  error: state.error,
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App))
