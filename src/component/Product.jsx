import React from 'react';

class Product extends React.Component {
  render() {
    const { produto } = this.props;
    const { title, thumbnail, price } = produto;
    console.log(produto);
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={thumbnail} alt="produto" />
        <h2>{`Preço: $${price}`}</h2>
      </div>
    );
  }
}

export default Product;
