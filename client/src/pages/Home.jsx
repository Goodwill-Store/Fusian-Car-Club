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
        <Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    mt: 8,
                }}

            >
                <Hero onGetStartedClick={handleSignUpOpen} onLoginClick={handleLoginOpen} />

                <SignUpDialog open={isSignUpOpen} onClose={handleSignUpClose} />
                <LoginDialog open={isLoginOpen} onClose={handleLoginClose} />

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, flexWrap: 'wrap' }}>

                <div class="elfsight-app-e0276fc0-1e71-4190-a7c7-75648ef6d921" data-elfsight-app-lazy></div>
            </Box>
        </Box>
    );
}

export default Home;
