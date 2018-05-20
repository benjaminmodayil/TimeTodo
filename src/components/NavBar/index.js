import React from 'react'
import MenuDropdown from '../MenuDropdown'
import './index.css'

export default () => {
  return (
    <nav className="bg-red mb-16">
      <div className="nav-inner container mx-auto flex justify-between items-center px-2 md-px-0 py-2">
        <a href="/" className={'text-xl font-semibold ' + sharedStyles}>
          TaskTodo
        </a>
        <div className="relative w-6 h-6">
          <MenuDropdown items={['logout']} />
        </div>
      </div>
    </nav>
  )
}

let sharedStyles = 'my-0 text-white no-underline hover-underline'

// 'settings', 'contact',
// <a href="/logsheet" className={sharedStyles}>
// Log sheet
// </a>
