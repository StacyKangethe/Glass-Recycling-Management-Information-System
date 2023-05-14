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
import { Link } from "react-router-dom";

const cards = [ 
  {
   Id: 1,
   image: 'https://images.unsplash.com/photo-1626747086388-b83fc4e1aca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   location: 'Eldoret',
   description: 'Collected this week', 
   data: 2378,
  },
  {
   Id: 2,
   image: 'https://images.unsplash.com/photo-1648142375707-03918153f53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvdHRsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   location: 'Eldoret',
   description: 'Recycled', 
   data: 1845,
  },
  {
   Id: 3,
   image: 'https://images.unsplash.com/photo-1641895862407-d4e23bccc950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZGZpbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   location: 'Eldoret',
   description: 'Taken to Landfill', 
   data: 533,
  },
 ];

const theme = createTheme();



function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

function CTA() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
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
              What is Glass THRIFT?
            </Typography>
            <Typography variant="h6" align="center" color="text.inherit" paragraph>
            We are building a circular eco-system for glass recycling in Kenya. By collaborating with individuals and companies, we facilitate the collection of unwanted bottles and glasses for recycling to save our landfills and create jobs. Recycling is the future.
            </Typography>
            <Link to="/shop">
            <Button variant="contained"color="secondary">Learn How</Button>
            </Link>
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
                  <Toolbar sx={{ flexGrow: 1 }} color="secondary">
                    <LocationOnIcon sx={{ mr: 2 }} />
                    <Typography variant="h5" align="center" color="text.secondary">
                      {card.location}
                    </Typography>
                  </Toolbar> 
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: 220,
                    }}
                    image={card.image}
                    alt={card.imageLabel}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h2" component="h2" color="secondary">
                    <Number n={card.data} />
                  </Typography>
                  <Typography gutterBottom>
                  </Typography>
                  <Typography gutterBottom>
                    {card.description}
                  </Typography>
                </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    
    
    
    
    
    
    
    
   

    );
}




export default CTA;