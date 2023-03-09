import { Box } from '@mui/material';
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

  const getMovies = () => {
    moviesStore.filterMovies();
  };

  const getSeries = () => {
    moviesStore.filterSeries();
  };

  const getAllList = () => {
    moviesStore.clearList();
    moviesStore.fetchMovies();
  };

  const sortByYear = () => {
    moviesStore.sortMovies();
  };

  return (
    <>
      <Styled.ChipBox>
        <Box sx={{ display: 'flex', columnGap: '15px' }}>
          <Styled.SmallChip label="Movies" variant="filled" onClick={getMovies} />
          <Styled.SmallChip label="Series" variant="filled" onClick={getSeries} />
          <Styled.ResetChip label="Reset filter" variant="filled" onClick={getAllList} />
        </Box>
        <Box>
          <Styled.SortButton onClick={sortByYear}>Sort by year</Styled.SortButton>
        </Box>
      </Styled.ChipBox>
      <Styled.MovieListBox container>
        {moviesStore.isLoading && <Spinner />}

        {moviesStore.filteredMovie.length
          ? moviesStore.filteredMovie?.map((movie) => <MovieBox key={movie.imdbID} movie={movie} />)
          : 'No movies were found'}
      </Styled.MovieListBox>
    </>
  );
});
