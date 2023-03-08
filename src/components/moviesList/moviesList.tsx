import { Box, Button, Grid, Typography } from '@mui/material';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import moviesStore from '../../store/moviesStore';
import { MovieBox } from '../movieBox';
import * as Styled from './moviesList.styles';

export const MoviesList = observer(() => {
  useEffect(() => {
    moviesStore.fetchMovies();
    console.log('poka: ', toJS(moviesStore.movies));
  }, []);

  // const getMovies = async () => {
  //   const url = 'http://www.omdbapi.com/?s=abb&apikey=5cefe06b';
  //   const response = await fetch(url);
  //   const JSON = await response.json();
  //   console.log(JSON);
  // };

  return (
    <Styled.MovieListBox container>
      {moviesStore.movies.map((movie) => (
        <MovieBox key={movie.imdbID} movie={movie} />
      ))}
    </Styled.MovieListBox>
  );
});
