import { createTheme } from '@mui/material/styles';
import heroImage from './assets/DSC05418-Enhanced-NR.jpg'; // Import image

const theme = createTheme({
    palette: {
        primary: {
            main: '#3B3C3C',
            text: {
                primary: '#ffffff',
            },
        },
        secondary: {
            main: '#EA1D25',
        },
        error: {
            main: '#EA1D25',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontSize: '2rem',
            color: 'white',
        },
        body1: {
            fontSize: '1rem',
            color: 'white',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    zIndex: 0,
                    '&::before': {
                        content: '""',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        zIndex: -1,
                    },
                    '&::after': {
                        content: '""',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: -1,
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3B3C3C',
                    '& .MuiFilledInput-input': {
                        color: '#ffffff',
                    },
                    '&:hover': {
                        backgroundColor: '#2C2D2D',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#3B3C3C',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'rgba(90, 90, 90)',
                    '&.Mui-focused': {
                        color: '#EA1D25',
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    color: '#000000', // Ensures all text in modals is black
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#000000', // Ensures black text color for typography inside modal
                },
            },
        },
    },
});

export default theme;
