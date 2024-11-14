import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Accept event data as props
const EventCards = ({ event }) => {
    return (
        <Card sx={{
            display: 'flex',
            width: '60%',
            mb: 3,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <CardMedia
                sx={{ width: 400, height: 400 }}
                image={event.image} // Use event's image URL
                title={event.title} // Use event's title
            />
            <CardContent sx={{ flex: '1' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {event.title} {new Date(event.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {event.body}
                </Typography>
                <Button
                    size="small"
                    component="a"
                    href={event.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2 }}
                >
                    Location  <LocationOnIcon />
                </Button>
            </CardContent>
        </Card>
    );
};

export default EventCards;
