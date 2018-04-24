import './index.css'

import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: true,
      time: {
        minutes: 25,
        seconds: 13
      }
    }
  }
  componentDidMount = () => {}

  componentWillUnmount() {}

  countdown() {
    let { time } = this.state
    if (time.seconds !== 0) {
      this.setState(prevState => ({
        time: { minutes: prevState.time.minutes, seconds: prevState.time.seconds - 1 }
      }))
    }
    if (time.minutes > 0 && time.seconds === 0) {
      this.setState(prevState => ({
        time: { minutes: prevState.time.minutes - 1, seconds: 59 }
      }))
    }
  }

  startTimer() {
    this.state.paused ? this.setState({ paused: false }) : this.setState({ paused: true })

    this.checkTimer()
  }

  pauseTimer() {
    clearInterval(this.timerStatus)
    console.log(this.state.time)
  }

  checkTimer() {
    console.log('ya feel', this.state.paused, this.state.time)
    let timer
    if (this.state.paused) {
      timer = setInterval(this.countdown.bind(this), 1000)
    } else if (!this.state.paused) {
      clearInterval(this.countdown.bind(this))
    }
  }

  render() {
    return (
      <div className="px-32 min-h-full min-w-full">
        <div className="delete">
          <span className="hours">{this.state.time.hours}:</span>
          <span className="minutes">{this.state.time.minutes}:</span>
          <span className="seconds" onChange={this.checkTimer}>
            {this.state.time.seconds}
          </span>
        </div>
        <button onClick={this.startTimer.bind(this)}>Start</button>
        <button onClick={this.pauseTimer.bind(this)}>Pause</button>
      </div>
    )
  }
}
