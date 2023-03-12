import { styled } from '@mui/material';
import { ISlideBoxProps } from './Slider.interface';

export const Slide = styled('div')<ISlideBoxProps>(({ link }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '5px',
  backgroundPosition: 'center',
  backgroundImage: `url(${link})`,
  backgroundRepeat: 'no-repeat',
}));

export const RightArrow = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(0,-50%)',
  right: '32px',
  fontSize: '45px',
  zIndex: 1,
}));

export const LeftArrow = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(0,-50%)',
  left: '32px',
  fontSize: '45px',
  zIndex: 1,
}));
