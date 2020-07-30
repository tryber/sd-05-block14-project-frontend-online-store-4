import React from 'react';

class PageCart extends React.Component {
  render() {
    // const { decreaseQuantity, increaseQuantity, algumestado } = this.props;
    const { increaseQuantity } = this.props;
    // const { carrinho } = this.props;
    console.log('to dentro do PageCart', this.props.location);
    const { carrinho } = this.props.location.state;
    console.log('baguette', carrinho);
    if (carrinho.length >= 1) {
      return (
        <div>
          {carrinho.map((item) => (
            <div key={item.id}>
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <h4 data-testid="shopping-cart-product-quantity">{item.quantidade}</h4>
              <button
                data-testid="product-decrease-quantity"
                // onClick={}
              >
                -
              </button>
              <button
                data-testid="product-increase-quantity"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
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
