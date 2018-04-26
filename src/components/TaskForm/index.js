import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions'

class TaskForm extends Component {
  formHandler(e) {
    e.preventDefault()
    this.props.dispatch(
      addTask({
        title: this.textInput.value,
        time: this.numInput.value,
        status: this.booleanInput.checked
      })
    )
  }

  render() {
    return (
      <form onSubmit={e => this.formHandler(e)}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          ref={input => (this.textInput = input)}
        />

        <label htmlFor="time">Minutes</label>
        <input
          type="number"
          name="time"
          id="time"
          required
          ref={input => (this.numInput = input)}
        />

        <label htmlFor="status" />
        <input
          type="checkbox"
          name="status"
          id="status"
          ref={input => (this.booleanInput = input)}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  currentTask: state.currentTask,
  timer: state.timer,
  filters: state.filters,
  logs: state.logs
})
export default connect(mapStateToProps)(TaskForm)
