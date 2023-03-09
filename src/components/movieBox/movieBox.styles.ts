import { Paper, styled } from '@mui/material';

export const SingleBox = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
  height: '300px',
  width: '300px',
  rowGap: '10px',
  backgroundColor: '#cccccc',
  '&:hover': {
    backgroundColor: '#eeeeee',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));
