import React, { useEffect, useState, useRef } from 'react'

const SearchPage = ({search}) => {
  const dataFetchedRef = useRef(false);
  const [image, setImage] = useState('')
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    try {
      setImage(search.knowledge_graph.header_images[0].image)
    }
    catch(err) {
      setImage(search.inline_images[0].thumbnail)
    }
  },[])
  
  return (
    <>
      <div style={{width: '100%', maxHeight: '80vh', overflowY: 'scroll', margin: '10px', marginTop: '-10px', display: 'flex', flexDirection: 'column',justifyContent: 'space-around', alignItems: 'flex-start'}}>
        <div style={{display: 'flex', padding: '10px', marginTop: '40px'}}>
          {search.knowledge_graph && <div>
            <p style={{fontSize: 25}}>{search.knowledge_graph.title}</p>
            <p style={{fontSize: 15}}>{search.knowledge_graph.description}</p>
          </div>}
          <img src={image} style={{height: '100px', marginLeft: '50px', borderRadius: 15  }} alt='Failed to load' />
        </div>
        <p style={{marginLeft: '20px', color: 'black', textDecorationLine: 'underline', fontSize: 20}}>Results</p>
        <div container style={{margin: '0px'  , maxHeight: '58vh'}}>
          {search.organic_results.map((searchItem, i) => (
            <div className='dataBox' i={i} style={{display: 'flex', margin: '10px', padding: '10px', borderRadius: 20, maxWidth: '900px', justifyContent: 'space-between'}}>
              <div style={{paddingLeft: '10px', cursor: 'pointer'}} onClick={() => {window.open(searchItem.link)}}>
                <p style={{fontSize: 18}}>{searchItem.title}</p>
                <p style={{fontSize: 13}}>{searchItem.snippet}</p>
                <p style={{fontSize: 10 ,color: 'beige', textDecorationLine: 'underline'}}>{searchItem.displayed_link}</p>
              </div>
              <img src={searchItem.about_this_result.source.icon} style={{height: '60px', marginLeft: '20px'}} alt='Failed to load' />
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchPage