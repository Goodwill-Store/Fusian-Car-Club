import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/logo.webp';

// The page redirects
const pages = [
    { label: 'Home', url: '/' },
    { label: 'Merch', url: '/Merch' },
    { label: 'Events', url: '/events' },
    { label: 'Gallery', url: '/Gallery' },
    { label: 'Blog', url: '/Blog' },
];

function ResponsiveAppBar() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [username, setUsername] = React.useState('');

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
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Wrap the logo and links in the same box */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '80%',
                        }}
                    >
                        {/* Logo treated as part of the links */}
                        <Button href="/" sx={{ padding: 0 }}>
                            <img
                                src={logo}
                                alt="Custom Logo"
                                style={{ width: '85px', height: '85px' }}
                            />
                        </Button>

                        {/* Links */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', ml: 2 }}>
                            {pages.map((item) => (
                                <Button
                                    key={item.label}
                                    href={item.url}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    {/* Hello Username or Login button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', pr: '3%' }}>
                        {isAuthenticated ? (
                            <Typography variant="body1" sx={{ color: 'white', mr: 2 }}>
                                Hello, {username}!
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
