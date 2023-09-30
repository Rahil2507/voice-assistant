import React from 'react'
import ReminderItem from './RemiderItem'
import { Grid, Grow } from '@material-ui/core';

const RemindersPage = ({reminders}) => {
  return (
    <>    
      <Grow in>
      <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
          {reminders.map((reminder, i) => (
              <Grid key={i} item xs={8} sm={8} md={5} lg={5}>
                <ReminderItem  reminder={reminder}/>
              </Grid>
          ))}
        </Grid>
      </Grow>
    </>
  )
}

export default RemindersPage