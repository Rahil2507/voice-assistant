import React from 'react'

const MoviePage = ({movie}) => {
  return (
    <>
      <div style={{width: '100%', margin: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>
        <div>
          <p style={{fontSize: 60, marginBottom: '20px'}}>{movie.Title}</p>  
          <p>IMDB Rating : {movie.imdbRating}</p>  
          <p>Box Office : {movie.BoxOffice}</p>  
          <p>Released : {movie.Released}</p>  
          <p>Genre : {movie.Genre}</p>  
          <p>Actors : {movie.Actors}</p>  
          <p>Awards : {movie.Awards}</p>  
          <br/><p style={{maxWidth: '400px'}}> Plot : {movie.Plot}</p><br/>
          <p>Runtime : {movie.Runtime}</p>  
          <p>PG Rating : {movie.Rated}</p>    
        </div>
        <div>
          <img src={movie.Poster} style={{height: '500px', width:'340px', objectFit: 'contain', marginLeft: '5px' ,borderRadius: 20}} alt='Failed to load' />
        </div>
      </div>
    </>
  )
}

export default MoviePage