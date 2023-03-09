import { styled, Paper, Box, Button } from '@mui/material';
import { ISingleBoxProps } from './movieDetails.interface';

export const MovieBox = styled(Paper)<ISingleBoxProps>(({ backimage, theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  height: '500px',
  margin: 'auto',
  marginTop: '80px',
  backgroundSize: 'cover',
  backgroundImage: `url(${backimage})`,
  filter: 'blur(10px)',
  width: '100%',
  zIndex: '0',
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    height: '700px',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0px',
    height: '100%',
    justifyContent: 'center',
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  height: '350px',
  width: '350px',
  margin: 'auto',
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '30px',
  },
})) as typeof Box;

export const Content = styled('div')(({ theme }) => ({
  marginTop: '90px',
  filter: 'blur(0px)',
  display: 'flex',
  height: '100%',
  flexWrap: 'wrap',
  padding: 25,
  color: 'white',
  zIndex: '10',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    margin: 'auto',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '50px',
  },
}));

export const BackButton = styled(Button)(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '120px',
  zIndex: '15',
}));
