import React, { Component } from 'react'
import './index.css'
import TaskDropdown from '../TaskDropdown'

import { connect } from 'react-redux'
import { updateTask } from '../../actions'

import Play from '../../images/icons/icon-play.svg'
import TaskForm from '../TaskForm/index'

export class TaskContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  edit = taskID => {
    this.setState({
      isEditing: true
    })
  }

  formHandler(data) {
    this.props.dispatch(updateTask(data))

    this.setState({
      isEditing: false
    })
  }

  render() {
    let strike = this.props.item.status ? 'line-through italic opacity-75' : ''
    let check = this.props.item.status ? true : ''
    let playTemplate = !check ? (
      <button className="w-6 mr-2" onClick={() => this.props.taskPasser(this.props.item)}>
        <img src={Play} alt="Start timer for task" />
      </button>
    ) : (
      ''
    )
    if (!this.state.isEditing) {
      return (
        <li
          className={
            strike +
            ' tw-task__list-item flex mb-4 border-b border-black-lightest pb-2 items-center'
          }
        >
          <label
            htmlFor={'check-' + this.props.item._id}
            className="control checkbox w-6 h-6"
          >
            <input
              type="checkbox"
              name={'check-' + this.props.item._id}
              id={'check-' + this.props.item._id}
              checked={check}
              onChange={e => this.props.toggleHandler(e, this.props.item)}
            />
            <span className="control-indicator" />
          </label>
          <p>{this.props.item.title}</p>
          {playTemplate}
          <TaskDropdown item={this.props.item} edit={taskID => this.edit(taskID)} />
        </li>
      )
    } else {
      return (
        <li>
          <TaskForm
            id={this.props.item._id}
            minutes={this.props.item.time}
            title={this.props.item.title}
            filter={this.props.item.filter}
            buttonText="edit"
            onSubmit={(e, data) => this.formHandler(e, data)}
          />
        </li>
      )
    }
  }
}

export default connect()(TaskContainer)
