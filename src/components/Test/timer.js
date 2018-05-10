import React, { Component } from 'react'
import './index.css'
import Controls from '../Controls/index'

import CountDown from './countdown'
import CountUp from './countup'

import { connect } from 'react-redux'
import { cancelTimer, toggleCheckbox } from '../../actions'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: null,
      isPaused: false
      // currentTask: this.props.currentTask
    }
    // console.log(this.state.currentTask)
    this.playPause = this.playPause.bind(this)
  }
  cancel() {
    this.props.dispatch(cancelTimer())
  }

  // addTimeToTask(time, task) {

  //   let newTask;
  //     this.done(newTask)
  // }

  done(task) {
    this.props.dispatch(toggleCheckbox(task))
  }

  updateTime(currentTime) {
    this.setState({
      currentTime
    })
  }

  playPause = () => {
    this.setState({
      isPaused: !this.state.isPaused
    })
  }

  render() {
    let startTime = this.props.currentTask.time * 60 || 1500
    let type =
      this.props.type === 'countdown' ? (
        <CountDown
          update={currentTime => this.updateTime(currentTime)}
          startTime={startTime}
          isPaused={this.state.isPaused}
          // pass in state as a prop // isPaused, then inside will react based on controls
        />
      ) : (
        <CountUp />
      )
    let tasks = this.props.visible.map((item, index) => (
      <li className="list-reset text-center text-lg opacity-50 mb-4">{item.title}</li>
    ))

    return (
      <main className="bg-black">
        <header className="flex justify-center items-center text-xl bg-red text-white">
          <p>{this.props.currentTask.title}</p>
        </header>
        <section className="timer-and-controls flex flex-col justify-center text-white">
          <div className="text-center mb-16">{type}</div>
          <Controls onPause={this.playPause} />
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
// change from all tasks to filtered

const mapStateToProps = state => ({
  currentTask: state.currentTask,
  visible: state.visible
})

export default connect(mapStateToProps)(Timer)
