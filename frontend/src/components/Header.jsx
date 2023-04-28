import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import StoreIcon from '@mui/icons-material/Store';
import HistoryIcon from '@mui/icons-material/History';

function Header2({ linkHome, linkCartHistory, linkProfile }) {
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
              href={ linkHome }
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              PRODUCTS
            </Button>
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
            <Tooltip title="Meu histórico de compras">
              <IconButton
                component="a"
                href={ linkCartHistory }
                sx={{ p: 0, mr: 3 }}
              >
                <HistoryIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Meu Perfil">
              <IconButton
                component="a"
                href={ linkProfile }
                sx={{ p: 0 }}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header2;