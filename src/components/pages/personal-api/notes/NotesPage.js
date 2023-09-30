import React from "react";
import NoteItem from './NoteItem'
import { Grid, Grow } from '@material-ui/core';

const NotesPage = ({notes}) => {
  return (
    <>
      <Grow in>
        <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
          {notes.map((note, i) => (
            <Grid key={i} item xs={8} sm={8} md={5} lg={5}>
              <NoteItem note={note}/>
            </Grid>
          ))}
      </Grid>
    </Grow>

    </>
  );
};

export default NotesPage;
