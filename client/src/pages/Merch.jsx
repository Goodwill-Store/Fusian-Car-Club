import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Merch() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/merch', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <CircularProgress />; // Show a loading spinner
  }

  if (error) {
    return <Typography color="error">{error}</Typography>; // Show error message
  }

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
                image={item.image}
                alt={item.type}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.type}
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
