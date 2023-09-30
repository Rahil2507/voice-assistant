import React, { useState } from 'react'

import Wave from 'react-wavify'
import AiHead from '../../assets/AI-head.png'

const HomePage = ({button}) => {
  const [alanActive, setAlanActive] = useState(false)
  const [imagewidth, setImagewidth] = useState('560px')

  const waveSwitch = () => {
    alanActive ? setAlanActive(false) : setAlanActive(true)
  }

  const styles = {
    width: imagewidth, position:'absolute', right:'10px',top:'100px', cursor: 'pointer'
  };

  return (
    <>
      <div style={{position: 'absolute', top: '160px', right: '620px'}}>
        <p style={{color: 'gray', fontSize:15, fontFamily: 'cursive'}}>Voice Enabled</p>
        <p style={{color: 'white', fontSize:30, fontFamily: 'cursive'}}>Artificial Intelligence Assistant</p>
      </div>
      {alanActive && <Wave style={{position:'absolute', width:'600px', right:'510px', top:'250px', padding: '50px', borderRadius: 50}} fill='#1277b0' options={{ height: 100, amplitude: 30, speed: .50 , points: 10}}/>}
      <img src={AiHead} onClick={() => {button (); waveSwitch()}} style={styles} className='hidden sm:flex' onMouseEnter={() => {setImagewidth('570px')}}  onMouseLeave={() => {setImagewidth('560px')}}  alt="ai-logo" />
      
    </>
  )
}

export default HomePage