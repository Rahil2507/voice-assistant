import React, { useState } from 'react'

const YoutubeItem = ({youtubeItem, openPlayer}) => {
  const [image, setImage] = useState(youtubeItem.thumbnail.static)

  const changeImage = () => {
    try {
      youtubeItem.thumbnail.rich && setImage(youtubeItem.thumbnail.rich)
    } catch (error) {   

    }
  }
  

  return (
    <>
      <div className="dataBox" style={{minHeight: '250px', width: '300px', borderRadius: 10, padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>  
      <div style={{width: '280px' ,height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={image} onClick={() => {openPlayer(youtubeItem)}} style={{ width: '100%' ,height: '100%' , borderRadius: 5 , objectFit: 'fill', cursor: 'pointer' }} onMouseEnter={() => {changeImage()}}  onMouseLeave={() => {setImage(youtubeItem.thumbnail.static)}} alt="Logo" />
        <p style={{fontSize: 12, color: 'white', fontWeight: 'bold', position: 'absolute', right: '10px', top: '142px', backgroundColor: 'black', borderRadius: 5, paddingLeft: '2px', paddingRight: '2px'}}>{youtubeItem.length}</p>
      </div>
      <div style={{display: 'flex', marginTop: '8px'}}>
        <img src={youtubeItem.channel.thumbnail} onClick={() => {window.open(youtubeItem.channel.link)}} style={{ height: '40px' , borderRadius: 25 , objectFit: 'fill', cursor: 'pointer', marginRight: '5px' }} alt="Logo" />
        <div>
        <p style={{fontSize: 14}}>{youtubeItem.title.slice(0,50)}</p>
        <p style={{fontSize: 11, cursor: 'pointer'}} onClick={() => {window.open(youtubeItem.channel.link)}}>{youtubeItem.channel.name}</p>
         <p style={{fontSize: 9}}>{youtubeItem.views && youtubeItem.views.toString().slice(0)} views | {youtubeItem.published_date && youtubeItem.published_date}</p>
        {/* <p style={{fontSize: 12}}>{(new Date(newsItem.publishedAt)).toDateString()}</p> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default YoutubeItem