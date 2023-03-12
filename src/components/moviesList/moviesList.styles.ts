import { Grid, styled, Box, Chip, Button, Typography } from '@mui/material';

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

export const ChipBox = styled(Box)(({ theme }) => ({
  margin: '20px',
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const SmallChip = styled(Chip)(() => ({
  width: '200px',
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

export const SortButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'gray',
  color: 'white',
  '&:hover': {
    backgroundColor: '#595959',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '20px',
  },
}));

export const SliderInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '100px 25px 0',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#4d4d4d',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const SliderInfoImage = styled(Box)(({ theme }) => ({
  width: '500px',
  height: '380px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const SliderInfoTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '40px',
  color: 'white',
  textShadow: '1px 1px 1px #000',
}));
