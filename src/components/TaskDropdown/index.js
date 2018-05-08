import React from 'react'
import Downshift from 'downshift'
import './index.css'
import Options from '../../images/icons/icon-options.svg'
import Buttons from './Buttons'

export default function Dropdown({ item, edit, ...rest }) {
  return (
    <Downshift {...rest}>
      {({
        getLabelProps,
        getInputProps,
        getButtonProps,
        getItemProps,
        isOpen,
        toggleMenu,
        clearSelection,
        selectedItem,
        inputValue,
        highlightedIndex
      }) => (
        <div className="dropdown">
          <label
            className="screenreader-only"
            {...getLabelProps({
              htmlFor: 'settings'
            })}
          >
            View Task Settings
          </label>

          <div className="btn-group">
            <button
              id="my-select"
              type="button"
              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
              onClick={toggleMenu}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <span className="screenreader-only">Toggle Dropdown</span>
              <img src={Options} alt="" />
            </button>

            {isOpen ? (
              <Buttons
                {...item}
                edit={taskID => edit(taskID)}
                itemProps={getItemProps({ item })}
              />
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  )
}
