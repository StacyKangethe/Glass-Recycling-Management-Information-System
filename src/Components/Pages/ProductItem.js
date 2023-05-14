import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CartNav from './CartNav';
import cart from './cart';
import handleUpdateCartQty from './CartNav';
import handleRemoveFromCart from './CartNav';
import handleEmptyCart from './CartNav';

const product = [ 
    {
     Id: '1',
     image: 'https://images.unsplash.com/photo-1626747086388-b83fc4e1aca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
     imageLabel: 'sticker',
     productName: 'Metal Bins',
     description: 'Colored bins used in commercial buildings', 
     price: 'Ksh. 3,000',
    },
    {
     Id: '2',
     image: 'https://images.unsplash.com/photo-1610106836884-ec496933aff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
     imageLabel: 'sticker',
     name: 'Striped Metal Bins',
     description: 'Guided bins with instructions of waste disposal', 
     price: 'Ksh. 1,200',
    },
    {
     Id: '3',
     image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXNoJTIwY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
     imageLabel: 'sticker',
     name: 'Sticker Bins',
     description: 'Plastic Bins with colorful stickers indicating type of waste.', 
     price: 'Ksh. 800',
    },
    {
     Id: '4',
     image: 'https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
     imageLabel: 'sticker',
     name: 'B&W Labels',
     description: 'Well designed Labels in well selected typography.', 
     price: 'Ksh. 500',
    },
    {
     Id: '5',
     image: 'https://images.unsplash.com/photo-1572010696997-c73e95aeebe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZyUyMGJveGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
     imageLabel: 'sticker',
     name: 'Labelled Boxes',
     description: 'Used to dispose off glass and storing glass bottles during transportation.', 
     price: 'Ksh. 80',
    },
    {
     Id: '6',
     image: 'https://images.unsplash.com/photo-1675395594169-c6b14260e271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlY3ljbGUlMjBzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
     imageLabel: 'sticker',
     name: 'Wood Signage',
     description: 'Used in public spaces to guide the audience on what is expected within that environment.', 
     price: 'Ksh. 350',
    },
   ];

const theme = createTheme();

function ProductItem(props) { 
    const { products, onAddToCart } = props;

    const handleAddToCart = () => {
        onAddToCart(products.Id,1);
    }

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
              Glass Disposal Accessories
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Meet our certified sellers of our 3 superpowers. Labels, Bins and Packaging Containers right to your doorstep.<br></br>Let us Dispose-off right.
            </Typography>
          </Container>
        </Box>
        <CartNav
          cart={cart}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
          onEmptyCart={handleEmptyCart}
        />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product} onAddToCart={onAddToCart} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: 220,
                    }}
                    image={product.image}
                    alt={product.imageLabel}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button variant="contained">VIEW</Button>
                  <Button variant="outlined" onClick={handleAddToCart}>ADD TO CART</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};


export default ProductItem;





