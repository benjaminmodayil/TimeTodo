import React, { Component } from 'react'
import convertTime from './convert-time'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.startTime * 10,
      timerActive: false,
      isPaused: false
    }
    //added flag, check stack overflow tab.
    this.tick = this.tick.bind(this)
    this.stopTime = Date.now() + props.startTime * 1000
    // this.stopTime = Date.now() + this.state.time * 100
    // I think Date.now() is a constant reference to when it was initialized, so that's why time is always skipping when toggling the playhead
    // map this.StopTime to state and update
    // This Date.now() might be causing issues when stopping...
    this.isPaused = this.props.isPaused
  }

  componentDidMount() {
    this.time = setInterval(this.tick, 100)
    // this.setState({timerActive: true})
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  // 1. Clear Interval to pause timer
  // 2. Set time in state.
  // 3. figure out how to attribute new time to a new timer
  // 4. see if it continues from the last saved time
  startTimer() {
    this.time = setInterval(this.tick, 100)
  }

  stopTimer() {
    clearInterval(this.time)
    this.setState({ timerActive: false })
  }

  componentDidUpdate() {
    if (this.state.isPaused && !this.state.timerActive) {
      clearInterval(this.time)
      console.log('is paused', convertTime(Math.floor(this.state.time / 10) * 1000))
      this.setState({ timerActive: true })
    } else if (!this.state.isPaused && this.state.timerActive) {
      // //  this should test if the timer is already running
      this.stopTime = Date.now() + this.state.time * 100
      this.startTimer()
      console.log('is going', convertTime(Math.floor(this.state.time / 10) * 1000))
      this.setState({ timerActive: false })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isPaused) {
      // console.log(prevState)
      return {
        isPaused: nextProps.isPaused,
        timerActive: false
      }
    } else {
      // console.log('fuck')
      // console.log(nextProps.isPaused)
      return {
        isPaused: nextProps.isPaused
        // timerActive: true
      }
    }
  }
  tick() {
    const now = Date.now()
    if (this.stopTime - now <= 0) {
      this.setState({ time: 0 })
      clearInterval(this.time)
    } else {
      this.setState({ time: Math.round((this.stopTime - now) / 100) })
    }
  }

  playPause() {}

  clear(time) {
    clearInterval(this.time)
    this.setState({
      pausedTime: time
    })
    console.log('✔️', this.state.pausedTime)
  }
  render() {
    const time = this.state.time / 10
    const seconds = Math.floor(time)
    // console.log(this.props.isPaused)
    // if (this.props.isPaused) {
    // this.clear(convertTime(seconds * 1000))

    //   console.log(this.state.pausedTime)
    //   return <span className="text-center text-big">{convertTime(seconds * 1000)}</span>
    // } else {
    // setInterval(this.tick, 100)
    return <span className="text-center text-big">{convertTime(seconds * 1000)}</span>
    // }
  }
}

export default CountDown
