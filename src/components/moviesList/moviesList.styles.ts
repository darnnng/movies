import { Grid, styled } from '@mui/material';

export const MovieListBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
  flexWrap: 'wrap',
  columnGap: 20,
  rowGap: 20,
  padding: 10,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));
