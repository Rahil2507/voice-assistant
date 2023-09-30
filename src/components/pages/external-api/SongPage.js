import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';

const SongPage = ({song, changePage}) => {
  const [imageHeight, setImageHeight] = useState('210px')
  
  const imageHeightChanger = () => {
    imageHeight === '240px' ? setImageHeight('210px') : setImageHeight('240px')
  }
  
  return (
    <>
    <div className='dataBox' style={{margin: '10px', paddingBottom: '20px',  paddingTop: '20px',  borderRadius: 20, display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
        <div style={{height: '240px', width: '240px', display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
          <img src={song.image} style={{height:imageHeight, cursor: 'pointer', borderRadius: 15 }} alt="img" />
        </div>
        <p style={{fontSize: 30, margin: '5px'}}>{song.name}</p>
        <p style={{fontSize: 15}}>{song.artist}</p>
        <ReactAudioPlayer src={song.url} autoPlay controls onEnded={() => {changePage()}} onPause={imageHeightChanger} onPlay={imageHeightChanger}  style={{marginTop: '5px', margin: '10px', width: '280px'}} />
        <p onClick={() => {window.open(song.open)}} style={{fontSize: 15, cursor: 'pointer', color: 'cyan'}}>Play on spotify</p>
    </div>
    </>
  )
}

export default SongPage