import React from 'react'

const InsultPage = ({insult}) => {
  return (
    <div style={{margin: '40px', display: 'flex',  justifyContent: 'center'}}>
      <p>{insult}</p>
    </div>

  )
}

export default InsultPage