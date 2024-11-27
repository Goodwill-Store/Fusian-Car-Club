import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress, Typography, Modal, TextField } from '@mui/material';
import EventCards from '../components/EventCards';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Check if the user is an admin
    const [openModal, setOpenModal] = useState(false); // Modal state
    const [title, setTitle] = useState(''); // Event title
    const [date, setDate] = useState(''); // Event date
    const [location, setLocation] = useState(''); // Event location
    const [body, setBody] = useState(''); // Event body

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events', {
                    method: 'GET',
                    credentials: 'include', // Include credentials if required for session management
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                setEvents(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setTitle('');
        setDate('');
        setLocation('');
        setBody('');
    };

    const handleCreateEvent = async () => {
        try {
            const response = await fetch('/api/user/session', {
                method: 'GET',
                credentials: 'include', // Include session credentials for admin validation
                body: JSON.stringify({ title, date, location, body }),
            });
            if (!response.ok) {
                throw new Error('Failed to create event');
            }
            const newEvent = await response.json();
            setEvents((prevEvents) => [...prevEvents, newEvent]);
            handleCloseModal();
        } catch (err) {
            console.error('Error creating event:', err);
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            {isAdmin && (
                <Button variant="contained" color="secondary" sx={{ mb: 2 }} onClick={handleOpenModal}>
                    Create Event
                </Button>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', width: '80%' }}>
                {events.length > 0 ? (
                    events.map((event) => <EventCards key={event.id} event={event} />)
                ) : (
                    <Typography>No upcoming events found.</Typography>
                )}
            </Box>

            {/* Modal for creating a new event */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="create-event-modal"
                aria-describedby="modal-to-create-event"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50%',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography id="create-event-modal" variant="h6" component="h2">
                        Create New Event
                    </Typography>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
                        label="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleCreateEvent}>
                        Submit
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default Events;
