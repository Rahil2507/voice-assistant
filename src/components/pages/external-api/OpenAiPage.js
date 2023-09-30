import React from 'react'

const OpenAiPage = ({openAi}) => {
  return (
    <>
    <div style={{margin: '10px', display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'flex-start',}}>
        <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
          <p style={{marginRight: '5px'}}>Query : </p>
          <p className='queryBox' style={{padding: '20px', borderRadius: 10, maxWidth: '94%'}}>{openAi[0].charAt(0).toUpperCase() + openAi[0].slice(1)}</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
          <p style={{marginRight: '23px', marginLeft: '10px'}}>AI : </p>
          <p className='dataBox' style={{padding: '20px', borderRadius: 10, maxWidth: '94%'}}> 
            { openAi[1] === null ? 'Loading...' : openAi[1] }            
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default OpenAiPage