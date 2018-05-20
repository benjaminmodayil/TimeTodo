import React from 'react'
import './index.css'
var dayjs = require('dayjs')

export default props => {
  let completed = props.logs.map((i, index) => {
    let message = Number.isInteger(i.timeToComplete[0])
      ? `${i.timeToComplete[0]} mins ${i.timeToComplete[1]} secs`
      : 'N/A'
    let date = dayjs(i.completedOn).format('MM-DD')

    return (
      <div className="flex p-2 rounded" key={index}>
        <span>{i.title}</span>
        <span>{date}</span>
        <span>{message}</span>
      </div>
    )
  })

  let renderValue =
    completed > 0 ? (
      completed
    ) : (
      <p className="italic text-center mt-4"> No items found. </p>
    )
  return (
    <section className="w-full md-w-1-2 px-2 mx-auto">
      <div className="flex">
        <h2 className="mb-8">Time Logged</h2>
      </div>

      <div className="log__table">
        <div className="italic flex px-2 py-1">
          <span>Title</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        {renderValue}
      </div>
    </section>
  )
}
// <nav>
// <a href="">Graph</a>
// <a href="">Log</a>
// </nav>
