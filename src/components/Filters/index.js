import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortFilter } from '../../actions'

export class Filters extends Component {
  filter = e => {
    this.props.dispatch(sortFilter(e.currentTarget.text))
  }

  render() {
    let { categories } = this.props
    categories = categories.map((item, index) => {
      let highlightClass =
        this.props.currentFilter === item
          ? 'bg-red text-white px-4 rounded'
          : 'text-black no-underline hover-underline'

      return (
        <li key={index}>
          <a className={highlightClass} href={'#' + item} onClick={e => this.filter(e)}>
            {item}
          </a>
        </li>
      )
    })

    return (
      <nav className="mb-16 flex justify-end">
        <ul className="max-w-sm w-full flex justify-between list-reset">{categories}</ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  currentFilter: state.currentFilter
})

export default connect(mapStateToProps)(Filters)
