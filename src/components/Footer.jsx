import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'lightgray', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Raccoon Pharmaceuticals
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
