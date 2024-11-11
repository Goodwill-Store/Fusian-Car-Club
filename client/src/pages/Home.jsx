import React, { useState } from 'react';
import Hero from '../components/Hero';
import SignUpDialog from '../components/SignUpDialog';
import LoginDialog from '../components/LoginDialog';
import { Box } from '@mui/material';

function Home() {
    // Separate states for SignUp and Login dialogs
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // Handlers for SignUp dialog
    const handleSignUpOpen = () => {
        setIsSignUpOpen(true);
    };

    const handleSignUpClose = () => {
        setIsSignUpOpen(false);
    };

    // Handlers for Login dialog
    const handleLoginOpen = () => {
        setIsLoginOpen(true);
    };

    const handleLoginClose = () => {
        setIsLoginOpen(false);
    };

    return (
        <Box
            sx={{
                flex: 1,  // Allows Home to expand to fill available space
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Hero onGetStartedClick={handleSignUpOpen} onLoginClick={handleLoginOpen} />
            <SignUpDialog open={isSignUpOpen} onClose={handleSignUpClose} />
            <LoginDialog open={isLoginOpen} onClose={handleLoginClose} />
        </Box>
    );
}

export default Home;
