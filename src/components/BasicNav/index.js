import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BasicNav extends Component {
  render() {
    return (
      <nav className="bg-red py-2">
        <Link
          to="/"
          className="block text-white text-center text-2xl no-underline hover-underline"
        >
          TaskToDo
        </Link>
      </nav>
    )
  }
}
