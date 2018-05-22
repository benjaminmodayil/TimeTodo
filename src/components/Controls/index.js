import React from 'react'
import playPause from '../../images/icons/icon-playhead.svg'

export default props => {
  return (
    <div className="flex justify-around items-center max-w-md w-full mx-auto">
      <button onClick={props.onPause}>
        <img src={playPause} alt="Play or Pause" />
      </button>
    </div>
  )
}

// <button>
// <img src={minus} alt="minus a minute" />
// </button>
// <button>
// <img src={plus} alt="add a minute" />
// </button>
