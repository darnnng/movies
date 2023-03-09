import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import singleMovieStore from '../../../store/singleMovieStore';
import { Spinner } from '../../spinner';
import * as Styled from './movieDetails.styles';

export const MovieDetails = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    singleMovieStore.fetchMovie(id!);
  }, [id]);

  const movie = toJS(singleMovieStore.movie);
  const handleGoToCatalog = () => {
    navigate(`/catalog`);
  };

  return (
    <>
      {singleMovieStore.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Styled.BackButton variant="contained" onClick={handleGoToCatalog}>
            Back
          </Styled.BackButton>
          <Styled.MovieBox backimage={movie.Poster}></Styled.MovieBox>
          <Styled.Content>
            <Styled.ImageBox component="img" alt="Film poster" src={movie.Poster} />
            <Box sx={{ maxWidth: '500px' }}>
              <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>{movie.Title}</Typography>
              <Typography sx={{ fontSize: '22px' }}>{movie.Genre}</Typography>
              <Typography sx={{ fontSize: '18px' }}>Country: {movie.Country}</Typography>
              <Typography sx={{ fontSize: '18px', mb: 4 }}>Released: {movie.Released}</Typography>
              <Typography sx={{ fontSize: '18px' }}>{movie.Plot}</Typography>
            </Box>
          </Styled.Content>
        </>
      )}
    </>
  );
});
