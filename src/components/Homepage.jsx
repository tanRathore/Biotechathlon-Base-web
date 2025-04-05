import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Homepage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gut Microbiome-Based Therapies: The Next Frontier in GI Disease Treatment and Investment
        </Typography>
        <Typography variant="body1">
          Welcome to Raccoon Pharmaceuticals. We are dedicated to developing innovative therapies targeting the gut microbiome for the treatment of gastrointestinal diseases.
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Learn More
        </Button>
      </Box>
    </Container>
  );
}

export default Homepage;
