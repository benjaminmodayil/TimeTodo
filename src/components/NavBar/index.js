import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

// import Menu from '../../images/icons/icon-menu-user.svg'
export class NavBar extends Component {
  render() {
    return (
      <nav className="bg-red mb-16">
        <div className="nav-inner container mx-auto flex justify-between items-center px-2 md-px-0 py-2">
          <a href="/" className={'text-xl font-semibold ' + sharedStyles}>
            TaskTodo
          </a>
          <div className="relative h-6">
            <a
              // {...getItemProps({ item })}
              href={'#' + 'logout'}
              onClick={e => {
                e.preventDefault()
                this.props.dispatch(logout())
              }}
              key={'logout'}
              className="text-white px-4 text-center py-2 mb-1"
              style={{ cursor: 'pointer' }}
            >
              {'logout'}
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

let sharedStyles = 'my-0 text-white no-underline hover-underline'

// 'settings', 'contact',
// <a href="/logsheet" className={sharedStyles}>
// Log sheet
// </a>
export default connect()(NavBar)
