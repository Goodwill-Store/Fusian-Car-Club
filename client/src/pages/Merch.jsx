import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import merchImageHaerin from '../assets/MerchImages/haerin.jpg';
import merchImageHanni from '../assets/MerchImages/hanni.jpg';
import merchImageHyein from '../assets/MerchImages/hyein.jpg';
import merchImageMinji from '../assets/MerchImages/minji.jpg';

const merchItems = [
  { id: 1, name: 'Integra Target En-Route T-Shirt', price: '$29.99 USD', img: merchImageHaerin, soldOut: true },
  { id: 2, name: 'SEIKERS "Seikersclub & 10-21" White T-Shirt', price: '$34.99 USD', img: merchImageHanni, soldOut: true },
  { id: 3, name: 'SEIKERS "Seikersclub & 10-21" Grey T-Shirt', price: '$34.99 USD', img: merchImageHyein, soldOut: true },
  { id: 4, name: 'SEIKERS "Driven to Madness" Grey Hoodie', price: '$59.99 USD', img: merchImageMinji, soldOut: true },
];

function Merch() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(merchItems);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        WELCOME TO OUR SHOP
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 300,
                height: '100%',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={item.img}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {item.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                {item.soldOut ? (
                  <Button variant="contained" color="error" disabled>
                    Sold Out
                  </Button>
                ) : (
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Merch;
