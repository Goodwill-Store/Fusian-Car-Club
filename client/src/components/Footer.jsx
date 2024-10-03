import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                padding: '16px 0'
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Fusian Car Club
            </Typography>
            <Box sx={{ marginTop: 1 }}>
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
    );
};

export default Footer;
