import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Box, CircularProgress, Typography, Button, Modal, TextField } from '@mui/material';
import BlogPost from '../components/BlogPost';

//commit line
const Blog = ({ urls }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blog', {
                    method: 'GET',
                    credentials: 'include',
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
                if (data.logged_in) {
                    setIsAdmin(data.isAdmin);
                }
            } catch (error) {
                console.error('Error fetching session details:', error);
            }
        };

        fetchPosts();
        fetchSessionDetails();
    }, []);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleCreatePost = async () => {
        if (!title || !body) {
            return alert("Please enter both title and body.");
        }

        try {
            const response = await fetch('/api/blog/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, body }),
                credentials: 'include',
            });
            if (response.ok) {
                const newPost = await response.json();
                setPosts([newPost, ...posts]); // Add new post to top of the list
                setTitle('');
                setBody('');
                handleCloseModal();
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            {isAdmin && (
                <Button variant="contained" color="secondary" sx={{ mb: 2 }} onClick={handleOpenModal}>
                    Create Post
                </Button>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                {posts.length > 0 ? (
                    posts.map((post) => <BlogPost key={post.id} post={post} />)
                ) : (
                    <Typography>No blog posts found.</Typography>
                )}
            </Box>

            {/* Modal for post creation */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="create-post-modal"
                aria-describedby="modal-to-create-post"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60%',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography variant="h6" component="h2" id="create-post-modal">
                        Create New Post
                    </Typography>
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                    <ReactQuill
                        value={body}
                        onChange={setBody}
                        placeholder="Write your post content here..."
                        style={{ height: '200px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleCreatePost}>
                        Submit
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default Blog;
