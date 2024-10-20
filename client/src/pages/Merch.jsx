import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import merchImageHaerin from '../assets/MerchImages/haerin.jpg'; // Import image
import merchImageHanni from '../assets/MerchImages/hanni.jpg'; // Import image
import merchImageHyein from '../assets/MerchImages/hyein.jpg'; // Import image
import merchImageMinji from '../assets/MerchImages/minji.jpg'; // Import image


// Mock data for merch items
const merchItems = [
  {
    id: 1,
    name: 'Integra Target En-Route T-Shirt',
    price: '$29.99 USD',
    img: merchImageHaerin, // Replace with actual image path
    soldOut: true,
  },
  {
    id: 2,
    name: 'SEIKERS "Seikersclub & 10-21" White T-Shirt',
    price: '$34.99 USD',
    img: merchImageHanni, // Replace with actual image path
    soldOut: true,
  },
  {
    id: 3,
    name: 'SEIKERS "Seikersclub & 10-21" Grey T-Shirt',
    price: '$34.99 USD',
    img: merchImageHyein, // Replace with actual image path
    soldOut: true,
  },
  {
    id: 4,
    name: 'SEIKERS "Driven to Madness" Grey Hoodie',
    price: '$59.99 USD',
    img: merchImageMinji, // Replace with actual image path
    soldOut: true,
  },
];

function Merch() {
  const [items, setItems] = useState([]);

  // Simulate fetching the data
  useEffect(() => {
    setItems(merchItems);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Merch Store
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Box
                component="img"
                src={item.img}
                alt={item.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
              {item.soldOut && (
                <Button
                  variant="contained"
                  color="error"
                  disabled
                  sx={{ mt: 1 }}
                >
                  Sold Out
                </Button>
              )}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {item.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.price}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Merch;
