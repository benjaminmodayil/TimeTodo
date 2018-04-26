import React, { Component } from 'react'
import './index.css'

import TaskItems from '../TaskItems/index'

import { connect } from 'react-redux'

export class Completed extends Component {
  render() {
    return (
      <section className="w-full">
        <article className="">
          <h3 className="mb-8">Completed</h3>
          <TaskItems items={this.props.completed} />
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  completed: state.completed
})

export default connect(mapStateToProps)(Completed)
