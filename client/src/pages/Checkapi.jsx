import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Checkapi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api') // Proxy will forward this to http://localhost:3000/api
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Box>
            <Box sx={{
                height: '75vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h5" component="div">
                        API Data
                    </Typography>
                    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
                </Paper>
            </Box>
        </Box>
    );
}

export default Checkapi
