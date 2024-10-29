import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography } from '@mui/material';

function LoginDialog({ open, onClose, onSignupOpen }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        const loginData = { username, password };
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Login failed. Please try again.');
                return;
            }
            onClose();
        } catch (error) {
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                {errorMessage && <Typography color="error" variant="body2" gutterBottom>{errorMessage}</Typography>}
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
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={onSignupOpen} color="primary">Sign Up</Button>
                <Button onClick={handleLogin} color="primary">Login</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LoginDialog;
