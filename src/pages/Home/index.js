import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Image from '../../images/illustrations/notes-docs.svg'

export class Home extends Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />
    }

    return (
      <React.Fragment>
        <main className="bg-red py-16 md-py-0">
          <div className="container p-4 md-p-2 lg-p-0 text-white mx-auto md-h-screen">
            <div className="flex flex-col md-flex-row justify-between md--mx-8 lg--mx-16 items-center h-screen">
              <div className="md-flex md-flex-col mb-8 md-mb-0 md-w-1-2 md-px-8 lg-px-16 max-w-md">
                <h1 className="mt-0 text-5xl font-semibold leading-tight text-center md-text-left">
                  <span className="block text-xl italic font-normal">Do you have a </span>TaskToDo
                  <span className="block md-inline md-ml-4 text-xl italic">?</span>
                </h1>
                <p className="leading-normal px-2 md-px-0">
                  TaskToDo is an application that combines the featuers of a todo list
                  with a pomodoro timer. It lets you measure the time it might take to do
                  a task and then activate that task for a timed session. After completing
                  the task, you'll get a log of the time you used to complete the task.
                </p>
                <nav className="flex justify-end mt-8">
                  <Link
                    className="py-2 px-4 text-white bg-green rounded hover-text-white hover-bg-green-dark no-underline"
                    to="/signup"
                  >
                    Signup
                  </Link>
                  <Link
                    className="py-2 px-4 text-white bg-transparent rounded border border-white hover-border-transparent hover-text-red hover-bg-white no-underline ml-4"
                    to="/login"
                  >
                    Login
                  </Link>
                </nav>
              </div>
              <div className="flex md-w-1-2 md-px-8 lg-px-16 max-w-md">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Home)
