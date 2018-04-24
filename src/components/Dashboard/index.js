import React from 'react'
import './index.css'

import NavBar from '../NavBar/index.js'

import Filters from '../Filters/index.js'
import Tasks from '../Tasks/index.js'
import Log from '../Log/index.js'

export default props => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto">
        <h1 className="screenreader-only">Task Dashboard</h1>
        <Filters categories={props.filters} />
        <div className="flex justify-between -mx-2 flex-col md-flex-row">
          <Tasks onClick={props.onClick} />
          <Log />
        </div>
      </main>
    </div>
  )
}
