import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import StoreIcon from '@mui/icons-material/Store';
import HistoryIcon from '@mui/icons-material/History';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Header({ avatar, linkHome, linkCartHistory, linkProfile, linkLogin }) {
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  function stringAvatar(name) {
    if (!name) {
      return {};
    }
  
    const nameParts = name.split(' ');
  
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${nameParts[0][0]}${nameParts[1][0]}`,
    };
  }

  return (
    <AppBar sx={{margin: 0, padding: 0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ linkHome }
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component="a"
              href="https://fakestoreapi.com/"
              target="_blank"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              FAKESTOREAPI
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My cart history">
              <IconButton
                component="a"
                href={ linkCartHistory }
                sx={{ p: 0, mr: 3 }}
              >
                <HistoryIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="My profile">
              <IconButton
                component="a"
                href={ linkProfile }
                sx={{ p: 0 }}
              >
                {/* <AccountCircle /> */}
                <Avatar {...stringAvatar(avatar)} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton
                component="a"
                href={ linkLogin }
                sx={{ p: 0, ml: 3 }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;