import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './header.styles';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MOVIES
          </Typography>
          <Styled.Search>
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Styled.Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
