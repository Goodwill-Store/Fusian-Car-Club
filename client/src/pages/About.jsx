import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Test() {
    return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        About Us
      </Typography>
      <Grid container spacing={2}>
      <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Mark Williams - Project Manager
            </Typography>
            <Typography variant="body1" color="text.primary">
                Mark made sure that everyone in the team shared our objectives and that the project remained on course. His organizational and leadership abilities were essential to producing a top-notch product on schedule.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Jose Hernandez - Business Analyst
            </Typography>
            <Typography variant="body1" color="text.primary">
                Jose acted as the bridge between our team and our client. He meticulously converted client demands into workable business specifications, allowing us to produce a solution that lived up to expectations.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Jean Carlos Lin Lai & Anastasia Tarasenko - Web Programmers
            </Typography>
            <Typography variant="body1" color="text.primary">
                Jean and Anastasia were in charge of the website's technical development. Their programming and problem-solving skills enabled us to realize our objective.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Anthony Leiva-Ochoa - Graphic Designer
            </Typography>
            <Typography variant="body1" color="text.primary">
                Anthony concentrated on the website's visual appeal, producing a unified and eye-catching design. His creative design and image editing abilities improved the user experience on the website.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Isaiah William - Information Architect
            </Typography>
            <Typography variant="body1" color="text.primary">
                Isaiah created and arranged the website's content, making sure it was set up to satisfy our users' demands.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Nicolas Gomez - Technical Writer
            </Typography>
            <Typography variant="body1" color="text.primary">
                Nicolas documented the technical specifications and created training materials for transitioning the website to our customers, ensuring smooth handover and usability.
            </Typography>
            </CardContent>
        </Card>

        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 300,
            height: '100%',
            boxShadow: 3,
          }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Oneil Daley - Quality Assurance
            </Typography>
            <Typography variant="body1" color="text.primary">
                Oneil thoroughly tested the website to make sure it was error-free and satisfied client needs. His efforts validated the website's cross-platform functionality, compatibility, and accessibility.
            </Typography>
            </CardContent>
        </Card>
        </Grid>
    </Box>
    );
}

export default Test;
