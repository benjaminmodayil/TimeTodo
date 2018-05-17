import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../../actions/index'
import CoffeeClock from '../../images/illustrations/timer-coffee.svg'
import Completed from '../Completed/'
import Filters from '../Filters'
import Log from '../Log/'
import NavBar from '../NavBar'
import TaskSection from '../TaskSection'
import './index.css'

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container px-4 md-px-0 mx-auto">
          <h1 className="screenreader-only">Task Dashboard</h1>
          <Filters />
          <div className="flex justify-between -mx-2 flex-col md-flex-row">
            <div className="flex justify-between flex-col max-w-sm md-max-w-full w-full md-w-1-2 px-2 mx-auto mb-32 md-mb-0">
              <TaskSection onClick={this.props.onClick} />
              <Completed onClick={this.props.onClick} />
            </div>
            <Log logs={this.props.completed} />
          </div>
          <div className="mt-32 md-mt-16 flex justify-center md-justify-end">
            <img src={CoffeeClock} alt="" />
          </div>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentTask: state.protectedData.currentTask,
  allTasks: state.protectedData.allTasks,
  timer: state.protectedData.timer,
  filters: state.protectedData.filters,
  completed: state.protectedData.completed,
  logs: state.protectedData.logs
  // error: state.error,
  // hasAuthToken: state.auth.authToken !== null,
  // loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Dashboard)
// withRouter
