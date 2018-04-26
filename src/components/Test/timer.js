import React, { Component } from 'react'
import './index.css'
import Controls from '../Controls/index'

import CountDown from './countdown'
import CountUp from './countup'

import { connect } from 'react-redux'
import { cancelTimer, doneTimer } from '../../actions'

class Timer extends Component {
  cancel() {
    this.props.dispatch(cancelTimer())
  }

  done(task) {
    this.props.dispatch(doneTimer(task))
  }

  render() {
    let startTime = this.props.currentTask.time * 60 || 1500
    let type =
      this.props.type === 'countdown' ? <CountDown startTime={startTime} /> : <CountUp />
    let tasks = this.props.tasks.map((item, index) => (
      <li className="list-reset text-center text-lg opacity-50 mb-4">{item.title}</li>
    ))

    return (
      <main className="bg-black">
        <header className="flex justify-center items-center text-xl bg-red text-white">
          <p>{this.props.currentTask.title}</p>
        </header>
        <section className="timer-and-controls flex flex-col justify-center text-white">
          <div className="text-center mb-16">{type}</div>
          <Controls />
        </section>
        <section className="timer-queue flex justify-center text-white">
          <ul>{tasks}</ul>
        </section>
        <div className="buttons flex justify-center max-w-md mx-auto w-full">
          <button
            className="bg-red text-white w-1-2 mr-2 px-2 rounded text-xl"
            onClick={this.cancel.bind(this)}
          >
            Cancel
          </button>
          <button
            className="bg-green text-white w-1-2 ml-2 px-2 rounded text-xl"
            onClick={() => this.done(this.props.currentTask)}
          >
            Done
          </button>
        </div>
      </main>
    )
  }
}
//////////
// actions
/////////
// cancel ✅
// done
// get list except current

const mapStateToProps = state => ({
  currentTask: state.currentTask,
  tasks: state.tasks
})

export default connect(mapStateToProps)(Timer)
