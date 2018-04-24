import React from 'react'
import './index.css'
import Menu from '../../images/icons/icon-menu.svg'
import User from '../../images/icons/icon-menu-user.svg'

export default () => {
  return (
    <nav className="bg-red mb-16">
      <div className="nav-inner container mx-auto flex justify-between items-center px-2 md-px-0 py-2">
        <button>
          <img src={Menu} alt="Menu Button" />
        </button>
        <a
          href="/"
          className="my-0 text-white text-xl font-semibold no-underline hover-underline"
        >
          TaskTodo
        </a>
        <button>
          <img src={User} alt="User Menu" />
        </button>
      </div>
    </nav>
  )
}
