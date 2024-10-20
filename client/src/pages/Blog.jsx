import React from 'react';
import { Box } from '@mui/material';
import EventCards from '../components/EventCards';

const Blog = ({ urls }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2, flexWrap: 'wrap' }}>
            <EventCards />
        </Box>
    );
};

export default Blog;
