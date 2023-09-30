import React from 'react'

const PlayerPage = ({player}) => {
  return (
    <>
      <div style={{width: '100%', margin: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>
        <div>
          <p>{player.strPlayer}</p>
          <p>Nationality : {player.strNationality}</p>
          <p>Height : {player.strHeight}</p>
          <p>Weight : {player.strWeight}</p>
          <p>Sport : {player.strSport}</p>
          <p>Position : {player.strPosition}</p>
          <p>Team : {player.strTeam}</p>
          <p>Born : {player.dateBorn}</p>
          <p>Jersey No. : {player.strNumber}</p>
          <p>Ethnicity : {player.strEthnicity}</p>
          <p onClick={() => {window.open('https://'+player.strInstagram)}} style={{color:'blueviolet', cursor: 'pointer'}}>Instagram : @ {player.strInstagram.slice(18,-1)}</p>
        </div>
        <img src={player.strThumb} style={{height: '300px', marginLeft: '5px', borderRadius: 20}} alt='Failed to load' />
      </div>
    </>
  )
}

export default PlayerPage