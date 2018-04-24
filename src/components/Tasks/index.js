import React, { Component } from 'react'

import './index.css'
import NewTask from '../../images/icons/icon-new.svg'
import TaskItems from '../TaskItems/index'

export default class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          title: 'Ask Michael about lead generation',
          status: 'incomplete',
          time: { hour: 1, minutes: 35 }
        }
      ]
    }
  }

  render() {
    return (
      <section className="max-w-sm md-max-w-full w-full md-w-1-2 px-2 mx-auto">
        <h2 className="mb-16">Inbox</h2>
        <article className="">
          <div className="flex mb-8">
            <button>
              <img src={NewTask} alt="Add a new task" />
            </button>
            <h3>Tasks</h3>
          </div>

          <TaskItems items={this.state.tasks} onClick={this.props.onClick} />
        </article>
      </section>
    )
  }
}
