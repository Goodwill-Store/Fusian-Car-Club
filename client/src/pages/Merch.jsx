import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
    img: merchImageHaerin,
    soldOut: true,
  },
  {
    id: 2,
    name: 'SEIKERS "Seikersclub & 10-21" White T-Shirt',
    price: '$34.99 USD',
    img: merchImageHanni,
    soldOut: true,
  },
  {
    id: 3,
    name: 'SEIKERS "Seikersclub & 10-21" Grey T-Shirt',
    price: '$34.99 USD',
    img: merchImageHyein,
    soldOut: true,
  },
  {
    id: 4,
    name: 'SEIKERS "Driven to Madness" Grey Hoodie',
    price: '$59.99 USD',
    img: merchImageMinji,
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
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ensure the button is pushed to the bottom
                maxWidth: 345,
                height: '100%', // Make all cards the same height
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.price}
                </Typography>
              </CardContent>
              {item.soldOut && (
                <Button
                  variant="contained"
                  color="error"
                  disabled
                  sx={{ mt: 1, ml: 2, mb: 2 }}
                >
                  Sold Out
                </Button>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Merch;
