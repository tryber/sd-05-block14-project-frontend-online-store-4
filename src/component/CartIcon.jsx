import React from 'react';
import img from '../img/carrinho.png';

class CartIcon extends React.Component {
  render() {
    return (
      <img
        src={img}
        alt="Carrinho"
        data-testid="shopping-cart-button"
        width="50px"
      />
    );
  }
}

export default CartIcon;
