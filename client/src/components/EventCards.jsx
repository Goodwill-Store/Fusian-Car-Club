import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// for now all events and cards are hardcoded, once the table is added we can just for each or map the cards
export default function EventCards() {
    return (
        <div>
            <Card sx={{
                display: 'flex',
                maxWidth: '80%',
                mb: 3,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <CardMedia
                    sx={{ width: 400, height: 400 }}
                    image="https://phinf.wevpstatic.net/MjAyNDA2MjNfMjQ0/MDAxNzE5MTA2ODkyNDI4.bn8u8QLW0DJdW0OsRph_Lc0RpME3KD98seg34xj1S_og.bRgTPuaVsfwUk0WzaLnLMAgKPGnVgtPoLS58xrlzxoog.JPEG/EN_FC01.jpg?type=w670"
                    title="Car Meet Event"
                />
                <CardContent sx={{ flex: '1' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Meet 10/20/24
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rev your engines and your K-pop playlists! Join us at the Seoul Car Meet, where horsepower meets heartthrobs. Come for the cars, stay for the kimchi!
                    </Typography>
                    <Button
                        size="small"
                        component="a"
                        href="https://www.google.com/maps/dir//belift+lab+location+korea/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x357ca5c56c098de9:0x26f5affb87dd3ada?sa=X&ved=1t:3061&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 2 }}
                    >
                        Location
                    </Button>
                </CardContent>
            </Card>

            <Card sx={{
                display: 'flex',
                maxWidth: '80%', // 1200px as a percentage of a 1920px parent
                mb: 3,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <CardContent sx={{ flex: '1' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Meet 10/20/24
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rev your engines and your K-pop playlists! Join us at the Seoul Car Meet, where horsepower meets heartthrobs. Come for the cars, stay for the kimchi!
                    </Typography>
                    <Button
                        size="small"
                        component="a"
                        href="https://www.google.com/maps/dir//belift+lab+location+korea/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x357ca5c56c098de9:0x26f5affb87dd3ada?sa=X&ved=1t:3061&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 2 }}
                    >
                        Location
                    </Button>
                </CardContent>
                <CardMedia
                    sx={{ width: 400, height: 400 }}
                    image="https://kpopping.com/documents/a7/1/1080/240623-billboard-Instagram-Update-with-ENHYPEN-documents-2.jpeg?v=50274"
                    title="Car Meet Event"
                />
            </Card>

            <Card sx={{
                display: 'flex',
                maxWidth: '80%', // 1200px as a percentage of a 1920px parent
                mb: 3,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <CardMedia
                    sx={{ width: 400, height: 400 }}
                    image="https://kpopping.com/documents/c3/4/2048/240624-ENHYPEN-UNTOLD-Concept-Cinema-Photo-Sketch-documents-5.jpeg?v=ef67f"
                    title="Car Meet Event"
                />
                <CardContent sx={{ flex: '1' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Meet 10/20/24
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rev your engines and your K-pop playlists! Join us at the Seoul Car Meet, where horsepower meets heartthrobs. Come for the cars, stay for the kimchi!
                    </Typography>
                    <Button
                        size="small"
                        component="a"
                        href="https://www.google.com/maps/dir//belift+lab+location+korea/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x357ca5c56c098de9:0x26f5affb87dd3ada?sa=X&ved=1t:3061&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 2 }}
                    >
                        Location
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
