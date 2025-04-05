import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Scientific Foundations
        </Typography>
        <Typography variant="body1">
          Introduction to Helicobacter pylori discovery (Barry Marshall & Robin Warren, 1983) and the subsequent explosion of gut microbiome research.
        </Typography>
        {/* Add interactive timeline or infographic here */}
      </Box>
    </Container>
  );
}

export default About;
