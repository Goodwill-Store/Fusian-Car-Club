import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = ({ onGetStartedClick }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '90vh',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay for better text contrast
                },
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h2" gutterBottom>
                    Welcome Fusian Car Club
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Discover amazing content and connect with us!
                </Typography>
                <Button variant="contained" color="primary" onClick={onGetStartedClick}>
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
