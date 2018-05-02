import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import { sortFilter } from '../../actions'

export class Filters extends Component {
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this)
  }

  filter(e) {
    this.props.dispatch(sortFilter(e.currentTarget.text))
  }
  render() {
    let { categories } = this.props
    categories = categories.map((item, index) => (
      <li key={index}>
        <a
          className="text-black no-underline hover-underline"
          href={'#' + item}
          onClick={e => this.filter(e)}
        >
          {item}
        </a>
      </li>
    ))

    return (
      <nav className="mb-16 flex justify-end">
        <ul className="max-w-sm w-full flex justify-between list-reset">{categories}</ul>
      </nav>
    )
  }
}

export default connect()(Filters)
