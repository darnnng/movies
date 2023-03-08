import { Container } from '@mui/material';
import React from 'react';
import { Header } from '../../header';
import { MoviesList } from '../../moviesList';

export const Catalog = () => {
  return (
    <>
      <Header />
      <Container>
        <MoviesList />
      </Container>
    </>
  );
};
