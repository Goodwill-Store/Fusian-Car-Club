import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.webp';

// The page redirects
const pages = [
    { label: 'Home', url: '/' },
    { label: 'Merch', url: '/Merch' },
    { label: 'Events', url: '/events' },
    { label: 'Gallery', url: '/Gallery' },
    { label: 'Blog', url: '/Blog' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [username, setUsername] = React.useState('');

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Fetch session details on component mount
    React.useEffect(() => {
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

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ width: '60%' }}>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        {/* Logo */}
                        <Button href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, padding: 0 }}>
                            <img src={logo} alt="Custom Logo" style={{ width: '85px', height: '85px' }} />
                        </Button>

                        {/* Navigation Links */}
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

                        {/* Right-aligned Box (no flexGrow here) */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isAuthenticated ? (
                                <Typography variant="body1" sx={{ color: 'white', mr: 2 }}>
                                    {/* Hello, {username}! */}
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1334279158982053889/Hztrq8H0_400x400.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            ) : (
                                <Button
                                    color="inherit"
                                    href="/login"
                                    sx={{ color: 'white' }}
                                >
                                    Login
                                </Button>
                            )}

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center', color: 'black' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default ResponsiveAppBar;
