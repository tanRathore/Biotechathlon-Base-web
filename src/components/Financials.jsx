import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Financials() {
  const [preclinicalCost, setPreclinicalCost] = useState(100000);
  const [manufacturingCost, setManufacturingCost] = useState(150000);
  const [clinicalTrialsCost, setClinicalTrialsCost] = useState(500000);
  const [regulatoryCost, setRegulatoryCost] = useState(200000);

  const data = {
    labels: ['Preclinical', 'Manufacturing', 'Clinical Trials', 'Regulatory'],
    datasets: [
      {
        label: 'Projected R&D Costs',
        data: [preclinicalCost, manufacturingCost, clinicalTrialsCost, regulatoryCost],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'R&D Cost Breakdown',
      },
    },
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Financial &amp; Commercial Analysis
        </Typography>
        <Typography variant="body1">
          Projected Research &amp; Development Costs
        </Typography>

        <TextField
          label="Preclinical Cost"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={preclinicalCost}
          onChange={(e) => setPreclinicalCost(parseInt(e.target.value))}
        />
        <TextField
          label="Manufacturing Cost"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={manufacturingCost}
          onChange={(e) => setManufacturingCost(parseInt(e.target.value))}
        />
        <TextField
          label="Clinical Trials Cost"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={clinicalTrialsCost}
          onChange={(e) => setClinicalTrialsCost(parseInt(e.target.value))}
        />
        <TextField
          label="Regulatory Cost"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={regulatoryCost}
          onChange={(e) => setRegulatoryCost(parseInt(e.target.value))}
        />

        <Bar data={data} options={options} />
        {/* Add content for financial analysis here */}
      </Box>
    </Container>
  );
}

export default Financials;
