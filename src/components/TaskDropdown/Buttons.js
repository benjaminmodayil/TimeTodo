import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../actions'

export class Buttons extends Component {
  deleteItem = taskID => this.props.dispatch(deleteTask(taskID))

  render() {
    console.log(this.props)
    return (
      <div style={{ display: 'block' }} className="dropdown-menu">
        <button
          {...this.props.itemProps}
          className="dropdown-item mb-4"
          data-id={this.props._id}
          onClick={() => this.deleteItem(this.props._id)}
        >
          delete
        </button>

        <button
          {...this.props.itemProps}
          className="dropdown-item"
          data-id={this.props._id}
          onClick={() => this.props.edit(this.props._id)}
        >
          edit
        </button>
      </div>
    )
  }
}

export default connect()(Buttons)
