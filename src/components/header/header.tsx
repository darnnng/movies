import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { observer } from 'mobx-react-lite';
import moviesStore from '../../store/moviesStore';
import * as Styled from './header.styles';

export const Header = observer(() => {
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    moviesStore.filter = event.target.value;
  };
  return (
    <Box sx={{ maxHeight: '64px' }}>
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
            <Styled.StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={moviesStore.filter}
              onChange={handleFilter}
            />
          </Styled.Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
