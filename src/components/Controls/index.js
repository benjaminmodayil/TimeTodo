import React from 'react'

import minus from '../../images/icons/icon-minus.svg'
import plus from '../../images/icons/icon-add.svg'
import playPause from '../../images/icons/icon-playhead.svg'

export default props => {
  return (
    <div className="flex justify-around items-center max-w-md w-full mx-auto">
      <button>
        <img src={minus} alt="minus a minute" />
      </button>
      <button>
        <img src={playPause} alt="Play or Pause" />
      </button>
      <button>
        <img src={plus} alt="add a minute" />
      </button>
    </div>
  )
}
