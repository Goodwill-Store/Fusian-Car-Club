import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { CssBaseline, Box } from '@mui/material';

function Home() {
    return (
        <Box>
            <ResponsiveAppBar />
            <Hero />
            <Footer />
            <CssBaseline />
        </Box>
    );
}

export default Home;
