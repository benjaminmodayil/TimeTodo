import React, { Component } from 'react'
import './index.css'

import TaskContainer from '../TaskContainer/index'

import { connect } from 'react-redux'

export class Completed extends Component {
  render() {
    return (
      <section className="w-full">
        <article className="">
          <h3 className="mb-8">Completed</h3>
          <TaskContainer items={this.props.completed} />
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  completed: state.completed
})

export default connect(mapStateToProps)(Completed)
