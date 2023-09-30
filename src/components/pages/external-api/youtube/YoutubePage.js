import React, { useState } from 'react'

import { Grid, Grow } from '@material-ui/core';
import YoutubeItem from './YoutubeItem'
import YoutubeVideo from './YoutubeVideo';

const YoutubePage = ({youtube}) => {
  const [playing, setPlaying] = useState(false)
  const [video, setVideo] = useState({})

  const openPlayer = (data) => {
    if(playing){
      setPlaying(false)
    }else{
      setVideo(data)
      setPlaying(true)
    }
  }

  return (
    <>
      <div style={{width: '100%', margin: '10px', marginTop: '-5px', display: 'flex', flexDirection: 'column',justifyContent: 'space-around', alignItems: 'flex-start'}}>
        {playing ? <YoutubeVideo video={video} closePlayer={openPlayer} />
          :<Grow in>
          <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '78vh', display: 'flex', justifyContent: 'center',}}>
              {youtube.video_results.map((youtubeItem, i) => (
                <Grid item xs={8} sm={6} md={4} lg={4}>
                  <YoutubeItem youtubeItem={youtubeItem} openPlayer={openPlayer}/>
                </Grid>
              ))}
          </Grid>
        </Grow>
        }
      </div>
    </>
  )
}

export default YoutubePage