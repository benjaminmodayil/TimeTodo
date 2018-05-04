import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { startTimer, toggleCheckbox } from '../../actions'
import TaskDropdown from '../TaskDropdown'

import Play from '../../images/icons/icon-play.svg'

class TaskItems extends Component {
  taskPasser = task => {
    this.props.dispatch(startTimer(task))
  }

  toggleCheckbox = (e, task) => {
    this.props.dispatch(toggleCheckbox(task))
  }
  items = ['Bananas', 'Oranges', 'Apples', 'Other']

  render() {
    let items = this.props.items.map((item, index) => {
      let strike = item.status ? 'line-through italic opacity-75' : ''
      let check = item.status ? true : ''
      let playTemplate = !check ? (
        <button className="w-6 mr-2" onClick={() => this.taskPasser(item)}>
          <img src={Play} alt="Start timer for task" />
        </button>
      ) : (
        ''
      )

      return (
        <li
          className={
            strike +
            ' tw-task__list-item flex mb-4 border-b border-black-lightest pb-2 items-center'
          }
          key={index}
        >
          <label htmlFor={'check-' + item._id} className="control checkbox w-6 h-6">
            <input
              type="checkbox"
              name={'check-' + item._id}
              id={'check-' + item._id}
              checked={check}
              onChange={e => this.toggleCheckbox(e, item)}
            />
            <span className="control-indicator" />
          </label>

          <p>{item.title}</p>

          {playTemplate}

          <TaskDropdown item={item} />
        </li>
      )
    })

    items =
      items.length > 0 ? (
        <ul className="list-reset flex flex-col w-full max-w-sm">{items}</ul>
      ) : (
        <p className="italic">No items found.</p>
      )
    return <React.Fragment>{items}</React.Fragment>
  }
}

export default connect()(TaskItems)
