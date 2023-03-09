import { Grid, styled, Box, Chip, Button } from '@mui/material';

export const MovieListBox = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  marginTop: '60px',
  flexWrap: 'wrap',
  columnGap: 20,
  rowGap: 20,
  padding: 10,
}));

export const ChipBox = styled(Box)(() => ({
  margin: '20px',
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const SmallChip = styled(Chip)(() => ({
  width: '100px',
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
}));

export const ResetChip = styled(Chip)(() => ({
  width: '100px',
  backgroundColor: '#4d4d4d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
}));

export const SortButton = styled(Button)(() => ({
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
}));
