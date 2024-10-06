// src/EnergyDetails.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const EnergyDetails = ({ energyData }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Energy Details
            </Typography>
            <Grid container spacing={3}>
                {energyData.map((device) => (
                    <Grid item xs={12} sm={6} md={4} key={device.device}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={device.device}
                                height="140"
                                image={device.imageUrl}
                            />
                            <CardContent>
                                <Typography variant="h6">{device.device}</Typography>
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

export default EnergyDetails;
