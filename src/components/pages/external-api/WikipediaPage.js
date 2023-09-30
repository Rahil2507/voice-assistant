import React from 'react'

const WikipediaPage = ({wikipedia}) => {
  return (
    <>
      <div style={{margin: '40px', display: 'flex',  justifyContent: 'center'}}>
      <p>{wikipedia.extract}</p>
    </div>
    </>
  )
}

export default WikipediaPage