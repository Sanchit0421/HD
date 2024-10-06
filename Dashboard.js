// src/Dashboard.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = ({ energyData }) => {
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
        </Container>
    );
};

export default Dashboard;

