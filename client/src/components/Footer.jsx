import React, { useState } from 'react';
import { Box, List, ListItem, Link, TextField, Button, Typography, IconButton, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
                            <ListItem sx={{ fontWeight: 'bold' }}>Solutions </ListItem>
                            <ListItem><Link href="#">Gallery</Link></ListItem>
                            <ListItem><Link href="#">Events</Link></ListItem>
                            <ListItem><Link href="#">Blog</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>Pricing</ListItem>
                            <ListItem><Link href="#">Merch</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>Company</ListItem>
                            <ListItem><Link href="#">About Us</Link></ListItem>

                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>Legal</ListItem>
                            <ListItem><Link href="#">Terms</Link></ListItem>
                            <ListItem><Link href="#">Disclaimers</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <List>
                            <ListItem sx={{ fontWeight: 'bold' }}>
                                Subscribe to our newsletter
                            </ListItem>
                            <ListItem variant="p">
                                The latest news, articles, and resources, sent to your inbox weekly.
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
        </Box>
    );
};

export default Footer;
