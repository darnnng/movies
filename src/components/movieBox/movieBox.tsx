import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovieBoxProps } from './movieBox.interface';
import * as Styled from './movieBox.styles';

export const MovieBox = ({ movie }: IMovieBoxProps) => {
  const navigate = useNavigate();

  const handleMovieInfo = () => {
    navigate(`/catalog/${movie.imdbID}`);
  };

  return (
    <Styled.SingleBox onClick={handleMovieInfo}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          margin: 'auto',
        }}
        alt="Film poster"
        src={movie.Poster}
      />
      <Typography>{movie.Title}</Typography>
      <Typography>{movie.Year}</Typography>
    </Styled.SingleBox>
  );
};
