import React, { Component } from 'react'
import convertTime from './convert-time'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = { time: props.startTime * 10 }
    this.tick = this.tick.bind(this)
    this.stopTime = Date.now() + props.startTime * 1000
  }

  componentDidMount() {
    this.time = setInterval(this.tick, 100)
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  tick() {
    const now = Date.now()
    if (this.stopTime - now <= 0) {
      this.setState({ time: 0 })
      clearInterval(this.time)
    } else this.setState({ time: Math.round((this.stopTime - now) / 100) })
  }

  render() {
    const time = this.state.time / 10
    const seconds = Math.floor(time)
    return <span className="text-center text-big">{convertTime(seconds * 1000)}</span>
  }
}

export default CountDown
