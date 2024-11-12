import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import BlogPost from '../components/BlogPost';

const Blog = ({ urls }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

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

        const fetchSessionDetails = async () => {
            try {
                const response = await fetch('/api/user/session', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                console.log(data);
                if (data.logged_in) {
                    setIsAdmin(data.isAdmin); // Assume 'isAdmin' is returned in session details
                }
            } catch (error) {
                console.error('Error fetching session details:', error);
            }
        };

        fetchPosts();
        fetchSessionDetails();
    }, []);

    if (loading) {
        return <CircularProgress />; // Show a loading spinner
    }

    if (error) {
        return <Typography color="error">{error}</Typography>; // Show error message
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            {isAdmin ? (
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mb: 2 }}
                    onClick={() => { /* Handle create post action here */ }}
                >
                    Create Post
                </Button>
            ) : <Typography color="error">TEST</Typography>}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                    ))
                ) : (
                    <Typography>No blog posts found.</Typography>
                )}
            </Box>
        </Box>
    );
};

export default Blog;
