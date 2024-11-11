import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import BlogPost from '../components/BlogPost';

const Blog = ({ urls }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blog', {
                    method: 'GET',
                    credentials: 'include', // Include credentials if required for session management
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <CircularProgress />; // Show a loading spinner
    }

    if (error) {
        return <Typography color="error">{error}</Typography>; // Show error message
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2, flexWrap: 'wrap' }}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))
            ) : (
                <Typography>No blog posts found.</Typography>
            )}
        </Box>
    );
};

export default Blog;
