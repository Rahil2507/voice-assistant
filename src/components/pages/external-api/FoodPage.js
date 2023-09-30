import React from 'react'
import { Grid, Grow } from '@material-ui/core';

const FoodPage = ({food}) => {
  return (
    <>
    <Grow in>
      <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '82vh', display: 'flex', justifyContent: 'center',}}>
      <img src={food} style={{width:'600px'}} alt='Failed to load'/>
    </Grid>
    </ Grow>
    </>
  )
}

export default FoodPage