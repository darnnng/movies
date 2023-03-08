import { Paper, styled, Typography } from '@mui/material';

export const SingleBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
  height: '280px',
  width: '300px',
  rowGap: '10px',
  backgroundColor: '#eeeeee',
}));

// export const MovieTitle = styled(Typography)(() => {

// });
