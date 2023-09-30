import React, { useState } from 'react'

const NewsItem = ({newsItem}) => {
  const [imageDimension, setImageDimension] = useState({
    height: '150px',
    width: '280px'
  })

  return (
    <>
      <div className="dataBox" style={{borderRadius: 20, margin: '5px', height: '300px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>  
        <div style={{height: '170px', width: '290px', marginTop: '5px', marginLeft: '5px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src={newsItem.urlToImage} onClick={() => {window.open(newsItem.url)}} style={{ width: imageDimension.width, height: imageDimension.height , borderRadius: 5 , objectFit: 'cover', cursor: 'pointer' }} onMouseEnter={() => {setImageDimension({height: '170px', width: '390px'})}}  onMouseLeave={() => {setImageDimension({height: '150px', width: '280px'})}}  alt="Failed to load" />
        </div>
        <div style={{padding: '10px'}}>
          <p style={{fontSize: 14, marginBottom: '5px'}}>{newsItem.title}</p>
          <p style={{fontSize: 9}}>{(new Date(newsItem.publishedAt)).toDateString()}</p>
        </div>
      </div>
    </>
  )
}

export default NewsItem