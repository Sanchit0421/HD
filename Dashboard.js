// src/Dashboard.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Dashboard = ({ energyData }) => {
    const history = useHistory(); // Hook to access history

    const handleDetailsClick = () => {
        history.push('/energy-details'); // Navigate to the details page
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Energy Usage Dashboard
            </Typography>
            <Grid container spacing={3}>
                {energyData.map((device) => (
                    <Grid item xs={12} sm={6} md={4} key={device.device}>
                        <Card>
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


