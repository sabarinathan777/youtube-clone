import React from 'react'
import "./Video.css";
import PlayVideo from '../../components/play-video/PlayVideo';
import Recommended from '../../components/recommended/Recommended';

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video;