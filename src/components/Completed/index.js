import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskContainer from '../TaskContainer/index'

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
  completed: state.protectedData.completed
})

export default connect(mapStateToProps)(Completed)
