import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { shopPost } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import Box  from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const theme = createTheme();

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
  <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }} justifyContent="center">
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {shopPost.map((post) => {
          if (cartItems[post.id] !== 0) {
            return <CartItem data={post} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: KSh{totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  </Box>
  </ThemeProvider>
  );
};