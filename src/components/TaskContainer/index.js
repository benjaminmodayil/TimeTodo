import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startTimer, toggleCheckbox } from '../../actions/index'
import Task from '../Task'
import './index.css'
var dayjs = require('dayjs')

class TaskContainer extends Component {
  taskPasser = task => {
    this.props.dispatch(startTimer(task))
  }

  toggleCheckbox = (e, task) => {
    if (task.status) {
      this.props.dispatch(toggleCheckbox({ ...task, completedOn: dayjs() }))
    } else {
      this.props.dispatch(toggleCheckbox({ ...task, completedOn: null }))
    }
  }

  render() {
    let filterType =
      this.props.currentFilter === 'all' ? this.props.allTasks : this.props.visible
    let items = filterType.map(item => {
      return (
        // if task.id matches, repalce with
        // li > form
        <Task
          item={item}
          key={item._id}
          taskPasser={task => this.taskPasser(task)}
          toggleHandler={(e, task) => this.toggleCheckbox(e, task)}
        />
      )
    })

    // <button onClick={this.edit(taskId)} />

    items =
      items.length > 0 ? (
        <ul className="list-reset flex flex-col w-full max-w-sm">{items}</ul>
      ) : (
        <p className="italic">No items found.</p>
      )
    return <React.Fragment>{items}</React.Fragment>
  }
}

const mapStateToProps = state => ({
  allTasks: state.protectedData.allTasks,
  visible: state.protectedData.visible,
  currentFilter: state.protectedData.currentFilter
})

export default connect(mapStateToProps)(TaskContainer)
