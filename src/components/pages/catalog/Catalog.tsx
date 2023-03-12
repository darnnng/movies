import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '../../header';
import { MoviesList } from '../../moviesList';

export const Catalog = () => {
  return (
    <Grid sx={{ height: '100%' }}>
      <Header />
      <MoviesList />
    </Grid>
  );
};
