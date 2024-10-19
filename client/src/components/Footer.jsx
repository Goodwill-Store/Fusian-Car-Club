import React from 'react';
import { Box, Button, IconButton, List, ListItem, Divider, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                pt: '3%'
            }}
        >

            <Grid container spacing={2}>
                <Grid size={2}>
                    <List>
                        <ListItem sx={{ fontWeight: 'bold' }}>Solutions</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Marketing</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Analytics</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Commerce</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Insights</ListItem>
                    </List>
                </Grid>
                <Grid size={2}>
                    <List>
                        <ListItem sx={{ fontWeight: 'bold' }}>Pricing</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Documentation</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Guides</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>API Status</ListItem>
                    </List>
                </Grid>
                <Grid size={2}>
                    <List>
                        <ListItem sx={{ fontWeight: 'bold' }}>Company</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>About</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Blog</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Jobs</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Press</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Partners</ListItem>
                    </List>
                </Grid>
                <Grid size={2}>
                    <List>
                        <ListItem sx={{ fontWeight: 'bold' }}>Legal</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Privacy</ListItem>
                        <ListItem sx={{ fontWeight: '300' }}>Terms</ListItem>
                    </List>
                </Grid>
                <Grid size={4}>
                    <List>
                        <ListItem sx={{ fontWeight: 'bold' }}>
                            Subscribe to our newsletter
                        </ListItem>
                        <ListItem variant="p" gutterBottom>
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </ListItem>
                        <ListItem>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={8}>
                                    <TextField id="outlined-basic" label="Enter your email" variant="filled" fullWidth />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="contained" color="secondary" sx={{ height: '56px' }}> {/* Adjust this height */}
                                        Subscribe
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Divider sx={{ width: '100%', marginBottom: 1, backgroundColor: 'white' }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 1,
                    height: '100%',
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        &copy; {currentYear} Fusian Car Club. All rights reserved.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <IconButton
                        color="inherit"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon />
                    </IconButton>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;
