import React from 'react'

const IpAdressPage = ({ip}) => {
  return (
    <div style={{margin: '40px', display: 'flex', flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
      <p>IP Address of this device :</p><h1 style={{fontSize: 25, padding: '10px'}}>{ip}</h1>
    </div>
  )
}

export default IpAdressPage