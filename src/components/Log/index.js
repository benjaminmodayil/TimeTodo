import React from 'react'
import './index.css'

export default () => {
  return (
    <section className="w-full md-w-1-2 px-2 mx-auto">
      <div className="flex">
        <h2>Time Logged</h2>
        <nav>
          <a href="">Graph</a>
          <a href="">Log</a>
        </nav>
      </div>

      <div className="log__table">
        <div className="italic">
          <span>Title</span>
          <span>Date</span>
          <span>Time</span>
        </div>

        <div>
          <span>Chat with Rihya about new leads.</span>
          <span>11/16</span>
          <span>2hrs 35mins</span>
        </div>
      </div>
    </section>
  )
}
