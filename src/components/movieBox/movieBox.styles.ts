import { Paper, styled } from '@mui/material';

export const SingleBox = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
  height: '280px',
  width: '300px',
  rowGap: '10px',
  backgroundColor: '#eeeeee',
}));
