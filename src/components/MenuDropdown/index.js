import React from 'react'
import Downshift from 'downshift'
import './index.css'
import Menu from '../../images/icons/icon-menu-user.svg'

export default function Dropdown({ items, ...rest }) {
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
        <div className="dropdown" style={{ width: 250, margin: 'auto' }}>
          <label
            {...getLabelProps({
              htmlFor: 'my-select'
            })}
          >
            <span className="screenreader-only">user menu</span>
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
              <img src={Menu} alt="" />
            </button>
            {isOpen ? (
              <div style={{ display: 'block' }} className="dropdown-menu mt-4">
                {items.map(item => (
                  <a
                    {...getItemProps({ item })}
                    href={'/' + item}
                    key={item}
                    className="dropdown-item px-4 text-center py-2 mb-1"
                    style={{ cursor: 'pointer' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  )
}
