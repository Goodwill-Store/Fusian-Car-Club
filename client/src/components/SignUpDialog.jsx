import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography } from '@mui/material';

function SignUpDialog({ open, onClose }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleSignUp = async () => {
        const signUpData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signUpData),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Get error data from response
                throw new Error(errorData.message || 'Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            onClose(); // Close the dialog on success
        } catch (error) {
            console.error('Error during sign up:', error);
            setErrorMessage(error.message); // Set the error message to display
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && ( // Display error message if it exists
                    <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                        {errorMessage}
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSignUp} color="primary">
                    Sign Up
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SignUpDialog;
