import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Therapies() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Therapeutic Approaches &amp; Current Market Landscape
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Biological Mechanisms of Treatment
        </Typography>
        <Typography variant="body1">
          Explanation of short-chain fatty acid (SCFA) production and how it modulates inflammation and immune response.
        </Typography>
        {/* Add content for other subsections here */}
      </Box>
    </Container>
  );
}

export default Therapies;
