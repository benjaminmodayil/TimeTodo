import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class TaskForm extends Component {
  getValues(e) {
    e.preventDefault()
    let data = {
      _id: this.props.id,
      title: this.textInput.value,
      time: this.numInput.value,
      status: false,
      filter: this.filterInput.value
    }
    e.target.reset()
    return data
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
      <form
        className="tw-task-form max-w-sm rounded py-2 mb-8"
        tabIndex="0"
        onSubmit={e => this.props.onSubmit(this.getValues(e))}
      >
        <div className="-mx-2">
          <div className="flex justify-between w-full px-2 py-2">
            <div className="w-2-3 px-2">
              <label htmlFor="title" className="screenreader-only">
                Title
              </label>
              <input
                className="tw-input-borders bg-transparent"
                id="title"
                placeholder="title"
                type="text"
                name="title"
                required
                defaultValue={this.props.title}
                ref={input => (this.textInput = input)}
              />
            </div>

            <div className="w-1-3 px-2">
              <label htmlFor="time" className="screenreader-only">
                Minutes
              </label>
              <input
                className="tw-input-borders bg-transparent"
                placeholder="time"
                type="number"
                name="time"
                min="1"
                id="time"
                defaultValue={this.props.minutes}
                required
                ref={input => (this.numInput = input)}
              />
            </div>
          </div>
        </div>
        <div className="-mx-2">
          <div className="mx-auto flex w-full px-2 py-2 items-center">
            <label htmlFor="filter" />
            <div className="select w-2-3 px-2">
              <select
                aria-label="Filter Menu"
                name="filter"
                id="filter"
                defaultValue={this.props.filter}
                ref={input => (this.filterInput = input)}
              >
                {filterOptions}
              </select>
            </div>

            <span className="px-2 w-1-3">
              <button
                type="submit"
                className="max-w-48 w-full py-2 bg-green text-white text-center rounded"
              >
                {this.props.buttonText || 'add'}
              </button>
            </span>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  currentTask: state.protectedData.currentTask,
  timer: state.protectedData.timer,
  filters: state.protectedData.filters,
  logs: state.protectedData.logs
})
export default connect(mapStateToProps)(TaskForm)
