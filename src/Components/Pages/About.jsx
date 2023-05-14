import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { MarginRounded } from '@mui/icons-material';
import { CardMedia } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        <h3 align="left">Add our superpowers to your Recycling Journey</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
            '& > :not(style)': {
          m: 3,
          width: 168,
          height: 128,
          paddingLeft: 20,
          marginLeft:10,
          marginRounded: 12
          },
        }}
       >
      <Paper flexWrap="wrap" elevation={16} background-image="https://source.unsplash.com/random" >
      </Paper>
      <Paper elevation={16}>
      <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            alt="random"
        />
      </Paper>
      <Paper elevation={16}>
      <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            alt="random"
        />
      </Paper>
    </Box>
    </Container>
  );
}
