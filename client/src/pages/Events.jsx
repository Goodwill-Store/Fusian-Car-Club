import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import EventCards from '../components/EventCards';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <CircularProgress />; // Show a loading spinner
    }

    if (error) {
        return <Typography color="error">{error}</Typography>; // Show error message
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2, flexWrap: 'wrap' }}>
            {events.length > 0 ? (
                events.map((event) => (
                    <EventCards key={event.id} event={event} /> // Pass the event data to EventCards component
                ))
            ) : (
                <Typography>No upcoming events found.</Typography> // Message if no events are available
            )}
        </Box>
    );
};

export default Events;
