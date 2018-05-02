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
        status: this.booleanInput.checked,
        filter: this.filterInput.value
      })
    )
  }

  render() {
    let filterOptions = this.props.filters.map((name, index) => {
      let preSelected = index === 0
      if (name === 'all') return ''
      return (
        <option key={index} value={name} defaultValue={preSelected}>
          {name}
        </option>
      )
    })

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

        <label htmlFor="filter" />
        <select name="filter" id="filter" ref={input => (this.filterInput = input)}>
          {filterOptions}
        </select>

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
  currentTask: state.currentTask,
  timer: state.timer,
  filters: state.filters,
  logs: state.logs
})
export default connect(mapStateToProps)(TaskForm)
