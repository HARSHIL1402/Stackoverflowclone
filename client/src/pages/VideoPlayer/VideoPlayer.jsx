import React from 'react'
import '../../App.css'
import video from '../../assets/video.mp4'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'
const VideoPlayer = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="h1">Video Player</h1>
      <ReactPlayer className='react-player'
      controls={true} 
      url={video} />
      </div>
    </div>
  )
}

export default VideoPlayer