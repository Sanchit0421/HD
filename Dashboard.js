// src/Dashboard.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Dashboard = ({ energyData }) => {
    const history = useHistory();

    const handleDetailsClick = () => {
        history.push('/energy-details'); // Navigate to the details page
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Energy Usage Dashboard
            </Typography>

            {/* Add a sample image here for confirmation */}
            <Card>
            <CardMedia
    component="img"
    alt="Sample Image"
    height="140"
    image="https://via.placeholder.com/150" // Placeholder image for testing
/>

                <CardContent>
                    <Typography variant="h5">Sample Image</Typography>
                </CardContent>
            </Card>

            <Grid container spacing={3}>
                {energyData.map((device) => (
                    <Grid item xs={12} sm={6} md={4} key={device.device}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={device.device}
                                height="140"
                                image={device.imageUrl} // Ensure this URL is valid
                            />
                            <CardContent>
                                <Typography variant="h5">{device.device}</Typography>
                                <Typography variant="body2">
                                    Usage: {device.usage} kWh
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={handleDetailsClick}>
                View Energy Details
            </Button>
        </Container>
    );
};

export default Dashboard;
<<<<<<< HEAD
=======


export default Dashboard;



>>>>>>> d97b2534291d017b516aeffa09f6c31137050a8b
