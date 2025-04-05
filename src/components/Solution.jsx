import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Solution() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Proposed Solution for Raccoon Pharmaceuticals
        </Typography>
        <Typography variant="body1">
          Specific GI disease target (e.g., IBD, colorectal cancer, or a novel area).
        </Typography>
        {/* Add content for proposed solution here */}
      </Box>
    </Container>
  );
}

export default Solution;
