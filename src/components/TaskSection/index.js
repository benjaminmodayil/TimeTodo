import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions/index'
import TaskContainer from '../TaskContainer/index'
import TaskForm from '../TaskForm/index'

export class TaskSection extends Component {
  formHandler(data) {
    console.log('dispatching task!', data)
    this.props.dispatch(addTask(data))
    // console.log(this.props.dispatch(addTask(data)))
  }

  render() {
    let filterType =
      this.props.currentFilter === 'all' ? this.props.allTasks : this.props.visible
    return (
      <section className="w-full mb-16">
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
  allTasks: state.protectedData.allTasks,
  visible: state.protectedData.visible,
  currentFilter: state.protectedData.currentFilter
})

export default connect(mapStateToProps)(TaskSection)
