import { Grid, styled } from '@mui/material';

export const MovieListBox = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  marginTop: '80px',
  flexWrap: 'wrap',
  columnGap: 20,
  rowGap: 20,
  padding: 10,
}));
