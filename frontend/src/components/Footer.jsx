import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { IconButton, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tooltip title="Linkedin">
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/dev-joanamds/"
            target="_blank"
            sx={{ p: 0, mr: 3 }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github">
          <IconButton
            component="a"
            href="https://github.com/joanamds"
            sx={{ p: 0, mr: 4}}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <p>Feito por Joana Maria dos Santos &copy;, 2023</p>
      </BottomNavigation>
    </Box>
  );
}
