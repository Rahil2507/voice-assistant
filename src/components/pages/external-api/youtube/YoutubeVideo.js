import React from 'react'
import ReactPlayer from 'react-player/youtube'

const YoutubeVideo = ({video, closePlayer}) => {

  const back = '< Go back'
  
  return (
    <>
    <div style={{width: '100%'}}>
      <p onClick={() => {closePlayer({})}} style={{color: 'yellow', cursor: 'pointer'}}>{back}</p>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <ReactPlayer url={video.link} controls={true} playing={true} onEnded={() => {closePlayer()}} height='450px' width='90%' style={{margin: '15px'}}/>
      </div>
    </div>
    
    </>
  )
}

export default YoutubeVideo