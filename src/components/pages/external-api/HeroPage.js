import React from 'react'

const HeroPage = ({hero}) => {
  return (
    <div style={{width: '100%', margin: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div>
          {hero.name && <p style={{fontSize: 35}}>{hero.name}</p>}
          {hero.biography.fullName && <p>Full Name : {hero.biography.fullName}</p>}
          {hero.appearance.height[0] && <p>Height : {hero.appearance.height[0]} ft</p>}
          {hero.appearance.weight[1] && <p>Weight : {hero.appearance.weight[1]}</p>}
          {hero.biography.publisher && <p>Publisher : {hero.biography.publisher}</p>}
          {hero.biography.firstAppearance && <p>First Appearance : {hero.biography.firstAppearance}</p>}
          {hero.biography.placeOfBirth && <p>Place Of Birth : {hero.biography.placeOfBirth}</p>}
          {hero.appearance.race && <p>Race : {hero.appearance.race}</p>}
          {hero.connections.groupAffiliation && <p>Group Affiliation : {hero.connections.groupAffiliation}</p>}
          {hero.work.occupation && <p>Occupation : {hero.work.occupation}</p>}
          {/* <p onClick={() => {window.open('https://'+player.strInstagram)}} style={{color:'blueviolet', cursor: 'pointer'}}>Instagram : @ {player.strInstagram.slice(18,-1)}</p> */}
        </div>
        <img src={hero.images.md} style={{height: '300px', marginLeft: '5px', borderRadius: 20}} alt='Failed to load' />
      </div>
  )
}

export default HeroPage