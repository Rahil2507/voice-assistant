import React from 'react'
import DocumentItem from './DocumentItem'
import { Grid, Grow } from '@material-ui/core';

const DocumentsPage = ({documents}) => {
  return (
    <>
    <Grow in>
      <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
            {documents.map((document, i) => (
            <Grid key={i} item xs={8} sm={6} md={4} lg={4}>
              <DocumentItem document={document}/>
            </Grid>
          ))}
      </Grid>
    </Grow>
    </>
  )
}

export default DocumentsPage