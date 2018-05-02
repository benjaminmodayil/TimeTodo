import React, { Component } from 'react'
import './index.css'

import NewTask from '../../images/icons/icon-new.svg'
import TaskItems from '../TaskItems/index'
import TaskForm from '../TaskForm/index'

import { connect } from 'react-redux'

export class Tasks extends Component {
  render() {
    let filterType = this.props.visible

    return (
      <section className="w-full">
        <h2 className="mb-16 capitalize">{this.props.currentFilter}</h2>
        <TaskForm />
        <article className="">
          <div className="flex mb-8">
            <button>
              <img src={NewTask} alt="Add a new task" />
            </button>
            <h3>Tasks</h3>
          </div>
          <TaskItems items={filterType} />
        </article>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  allTasks: state.allTasks,
  visible: state.visible,
  currentFilter: state.currentFilter
})

export default connect(mapStateToProps)(Tasks)
