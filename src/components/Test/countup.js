import React, { Component } from 'react'
import convertTime from './convert-time'

class CountUp extends Component {
  constructor() {
    super()
    this.residual = 0
    this.startTime = Date.now()
    this.state = { time: 0 }
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({ time: Date.now() - this.startTime + this.residual })
  }

  resetTimer() {
    const lastStamp = this.state.time
    this.residual = lastStamp
  }

  pauseTimer() {
    clearInterval(this.timer)
    this.resetTimer()
  }

  startTimer() {
    this.startTime = Date.now()
    this.timer = setInterval(this.tick, 1000)
  }

  render() {
    return (
      <div className="container">
        <span className="text-center">{convertTime(this.state.time)}</span>
        <button onClick={this.pauseTimer.bind(this)}>pause</button>
        <button onClick={this.startTimer.bind(this)}>start</button>
      </div>
    )
  }
}
export default CountUp

// clear interval, "pausing it", store to state, then redish it out on click event
