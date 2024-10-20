import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EventCards() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 350 }}
                image="https://i.pinimg.com/736x/bd/e0/40/bde0401148e215cf627df4e3d6492242.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    component="a"
                    href="https://www.google.com/maps/dir//belift+lab+location+korea/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x357ca5c56c098de9:0x26f5affb87dd3ada?sa=X&ved=1t:3061&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Location
                </Button>

            </CardActions>
        </Card>
    );
}
