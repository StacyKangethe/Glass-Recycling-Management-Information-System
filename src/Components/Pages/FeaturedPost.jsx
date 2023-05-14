import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../Navbar';
import Shop from './shop/Shop';
import Box  from "@mui/material/Box";
import Container from "@mui/material/Container";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Toolbar from "@mui/material/Toolbar";
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const cards = [ 
  {
   Id: 1,
   image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   location: 'Glass House Kenya',
   terms: 'Industrial Area, Off Enterprise Road,Nairobi', 
   workinghours: 'Open: 09:00-18:00',
   contact: 'Call: 0727737753',
  },
  {
    Id: 4,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'East African Portland Cement',
    terms: 'Athi River, Machakos', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0722205471',
   },
   {
    Id: 5,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Virogreen Kenya Ltd',
    terms: 'Grogan Road, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0717663355',
   },
   {
    Id: 6,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'East African Glassware Mart',
    terms: 'Industrial Area, Kampala Road', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0722946230',
   },
   {
    Id: 7,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'SafePak Limited',
    terms: 'Mombasa  Road, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0708668600',
   },
   {
    Id: 8,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Kenya Breweries Limited',
    terms: 'Commercial Street, Thika', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: +25420694200',
   },
   {
    Id: 9,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Nairobi Bottlers Limited',
    terms: 'Baba Dogo Road, Ruaraka', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: +254203538000',
   },
   {
    Id: 2,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Safal Glassware Ltd',
    terms: 'Mombasa Road, Nairobi', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0722207101',
   },
   {
    Id: 3,
    image: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    imageLabel: 'sticker',
    location: 'Bidco Africa Limited',
    terms: 'Thika-Garissa Road', 
    workinghours: 'Open: 9.00Am-5.00PM',
    contact: 'Call: 0709050600',
   },
 ];

 const theme = createTheme( {
 palette: {
  background: {
  paper: '#025928'
    },
 },
});

const FeaturedPost = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <main>
    <Grid item xs={12} md={6}>
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
              color="text.primary"
              gutterBottom
            >
              Manufacturing Plants
            </Typography>
            <Typography variant="h7" align="center" color="text.inherit" paragraph>
            We work with waste collectors both individual and companies, who ensure glass waste reaches the waste companies that sort the garbage.The sorted glass is sent to the Recycling companies and Glass Manufacturing Plants who recycle the glass to manufacture new bottles and glasses.
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
                  
                  sx={{ height: '50%', flexGrow: 1 }} color="secondary">
                    <LocationOnIcon sx={{ mr: 2 }} />
                    <Typography  variant="h6" component="div" align="center" color="text.inherit">
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
        </Grid>
        </main>
    </ThemeProvider>  
    );
}


export default FeaturedPost;