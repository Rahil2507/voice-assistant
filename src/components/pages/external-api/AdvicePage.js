import React from 'react'

const AdvicePage = ({advice}) => {
  return (
    <div style={{margin: '40px', display: 'flex',  justifyContent: 'center'}}>
      <p>{advice}</p>
    </div>
  )
}

export default AdvicePage