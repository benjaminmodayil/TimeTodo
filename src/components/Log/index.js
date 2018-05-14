import React from 'react'
import './index.css'

export default props => {
  let completed = props.logs.map((i, index) => {
    // console.log(i)
    let message = Number.isInteger(i.timeToComplete[0])
      ? `${i.timeToComplete[0]} mins ${i.timeToComplete[1]} secs`
      : 'N/A'
    return (
      <div className="flex p-2 rounded" key={index}>
        <span>{i.title}</span>
        <span>11/16</span>
        <span>{message}</span>
      </div>
    )
  })
  return (
    <section className="w-full md-w-1-2 px-2 mx-auto">
      <div className="flex">
        <h2 className="mb-8">Time Logged</h2>
        <nav>
          <a href="">Graph</a>
          <a href="">Log</a>
        </nav>
      </div>

      <div className="log__table">
        <div className="italic flex px-2 py-1">
          <span>Title</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        {completed}
      </div>
    </section>
  )
}
