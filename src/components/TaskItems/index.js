import React from 'react'
import './index.css'

import Play from '../../images/icons/icon-play.svg'
import Options from '../../images/icons/icon-options.svg'

export default props => {
  let items = props.items.map((item, index) => (
    <li className="tw-task__list-item flex" key={index}>
      <input type="checkbox" name="" id="" />
      <p>{item.title}</p>
      <button onClick={props.onClick}>
        <img src={Play} alt="Start timer for task" />
      </button>
      <button>
        <img src={Options} alt="View options for task" />
      </button>
    </li>
  ))

  return <ul className="list-reset flex flex-col w-full max-w-sm">{items}</ul>
}
