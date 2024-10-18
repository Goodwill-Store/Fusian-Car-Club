import React, { useState } from 'react';
import Hero from '../components/Hero';
import SignUpDialog from '../components/SignUpDialog';

function Home() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {/* Pass the open handler to Hero */}
            <Hero onGetStartedClick={handleClickOpen} />

            {/* SignUp Dialog */}
            <SignUpDialog open={open} onClose={handleClose} />
        </div>
    );
}

export default Home;
