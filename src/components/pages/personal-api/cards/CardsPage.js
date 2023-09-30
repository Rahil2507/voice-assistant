import React from 'react'
import CardItem from './CardItem'
import { Grid, Grow } from '@material-ui/core';

const CardsPage = ({cards}) => {
  return (
    <>
    <Grow in>
      <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
          {cards.map((card, i) => (
            <Grid key={i} item xs={8} sm={6} md={4} lg={4}>
              <CardItem card={card}/>
            </Grid>
          ))}
      </Grid>
    </Grow>
    </>
  )
}

export default CardsPage