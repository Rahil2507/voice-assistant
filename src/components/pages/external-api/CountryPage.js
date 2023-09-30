import React from 'react'

const CountryPage = ({country}) => {
  // console.log(country)
  return (
    <>
      <div style={{margin: '40px', display: 'flex',  justifyContent: 'center'}}>
        <div style={{margin: '40px'}}>
          <p style={{fontSize: 50, marginTop: '-30px' }}>{country.name.common}</p>    
          <p>Continent : {country.continents[0]}</p>    
          <p>Capital : {country.capital[0]}</p>    
          <p>Language : {Object.values(country.languages)[0]}</p>    
          <p>Currencie : {Object.values(country.currencies)[0].name}</p>
          <p>Coordinates : {country.capitalInfo.latlng[0]} , {country.capitalInfo.latlng[1]}</p>
          <br/>
          <p onClick={() => {window.open(country.maps.googleMaps)}} style={{color: 'blueviolet', cursor: 'pointer'}} >Google Maps</p>
        </div>
      <img src={country.flags.svg} style={{height: '180px', margin: '30px', borderRadius: 15}} alt='Failed to load' />

        
    </div>
    </>
  )
}

export default CountryPage