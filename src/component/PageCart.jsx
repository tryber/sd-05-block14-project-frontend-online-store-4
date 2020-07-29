import React from 'react';

class PageCart extends React.Component {
  render() {
    console.log('to dentro do PageCart', this.props.location);
    const { carrinho } = this.props.location.state;
    console.log('carrinho: ', carrinho);

    if (carrinho.length >= 1) {
      return (
        <div>
          {carrinho.map((item) => (
            <div key={item.id}>
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <h4 data-testid="shopping-cart-product-quantity">{item.quantidade}</h4>
            </div>
          ))}
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
