import React, { useState } from 'react';
import { Box, List, ListItem, Link, TextField, Button, Typography, IconButton, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [unsubscribeOpen, setUnsubscribeOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    const handleSubscribe = async () => {
        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('Subscribed successfully!');
            } else {
                setMessage(result.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error('Subscription error:', error);
        }
    };

    const handleUnsubscribe = async () => {
        try {
            const response = await fetch('/api/newsletter/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('Unsubscribed successfully!');
                setUnsubscribeOpen(false); // Close the modal
            } else {
                setMessage(result.message || 'Failed to unsubscribe. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error('Unsubscription error:', error);
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                pt: '3%',
                pb: '1%',
            }}
        >
            <Box sx={{ flexGrow: 1, px: '3%', pb: '1%' }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>Solutions</ListItem>
                            <ListItem><Link href="/gallery">Gallery</Link></ListItem>
                            <ListItem><Link href="/events">Events</Link></ListItem>
                            <ListItem><Link href="/blog">Blog</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>Company</ListItem>
                            <ListItem><Link href="/about">About Us</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>
                                Subscribe to our newsletter.
                            </ListItem>
                            <ListItem variant="p">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </ListItem>
                            <ListItem sx={{ color: "red" }} variant="p">
                                {message}
                            </ListItem>
                            <ListItem>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid size={{ xs: 8 }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter your email"
                                            variant="filled"
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 4 }}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            sx={{ height: '56px' }}
                                            onClick={handleSubscribe}
                                        >
                                            Subscribe
                                        </Button>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href="#"
                                    onClick={() => setUnsubscribeOpen(true)}
                                    underline="hover"
                                >
                                    Unsubscribe
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ width: '100%', marginBottom: 1, backgroundColor: 'white' }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: '5%', sm: '3%' },
                }}
            >
                <Typography variant="body2" sx={{ marginTop: { xs: 2, sm: 0 } }}>
                    &copy; {currentYear} Fusian Car Club
                </Typography>

                <Box sx={{ display: 'flex', mt: { xs: 2, sm: 0 } }}>
                    <IconButton color="inherit" href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Unsubscribe Modal */}
            <Dialog open={unsubscribeOpen} onClose={() => setUnsubscribeOpen(false)}>
                <DialogTitle>Unsubscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Enter your email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setUnsubscribeOpen(false)}>Cancel</Button>
                    <Button variant="contained" color="secondary" onClick={handleUnsubscribe}>
                        Unsubscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Footer;
