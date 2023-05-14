import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from '@mui/material/Card';

export const Product = (props) => {
  const { id, productName, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    
      <CardMedia component="img" sx={{
        // 16:9
        height: 220,
      }}
        src={image} />
      <CardContent sx={{ flexGrow: 1 }} justify-content="center">
      <Typography gutterBottom variant="h6" component="div">
        {productName}
      </Typography>
      <Typography gutterBottom variant="h7" component="div">
        KSh{price}
      </Typography>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </CardContent>
      
    </Card>
  );
};