import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import moviesStore from '../../store/moviesStore';
import * as Styled from './Slider.styles';

export const ImageSlider = observer(() => {
  const images = moviesStore.movies;
  const urls = images.map((element) => element.Poster);
  const ids = images.map((element) => element.imdbID);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentIndex((currentIndex + 1 + images.length) % images.length),
      3000
    );
    return () => clearTimeout(timeout);
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? urls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === urls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToMovieInfo = () => {
    navigate(`/catalog/${ids[currentIndex]}`);
  };

  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <Styled.LeftArrow onClick={goToPrevSlide}>
        <IconButton sx={{ color: 'white' }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Styled.LeftArrow>
      <Styled.RightArrow onClick={goToNextSlide}>
        <IconButton sx={{ color: 'white' }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Styled.RightArrow>
      <Styled.Slide link={urls[currentIndex]} onClick={goToMovieInfo} />
    </Box>
  );
});
