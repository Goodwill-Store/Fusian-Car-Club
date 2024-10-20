import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Box } from '@mui/material';

const Gallery = ({ urls }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, flexWrap: 'wrap' }}>
            <InstagramEmbed url="https://www.instagram.com/p/C9s65VVzyrw/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/DBGuzXSTHSO/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/C86vHRyJqyl/" width={328} />
        </Box>
    );
};

export default Gallery;
