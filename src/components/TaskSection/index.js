import React, { Component } from 'react'
import './index.css'

import TaskContainer from '../TaskContainer/index'
import TaskForm from '../TaskForm/index'

import { connect } from 'react-redux'
import { addTask } from '../../actions'

export class TaskSection extends Component {
  formHandler(data) {
    this.props.dispatch(addTask(data))
  }

  render() {
    let filterType =
      this.props.currentFilter === 'all' ? this.props.allTasks : this.props.visible

    return (
      <section className="w-full">
        <h2 className="mb-8 capitalize">{this.props.currentFilter}</h2>
        <TaskForm onSubmit={data => this.formHandler(data)} />

        <article className="">
          <div className="flex mb-8">
            <h3>Tasks</h3>
          </div>
          <TaskContainer items={filterType} />
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  allTasks: state.allTasks,
  visible: state.visible,
  currentFilter: state.currentFilter
})

export default connect(mapStateToProps)(TaskSection)
