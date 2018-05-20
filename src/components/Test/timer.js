import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelTimer } from '../../actions'
import Controls from '../Controls/index'
import CountDown from './countdown'
import CountUp from './countup'
import './index.css'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: null,
      isPaused: false,
      done: false
    }
    this.playPause = this.playPause.bind(this)
  }
  cancel() {
    this.props.dispatch(cancelTimer())
  }

  done(task) {
    this.setState({
      done: true
    })
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
  // click done button -> send a signal to pause the timer, done button acually changes state in timerjs to a true/false value, it then passes that state into countdown and into an if/else statement that pauses state and returns the latest time value

  render() {
    let startTime = this.props.currentTask.time * 60 || 1500
    let type =
      this.props.type === 'countdown' ? (
        <CountDown
          task={this.props.currentTask}
          update={currentTime => this.updateTime(currentTime)}
          startTime={startTime}
          isPaused={this.state.isPaused}
          isDone={this.state.done}
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
            onClick={() => this.done()}
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
  currentTask: state.protectedData.currentTask,
  visible: state.protectedData.visible
})

export default connect(mapStateToProps)(Timer)
