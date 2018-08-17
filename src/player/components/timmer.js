import React from 'react'
import './timmer.css'

function Timmer (props) {
  return (
    <div className="Timmer">
      <p>
        <span>
          {props.currentTimeStr} / {props.durationStr}
        </span>
      </p>
    </div>
  )
}

export default Timmer;
