import React from 'react'
import FullscreenIcon from '../../icons/components/full-screen'
import './full-screen.css'

const Fullscreen = (props) => (
  <div 
    className="Fullscreen"
    onClick={props.handleFullscreenClick}
  >
    <FullscreenIcon
      size={15}
      color="white"
    />
  </div>
)

export default Fullscreen;