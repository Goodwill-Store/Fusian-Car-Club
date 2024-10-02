import { useEffect, useState } from 'react';
import './App.css'

function Checkapi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api') // Proxy will forward this to http://localhost:3000/api
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}

export default Checkapi
