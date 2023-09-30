import React from 'react'

const ConversionPage = ({conversion}) => {
  return (
    <>
      <div style={{width: '100%', margin: '30px', display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
        <p style={{fontSize: 40, margin: '20px'}}>1 {conversion.base_code} = {conversion.conversion_rate} {conversion.target_code}</p>
        <p>On {conversion.time_last_update_utc.slice(0,26)} UTC</p>
      </div>
    </>
  )
}

export default ConversionPage