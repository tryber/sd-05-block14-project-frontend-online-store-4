import React from 'react';
import { Link } from 'react-router-dom';

class PageCart extends React.Component {
  render() {
    const { increaseQuantity, decreaseQuantity } = this.props;
    const { carrinho } = this.props.location.state;
    if (carrinho.length >= 1) {
      return (
        <div>
          {carrinho.map((item) => (
            <div key={item.id}>
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <h4 data-testid="shopping-cart-product-quantity">{item.quantidade}</h4>
              <button
                data-testid="product-decrease-quantity"
                onClick={() => decreaseQuantity(item.id)}
              > -</button>
              <button
                data-testid="product-increase-quantity"
                onClick={() => increaseQuantity(item.id)}
              > +</button>
            </div>
          ))}
          <Link to="/checkout">
            <button type="button" data-testid="checkout-products">Finalizar Compra</button>
          </Link>
        </div>
      );
    }

    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default PageCart;
