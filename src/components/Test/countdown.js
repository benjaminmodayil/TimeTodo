import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCheckbox } from '../../actions'
import convertTime from './convert-time'
var dayjs = require('dayjs')

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.startTime * 10,
      timerActive: false,
      isPaused: false
    }
    this.tick = this.tick.bind(this)
    this.stopTime = Date.now() + props.startTime * 1000
    this.isPaused = this.props.isPaused
  }

  componentDidMount() {
    this.time = setInterval(this.tick, 100)
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  startTimer() {
    this.time = setInterval(this.tick, 100)
  }

  stopTimer() {
    clearInterval(this.time)
  }

  componentDidUpdate() {
    if (!this.props.isDone) {
      if (this.state.isPaused && !this.state.timerActive) {
        clearInterval(this.time)
        this.setState({ timerActive: true })
      } else if (!this.state.isPaused && this.state.timerActive) {
        this.stopTime = Date.now() + this.state.time * 100
        this.startTimer()
        this.setState({ timerActive: false })
      }
    } else {
      clearInterval(this.time)
      let time = convertTime(
        this.props.startTime / 10 * 10000 - Math.floor(this.state.time / 10) * 1000
      )

      time = time.split(':')
      let newTask = {
        ...this.props.task,
        timeToComplete: [Number(time[0]), Number(time[1])],
        completedOn: dayjs()
      }
      this.props.dispatch(toggleCheckbox(newTask))
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isPaused) {
      return {
        isPaused: nextProps.isPaused,
        timerActive: false
      }
    } else {
      return {
        isPaused: nextProps.isPaused
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

  clear(time) {
    clearInterval(this.time)
    this.setState({
      pausedTime: time
    })
  }
  render() {
    const time = this.state.time / 10
    const seconds = Math.floor(time)

    return <span className="text-center text-big">{convertTime(seconds * 1000)}</span>
  }
}

export default connect()(CountDown)
