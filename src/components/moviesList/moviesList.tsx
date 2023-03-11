import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { IMovie } from '../../interfaces/movie.interface';
import moviesStore from '../../store/moviesStore';
import { MovieBox } from '../movieBox';
import { ImageSlider } from '../slider';
import { Spinner } from '../spinner';
import * as Styled from './moviesList.styles';

export const MoviesList = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [movieArray, setMovieArray] = useState<IMovie[]>([]);
  const [seriesArray, setSeriesArray] = useState<IMovie[]>([]);
  const listOfMovies = moviesStore.moviesList;

  useEffect(() => {
    if (fetching && !movieArray.length && !seriesArray.length) {
      moviesStore.fetchMovies(currentPage);
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching, currentPage, movieArray.length, seriesArray.length]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (event: Event) => {
    const target = event.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const getMovies = () => {
    moviesStore.filterMovies(currentPage);
    setMovieArray(listOfMovies);
  };

  const getSeries = () => {
    moviesStore.filterSeries(currentPage);
    setSeriesArray(listOfMovies);
  };

  const getAllList = () => {
    moviesStore.clearList();
    setSeriesArray(() => []);
    setMovieArray(() => []);
  };

  const sortByYear = () => {
    moviesStore.sortMovies();
    moviesStore.setSortingDirection();
  };

  return (
    <>
      <Styled.SliderInfo>
        <Styled.SliderInfoImage>
          <ImageSlider />
        </Styled.SliderInfoImage>
        <Box>
          <Styled.SliderInfoTitle>Find the perfect movie for yourself!</Styled.SliderInfoTitle>
          <Typography sx={{ fontSize: '28px', color: 'white' }}>
            Choose from the variety below
          </Typography>
        </Box>
      </Styled.SliderInfo>
      <Styled.ChipBox>
        <Box sx={{ display: 'flex', columnGap: '15px' }}>
          <Styled.SmallChip label="Selection of movies" variant="filled" onClick={getMovies} />
          <Styled.SmallChip label="Selection of series" variant="filled" onClick={getSeries} />
          <Styled.ResetChip label="See all" variant="filled" onClick={getAllList} />
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
