import React from 'react'
import { Grid, Grow } from '@material-ui/core';

const ImagePage = ({image}) => {
  
  return (
    <>
      <Grow in>
        <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center',}}>
          {/* <div style={{margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
            {image !== null && image.map((img, i) => (
              <Grid i={i} item xs={9} sm={6} md={4} lg={4}>
                <div i={i} style={{padding: '10px'}}>
                  <img src={img.url} style={{height:'230px', padding:'10', borderRadius: 20}} alt="img" />
                </div>
              </Grid>
            ))}
          {/* </div> */}
        </Grid>
      </Grow>
    </>
  )
}

export default ImagePage