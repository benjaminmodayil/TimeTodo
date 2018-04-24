import React, { Component } from 'react'
import './index.css'
import Controls from '../Controls/index'

import CountDown from './countdown'
import CountUp from './countup'

class Timer extends Component {
  render() {
    let startTime = this.props.startTime || 1500
    let type =
      this.props.type === 'countdown' ? <CountDown startTime={startTime} /> : <CountUp />

    return (
      <main className="bg-black">
        <header className="flex justify-center items-center text-xl bg-red text-white">
          <p>Email Michael with the details.</p>
        </header>
        <section className="timer-and-controls flex flex-col justify-center text-white">
          <div className="text-center mb-16">{type}</div>
          <Controls />
        </section>
        <section className="timer-queue flex justify-center text-white">
          <ul>
            <li className="list-reset text-lg opacity-50">
              Lorem ipsum dolor sit amet, natum mollis.
            </li>
            <li className="list-reset text-lg opacity-50">
              Lorem ipsum dolor sit amet, natum mollis.
            </li>
            <li className="list-reset text-lg opacity-50">
              Lorem ipsum dolor sit amet, natum mollis.
            </li>
          </ul>
        </section>
        <div className="buttons flex justify-center max-w-md mx-auto w-full">
          <button className="bg-red text-white w-1-2 mr-2 px-2 rounded text-xl">
            Cancel
          </button>
          <button className="bg-green text-white w-1-2 ml-2 px-2 rounded text-xl">
            Done
          </button>
        </div>
      </main>
    )
  }
}

export default Timer
