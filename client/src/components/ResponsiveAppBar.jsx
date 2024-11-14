import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.webp';
import LoginDialog from './LoginDialog';
import SignUpDialog from './SignUpDialog';

// The page redirects
const pages = [
    { label: 'Home', url: '/' },
    { label: 'Merch', url: '/merch' },
    { label: 'Events', url: '/events' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Blog', url: '/blog' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const handleLoginOpen = () => setIsLoginOpen(true);
    const handleLoginClose = () => setIsLoginOpen(false);
    const handleSignUpOpen = () => setIsSignUpOpen(true);
    const handleSignUpClose = () => setIsSignUpOpen(false);

    useEffect(() => {
        const fetchSessionDetails = async () => {
            try {
                const response = await fetch('api/user/session', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();

                if (data.logged_in) {
                    setIsAuthenticated(true);
                    setUsername(data.username);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error fetching session details:', error);
            }
        };
        fetchSessionDetails();
    }, []);

    const handleLoginSuccess = (username) => {
        setIsAuthenticated(true);
        setUsername(username);
        handleLoginClose();
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/user/logout', {
                method: 'POST',
                credentials: 'include',
            });
            if (response.ok) {
                setIsAuthenticated(false);
                setUsername('');
                handleCloseUserMenu();
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <AppBar sx={{ mb: 8 }} position="static">
            <Container maxWidth="xl" sx={{ width: '60%' }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Button href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, padding: 0 }}>
                            <img src={logo} alt="Custom Logo" style={{ width: '85px', height: '85px' }} />
                        </Button>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((item) => (
                                <Button
                                    key={item.label}
                                    href={item.url}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isAuthenticated ? (
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        {/* to do: fix icon size */}
                                        <AccountCircleIcon sx={{ fontSize: 40, color: 'white' }} />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Button variant="contained" color="secondary" onClick={handleLoginOpen}>
                                    Login
                                </Button>
                            )}

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={() => {
                                            handleCloseUserMenu();
                                            if (setting === 'Logout') {
                                                handleLogout();
                                            }
                                        }}
                                    >
                                        <Typography sx={{ textAlign: 'center', color: 'black' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
            <LoginDialog open={isLoginOpen} onClose={handleLoginClose} onSignupOpen={handleSignUpOpen} onLoginSuccess={handleLoginSuccess} />
            <SignUpDialog open={isSignUpOpen} onClose={handleSignUpClose} />
        </AppBar>
    );
}

export default ResponsiveAppBar;
