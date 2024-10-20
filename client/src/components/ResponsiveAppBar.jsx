import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.webp';

const pages = [
    { label: 'Home', url: '/' },
    { label: 'Merch', url: '/Merch' },
    { label: 'Events', url: '/test' },
    { label: 'Gallery', url: '/Gallery' },
    { label: 'Blog', url: '/' },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [username, setUsername] = React.useState('');

    // Fetch session details on component mount
    React.useEffect(() => {
        const fetchSessionDetails = async () => {
            try {
                console.log('/fetchSessionDetails');
                const response = await fetch('api/user/session', {
                    method: 'GET',
                    credentials: 'include', // Include cookies for session
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

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        src={logo}
                        alt="Custom Logo"
                        style={{ width: '85px', height: '85px' }}
                    />

                    {/* Left part: Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((item) => (
                            <Button
                                key={item.label}
                                onClick={handleCloseNavMenu}
                                href={item.url}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Right part: Hello Username or Login button */}
                    <Box sx={{ flexGrow: 0 }}>
                        {isAuthenticated ? (
                            <Typography variant="body1" sx={{ color: 'white', mr: 2 }}>
                                Hello, {username} !
                            </Typography>
                        ) : (
                            <Button
                                color="inherit"
                                href="/login"  // Change this to your actual login route
                                sx={{ color: 'white' }}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
