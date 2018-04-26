import React, { Component } from 'react'
import './index.css'

import NewTask from '../../images/icons/icon-new.svg'
import TaskItems from '../TaskItems/index'
import TaskForm from '../TaskForm/index'

import { connect } from 'react-redux'

export class Tasks extends Component {
  render() {
    return (
      <section className="w-full">
        <h2 className="mb-16">Inbox</h2>
        <TaskForm />
        <article className="">
          <div className="flex mb-8">
            <button>
              <img src={NewTask} alt="Add a new task" />
            </button>
            <h3>Tasks</h3>
          </div>
          <TaskItems items={this.props.tasks} />
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(Tasks)
