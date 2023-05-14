import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Product } from './product';
import "./shop.css";
 
//App.js


/**
 * Retrieve the current cart or create one if one does not exist
 * https://commercejs.com/docs/sdk/cart
 */
  
const shopPost = [ 
  {
   id: 1,
   image: 'https://images.unsplash.com/photo-1626747086388-b83fc4e1aca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   productName: 'Metal Bins',
   description: 'Colored bins used in commercial buildings', 
   price: 3000,
  },
  {
   id: 2,
   image: 'https://images.unsplash.com/photo-1610106836884-ec496933aff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
   imageLabel: 'sticker',
   productName: 'Striped Metal Bins',
   description: 'Guided bins with instructions of waste disposal', 
   price: 1200,
  },
  {
   id: 3,
   image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   productName: 'Sticker Bins',
   description: 'Plastic Bins with colorful stickers indicating type of waste.', 
   price: 800,
  },
  {
   id: 4,
   image: 'https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   productName: 'B&W Labels',
   description: 'Well designed Labels in well selected typography.', 
   price: 500,
  },
  {
   id: 5,
   image: 'https://images.unsplash.com/photo-1572010696997-c73e95aeebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZyUyMGJveGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   productName: 'Labelled Boxes',
   description: 'Used to dispose off glass and storing glass bottles during transportation.', 
   price: 80,
  },
  {
   id: 6,
   image: 'https://images.unsplash.com/photo-1675395594169-c6b14260e271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlY3ljbGUlMjBzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
   imageLabel: 'sticker',
   productName: 'Wood Signage',
   description: 'Used in public spaces to guide the audience on what is expected within that environment.', 
   price: 350,
  },
 ];

const theme = createTheme();



export default function Shop() {
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
             Waste Accessories
            </Typography>
            <Typography variant="h7" align="center" color="text.inherit" paragraph>
            It starts with you, disposing waste in the correct bin, a well labelled bin.<br></br> We bring bins, labels and packaging containers right to your doorstep.<br></br> By separating glass waste from other waste, we increase the rate of glass recycling in Kenya <br></br> and together, we achieve a greener Kenya.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {shopPost.map((post) => (
              <Grid item xs={12} sm={6} md={4}>
                <Product data={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
