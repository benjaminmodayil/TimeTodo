import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { startTimer, toggleCheckbox } from '../../actions'

import Play from '../../images/icons/icon-play.svg'
import Options from '../../images/icons/icon-options.svg'

class TaskItems extends Component {
  constructor(props) {
    super(props)
    this.taskPasser = this.taskPasser.bind(this)
  }

  taskPasser(task) {
    this.props.dispatch(startTimer(task))
  }

  toggleCheckbox(e, task) {
    this.props.dispatch(toggleCheckbox(task))
  }

  render() {
    let items = this.props.items.map((item, index) => {
      let strike = item.status ? 'line-through italic opacity-75' : ''
      let check = item.status ? true : ''
      let playTemplate = !check ? (
        <button onClick={() => this.taskPasser(item)}>
          <img src={Play} alt="Start timer for task" />
        </button>
      ) : (
        ''
      )
      return (
        <li className={strike + ' tw-task__list-item flex'} key={index}>
          <input
            type="checkbox"
            name=""
            id=""
            checked={check}
            onChange={e => this.toggleCheckbox(e, item)}
          />
          <p>{item.title}</p>

          {playTemplate}
          <button>
            <img src={Options} alt="View options for task" />
          </button>
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
