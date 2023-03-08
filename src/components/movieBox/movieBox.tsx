import { Box, Typography } from '@mui/material';
import React from 'react';
import { IMovieBoxProps } from './movieBox.interface';
import * as Styled from './movieBox.styles';

export const MovieBox = ({ movie }: IMovieBoxProps) => {
  return (
    <Styled.SingleBox>
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
    </Styled.SingleBox>
  );
};
