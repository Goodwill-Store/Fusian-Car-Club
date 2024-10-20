import React from 'react';
import { Box } from '@mui/material';
import EventCards from '../components/EventCards';

const Blog = ({ urls }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2, flexWrap: 'wrap' }}>

            <iframe width="1012" height="569" src="https://www.youtube.com/embed/wX-200CwxeM?autoplay=1&mute=1&start=33" title="ENHYPEN (엔하이픈) &#39;Drunk-Dazed&#39; Official MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
    );
};

export default Blog;
