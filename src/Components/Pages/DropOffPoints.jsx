import React from "react";
import Box  from "@mui/material/Box";
import { Button } from "@mui/material";
import Navbar from "../Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useSpring, animated } from "react-spring";
import { rgb } from "@react-spring/shared";

const cards = [ 
  {
   Id: 3,
   image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   location: 'Ecandi',
   terms: 'Limuru Road', 
   workinghours: 'Open: MON-SAT: 09:00-18:00',
   contact: 'Call: 0741777986',
  },
  {
    Id: 4,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Mr.Green Africa',
    terms: 'Old Mombasa Road, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0709201000',
   },
   {
    Id: 5,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Taka Taka Solutions',
    terms: 'Karen, Nairobi', 
    workinghours: 'Dunga Close, Off Dunga Road',
    contact: 'Call: 0713293455',
   },
   {
    Id: 6,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Glass House Kenya',
    terms: 'Industrial Area, Nairobi', 
    workinghours: 'Off Enterprise Road',
    contact: 'Call: 0727737753',
   },
   {
    Id: 7,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Virogreen Kenya Limited',
    terms: 'Grogan Road, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0717663355',
   },
   {
    Id: 8,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'EcoPost Limited',
    terms: 'Baba Dogo Road, Ruaraka, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0713678032',
   },
 ];

const theme = createTheme( {
  palette: {
    background: {
    paper: '#D4B957'
      },
   },
});

function DropOffPoints() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'white',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
             Drop-Off Points
            </Typography>
            <Typography variant="h7" align="center" color="text.inherit">
            Are you looking to dispose-off the bottles at your premise? Scroll through the locations and find your closest collection point. If too bulky or too many beyond your comfort, request for pick up using the contacts given.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.Id} xs={12} sm={6} md={4}>
                <Card
                  
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
  
                  <Toolbar 
                  
                  sx={{ flexGrow: 1 }} color="secondary">
                    <LocationOnIcon sx={{ mr: 2 }} />
                    <Typography  variant="h5" component="div" align="center" color="text.inherit">
                    {card.location}
                    </Typography>
                  </Toolbar>  
                  <CardContent style={{backgroundColor: "white"}} sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h7" component="div" color="text.primary">
                    {card.terms}
                  </Typography>
                  <Typography gutterBottom>
                  </Typography>
                  <Typography gutterBottom>
                    {card.workinghours}
                  </Typography>
                  <Typography gutterBottom>
                    {card.contact}
                  </Typography>
                  
                </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>  
   

    );
}




export default DropOffPoints;


