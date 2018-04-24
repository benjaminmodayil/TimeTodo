import React from 'react'
import './index.css'

export default props => {
  let { categories } = props
  categories = categories.map((item, index) => (
    <li key={index}>
      <a className="text-black no-underline hover-underline" href={'#' + item}>
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
