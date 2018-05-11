import React from 'react'
import Completed from '../Completed/index.js'
import Filters from '../Filters/index.js'
import Log from '../Log/index.js'
import NavBar from '../NavBar/index.js'
import Tasks from '../Tasks/index.js'
import './index.css'

export default props => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto">
        <h1 className="screenreader-only">Task Dashboard</h1>
        <Filters categories={props.filters} />
        <div className="flex justify-between -mx-2 flex-col md-flex-row">
          <div className="flex justify-between flex-col max-w-sm md-max-w-full w-full md-w-1-2 px-2 mx-auto">
            <Tasks onClick={props.onClick} />
            <Completed onClick={props.onClick} />
          </div>
          <Log />
        </div>
      </main>
    </div>
  )
}
