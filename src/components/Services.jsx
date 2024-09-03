import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SchoolIcon from '@mui/icons-material/School';

const Services = () => {
  const features = [
    {
      icon: <AccessTimeIcon style={{ fontSize: 90, color: '#F4A261' }} />,
      title: 'Discover Availability',
      description: 'Explore and choose a convenient time slot that suits your schedule',
    },
    {
      icon: <LocalOfferIcon style={{ fontSize: 90, color: '#F4A261' }} />,
      title: 'Book Your Session',
      description: 'Book your preferred service effortlessly with our user-friendly system',
    },
    {
      icon: <SchoolIcon style={{ fontSize: 90, color: '#F4A261' }} />,
      title: 'Enjoy Expert Care',
      description: 'Exceptional beauty by skilled, dedicated professionals',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#FFF8F5',
        py: 16,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{ textAlign: 'center', padding: '2rem' }}
          >
            {feature.icon}
            <Typography variant="h5" sx={{ color:"#100c08", fontSize:"29px", mt: 2, fontWeight: '600' }}>
              {feature.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#6D6D6D',
                maxWidth: '350px',
                wordWrap: 'break-word', // Ensure long words break correctly
                margin: '12px auto',
              }}
            >
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
