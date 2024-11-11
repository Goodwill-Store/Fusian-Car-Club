import { createTheme } from '@mui/material/styles';
import heroImage from './assets/DSC05418-Enhanced-NR.jpg'; // Import image

//Here you can create custom theme. This is the theme thats currently being used. 
//Everything below is basically garbage, I just added it here so we know its an option.
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
            default: '#FFFFFF', // Default background color
            paper: '#F5F5F5', // Paper background color
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontSize: '2rem', // Customize heading sizes
            color: 'white'
        },
        body1: {
            fontSize: '1rem',
            color: 'white'
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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay color
                        zIndex: -1,
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3B3C3C', // Dark background for filled input
                    '& .MuiFilledInput-input': {
                        color: '#ffffff', // Text color
                    },
                    '&:hover': {
                        backgroundColor: '#2C2D2D', // Darker on hover
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#3B3C3C', // Keep same color when focused
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'rgba(255, 255, 255, 0.7)', // Label color
                    '&.Mui-focused': {
                        color: '#EA1D25', // Label color when focused
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#ffffff', // Make links white by default
                },
            },
        },
    },
});

export default theme;
