import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import moviesStore from '../../store/moviesStore';
import { MovieBox } from '../movieBox';
import { Spinner } from '../spinner';
import * as Styled from './moviesList.styles';

export const MoviesList = observer(() => {
  useEffect(() => {
    if (!moviesStore.movies.length) {
      moviesStore.fetchMovies();
    }
  }, []);

  return (
    <Styled.MovieListBox container>
      {moviesStore.isLoading && <Spinner />}
      {moviesStore.filteredMovie.length
        ? moviesStore.filteredMovie?.map((movie) => <MovieBox key={movie.imdbID} movie={movie} />)
        : 'No movies were found'}
    </Styled.MovieListBox>
  );
});
