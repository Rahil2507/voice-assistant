import React from "react";
import { Grid, Grow } from '@material-ui/core';
import NewsItem from "./NewsItem";

const NewsPage = ({news}) => {

  return (
    <>
    <Grow in>
      <Grid container spacing={2} style={{overflowY: 'scroll', maxHeight: '80vh', display: 'flex', justifyContent: 'center',}}>
          {news.map((newsItem, i) => (
            <Grid item xs={8} sm={6} md={4} lg={4}>
              <NewsItem newsItem={newsItem}/>
            </Grid>
          ))}
      </Grid>
    </Grow>
    </>
  )
}

export default NewsPage