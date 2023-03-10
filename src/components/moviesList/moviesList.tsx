/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import moviesStore from '../../store/moviesStore';
import { MovieBox } from '../movieBox';
import { Spinner } from '../spinner';
import * as Styled from './moviesList.styles';

export const MoviesList = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      moviesStore.fetchMovies(currentPage);
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching, currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (event: any) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const getMovies = () => {
    moviesStore.filterMovies();
  };

  const getSeries = () => {
    moviesStore.filterSeries();
  };

  const getAllList = () => {
    moviesStore.clearList();
    moviesStore.fetchMovies(currentPage);
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
