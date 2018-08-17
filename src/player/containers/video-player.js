import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timmer from '../components/timmer'
import VideoPlayerControls from '../components/video-player-controls'
import { formattedTime } from '../../../libs/utilites'
import ProgressBar from '../components/progress-var'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import Fullscreen from '../components/full-screen'
import { connect } from 'react-redux'

class VideoPlayer extends Component {
  state = {
    pause: true,
    durationStr: 0,
    durationNum: 0,
    currentTimeStr: 0,
    currentTimeNum: 0,
    loading : false,
    lastVolumeState : null,
    volume: 1
  }
  tooglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      durationStr: formattedTime(this.video.duration),
      durationNum: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTimeStr: formattedTime(this.video.currentTime),
      currentTimeNum: this.video.currentTime
    }) 
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  handleVolumeClick = event => {
    this.video.volume !== 0 ? this.mute() : this.unmute()
  }
  mute = ()  => {
    const lastState = this.video.volume
    this.setState({
      lastVolumeState: lastState,
      volume: 0
    })
    this.video.volume = 0
  }
  unmute = () => {
    this.setState({
      volume: this.state.lastVolumeState
    })
    this.video.volume = this.state.lastVolumeState
  }
  handleFullscreenClick = event => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef = {this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <VideoPlayerControls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.tooglePlay}
          />
          <Timmer 
            durationStr={this.state.durationStr}
            currentTimeStr={this.state.currentTimeStr}
          />
          <ProgressBar 
            durationNum={this.state.durationNum}
            value={this.state.currentTimeNum}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            value ={this.state.volume}
            handleVolumeChange = {this.handleVolumeChange}
            handleVolumeClick = {this.handleVolumeClick}
          />
          <Fullscreen 
            handleFullscreenClick = {this.handleFullscreenClick}
          />
        </VideoPlayerControls>
        <Spinner 
          active ={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src={this.props.media.get('src')}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}
function mapStatetoProps(state, props) {
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStatetoProps)(VideoPlayer); 