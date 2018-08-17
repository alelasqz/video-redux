import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if(this.props.pause)
    {
      this.iframe.play()
    } 
    else 
    {
      this.iframe.pause()
    }      
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }
  setRef = element => {
    this.iframe = element
  }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props

    return (
      <div className="Video">
        <video 
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;