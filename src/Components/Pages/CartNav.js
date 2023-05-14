import React, { useState } from "react";
import Cart from "./cart";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsCartFill } from 'react-icons/bs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBag, faTimes);

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(true);
  
    const renderOpenButton = () => (
      <button className="nav__cart-btn--open">
        <BsCartFill size="2x" icon="shopping-bag" color="#292B83"/>
        {cart !== null ? <span>{cart.total_items}</span> : ''}
      </button>
    );
  
    const renderCloseButton = () => (
      <button className="nav__cart-btn--close">
        <BsCartFill size="1x" icon="times" color="white"/>
      </button>
    );
  
    return (
      <div className="nav">
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
          { !isCartVisible ? renderOpenButton() : renderCloseButton() }
      </div>
      {isCartVisible &&
        <Cart
            cart={cart}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
            onEmptyCart={onEmptyCart}
        />
       }
      </div>
    );
  };
  
  export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};