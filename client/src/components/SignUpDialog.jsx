import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

function SignUpDialog({ open, onClose }) {
    const handleSignUp = () => {
        // Handle sign-up logic here
        console.log("Sign up submitted");
        onClose(); // Close the dialog after sign up
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                />
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
